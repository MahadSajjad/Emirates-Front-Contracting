import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uploadedScreenshot = 'C:/Users/Mahad/.gemini/antigravity/brain/c941600a-08e3-4ce5-82d1-043cd2b03613/.user_uploaded/media_1790428048807.png';

// Helper to construct a multi-resolution .ico buffer containing PNG images
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + numImages * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  for (const img of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.data.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset of image data
    dirEntries.push(entry);
    offset += img.data.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.data)]);
}

async function run() {
  console.log('1. Extracting high-res transparent logo from uploaded screenshot...');
  const { data, info } = await sharp(uploadedScreenshot)
    .extract({ left: 224, top: 0, width: 576, height: 576 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const numPixels = width * height;
  const outData = Buffer.from(data);
  const isBg = new Uint8Array(numPixels);
  const queue = [];

  function colorDist(r, g, b) {
    const dr = r - 230;
    const dg = g - 230;
    const db = b - 230;
    return Math.sqrt(dr * dr + dg * dg + db * db);
  }

  // Seed flood fill from perimeter
  for (let x = 0; x < width; x++) {
    queue.push(0 * width + x);
    queue.push((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    queue.push(y * width + 0);
    queue.push(y * width + (width - 1));
  }

  const bgThreshold = 18;
  let head = 0;
  while (head < queue.length) {
    const idx = queue[head++];
    if (isBg[idx]) continue;

    const px = idx % width;
    const py = Math.floor(idx / width);
    const offset = idx * 4;

    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];

    if (colorDist(r, g, b) <= bgThreshold) {
      isBg[idx] = 1;
      if (px > 0 && !isBg[idx - 1]) queue.push(idx - 1);
      if (px < width - 1 && !isBg[idx + 1]) queue.push(idx + 1);
      if (py > 0 && !isBg[idx - width]) queue.push(idx - width);
      if (py < height - 1 && !isBg[idx + width]) queue.push(idx + width);
    }
  }

  for (let i = 0; i < numPixels; i++) {
    const offset = i * 4;
    if (isBg[i]) {
      outData[offset + 3] = 0;
    } else {
      const px = i % width;
      const py = Math.floor(i / width);
      let hasBgNeighbor = false;
      if (px > 0 && isBg[i - 1]) hasBgNeighbor = true;
      else if (px < width - 1 && isBg[i + 1]) hasBgNeighbor = true;
      else if (py > 0 && isBg[i - width]) hasBgNeighbor = true;
      else if (py < height - 1 && isBg[i + width]) hasBgNeighbor = true;

      if (hasBgNeighbor) {
        const dist = colorDist(data[offset], data[offset + 1], data[offset + 2]);
        if (dist < 40) {
          const alpha = Math.min(255, Math.max(0, Math.round(((dist - bgThreshold) / (40 - bgThreshold)) * 255)));
          outData[offset + 3] = alpha;
        }
      }
    }
  }

  // Master 576x576 transparent logo
  const masterLogoBuffer = await sharp(outData, { raw: { width, height, channels: 4 } })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  // Save public/logo.png and public/images/logo.png
  fs.writeFileSync('public/logo.png', masterLogoBuffer);
  fs.writeFileSync('public/images/logo.png', masterLogoBuffer);
  console.log('Saved public/logo.png & public/images/logo.png');

  // 2. Favicons Generation
  console.log('2. Generating complete favicon suite...');
  const f16 = await sharp(masterLogoBuffer).resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const f32 = await sharp(masterLogoBuffer).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const f48 = await sharp(masterLogoBuffer).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const f180 = await sharp(masterLogoBuffer).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const f192 = await sharp(masterLogoBuffer).resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const f512 = await sharp(masterLogoBuffer).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

  fs.writeFileSync('public/favicon-16x16.png', f16);
  fs.writeFileSync('public/favicon-32x32.png', f32);
  fs.writeFileSync('public/favicon-48x48.png', f48);
  fs.writeFileSync('public/favicon.png', f32);
  fs.writeFileSync('public/apple-touch-icon.png', f180);
  fs.writeFileSync('public/android-chrome-192x192.png', f192);
  fs.writeFileSync('public/android-chrome-512x512.png', f512);

  // Multi-resolution favicon.ico (16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, data: f16 },
    { width: 32, height: 32, data: f32 },
    { width: 48, height: 48, data: f48 },
  ]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('Saved favicon.ico and all PNG favicons.');

  // Favicon SVG with embedded base64 PNG
  const logoBase64 = masterLogoBuffer.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576" width="100%" height="100%">
  <image href="data:image/png;base64,${logoBase64}" width="576" height="576" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', svgContent, 'utf-8');
  console.log('Saved public/favicon.svg');

  // 3. Social Share Image (1200x630 OpenGraph / Twitter)
  console.log('3. Designing high-impact 1200x630 Social Share Image...');
  const logoForOg = await sharp(masterLogoBuffer)
    .resize(440, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061324" />
      <stop offset="45%" stop-color="#091e36" />
      <stop offset="80%" stop-color="#004377" />
      <stop offset="100%" stop-color="#061324" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="25" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Ambient Glow Behind Logo -->
  <circle cx="280" cy="315" r="220" fill="#0066b2" opacity="0.35" filter="url(#glow)" />

  <!-- Accent Border Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
  <rect x="28" y="28" width="1144" height="574" rx="16" fill="none" stroke="rgba(0,102,178,0.25)" stroke-width="1" />

  <!-- Right Side Content -->
  <g transform="translate(540, 95)">
    <!-- Location Badge -->
    <rect x="0" y="0" width="360" height="34" rx="17" fill="rgba(15,23,42,0.85)" stroke="rgba(245,158,11,0.5)" stroke-width="1.5" />
    <circle cx="20" cy="17" r="4.5" fill="#f59e0b" />
    <text x="35" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#f8fafc" letter-spacing="1.5">RIYADH · SULAY (EXIT 18) · KSA</text>

    <!-- Main Title English -->
    <text x="0" y="90" font-family="'Segoe UI', Roboto, Arial, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      EMIRATES FRONT
    </text>
    <text x="0" y="132" font-family="'Segoe UI', Roboto, Arial, sans-serif" font-size="24" font-weight="700" fill="#f59e0b" letter-spacing="2">
      CONTRACTING COMPANY
    </text>

    <!-- Arabic Title -->
    <text x="0" y="176" font-family="'Segoe UI', 'Traditional Arabic', sans-serif" font-size="26" font-weight="700" fill="#93c5fd">
      شركة واجهة الامارات للمقاولات
    </text>

    <!-- Official Tagline -->
    <text x="0" y="216" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="500" fill="#cbd5e1" font-style="italic">
      "Building Excellence. Shaping the Future."
    </text>

    <!-- Scope Pills -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="280" height="32" rx="8" fill="rgba(0,102,178,0.3)" stroke="rgba(56,189,248,0.3)" />
      <text x="14" y="21" font-family="sans-serif" font-size="12" font-weight="600" fill="#e0f2fe">🚜 Heavy Plant &amp; Truck Rentals</text>

      <rect x="295" y="0" width="285" height="32" rx="8" fill="rgba(0,102,178,0.3)" stroke="rgba(56,189,248,0.3)" />
      <text x="309" y="21" font-family="sans-serif" font-size="12" font-weight="600" fill="#e0f2fe">🛣️ Road Works &amp; Asphalting</text>

      <rect x="0" y="42" width="280" height="32" rx="8" fill="rgba(0,102,178,0.3)" stroke="rgba(56,189,248,0.3)" />
      <text x="14" y="63" font-family="sans-serif" font-size="12" font-weight="600" fill="#e0f2fe">🏡 Luxury Villas &amp; Civil Works</text>

      <rect x="295" y="42" width="285" height="32" rx="8" fill="rgba(0,102,178,0.3)" stroke="rgba(56,189,248,0.3)" />
      <text x="309" y="63" font-family="sans-serif" font-size="12" font-weight="600" fill="#e0f2fe">💡 Street Lighting &amp; MEP Works</text>
    </g>

    <!-- Website &amp; Phone Footer Strip -->
    <g transform="translate(0, 365)">
      <text x="0" y="28" font-family="monospace" font-size="18" font-weight="700" fill="#38bdf8">🌐 https://emiratesfront.site</text>
      <text x="340" y="28" font-family="monospace" font-size="18" font-weight="700" fill="#f59e0b">📞 +966 59 014 6337</text>
    </g>
  </g>
</svg>`;

  // Composite the SVG with the logo image placed at x=75, y=95
  const ogImage = await sharp(Buffer.from(ogSvg))
    .composite([
      { input: logoForOg, left: 75, top: 95 }
    ])
    .png({ quality: 95 })
    .toBuffer();

  fs.writeFileSync('public/images/og-cover.png', ogImage);

  // Also write as JPG for maximum compatibility
  const ogJpg = await sharp(ogImage)
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync('public/images/og-cover.jpg', ogJpg);
  console.log('Saved public/images/og-cover.png and og-cover.jpg (1200x630)!');
}

run().catch(console.error);
