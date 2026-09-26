import sharp from 'sharp';
import fs from 'fs';

const input = 'C:/Users/Mahad/.gemini/antigravity/brain/c941600a-08e3-4ce5-82d1-043cd2b03613/.user_uploaded/media_1790428048807.png';

async function testFloodFill() {
  const { data, info } = await sharp(input)
    .extract({ left: 224, top: 0, width: 576, height: 576 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const numPixels = width * height;
  
  // Create an output buffer (RGBA)
  const outData = Buffer.from(data);
  
  // Visited / background mask
  const isBg = new Uint8Array(numPixels);
  const queue = [];

  // Color distance helper from (230, 230, 230)
  function colorDist(r, g, b) {
    const dr = r - 230;
    const dg = g - 230;
    const db = b - 230;
    return Math.sqrt(dr * dr + dg * dg + db * db);
  }

  // Seed flood fill from all perimeter pixels
  for (let x = 0; x < width; x++) {
    queue.push(0 * width + x);           // top row
    queue.push((height - 1) * width + x); // bottom row
  }
  for (let y = 0; y < height; y++) {
    queue.push(y * width + 0);           // left column
    queue.push(y * width + (width - 1)); // right column
  }

  // Threshold for background flood fill
  // Pure background is distance 0.
  // Subtle compression artifacts might be up to distance 15.
  const bgThreshold = 18;

  let head = 0;
  while (head < queue.length) {
    const idx = queue[head++];
    if (isBg[idx]) continue;

    const px = (idx % width);
    const py = Math.floor(idx / width);
    const offset = idx * 4;

    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];

    const dist = colorDist(r, g, b);
    if (dist <= bgThreshold) {
      isBg[idx] = 1;

      // Check 4-connected neighbors
      if (px > 0 && !isBg[idx - 1]) queue.push(idx - 1);
      if (px < width - 1 && !isBg[idx + 1]) queue.push(idx + 1);
      if (py > 0 && !isBg[idx - width]) queue.push(idx - width);
      if (py < height - 1 && !isBg[idx + width]) queue.push(idx + width);
    }
  }

  console.log(`Flood fill completed. Background pixels found: ${queue.length} of ${numPixels}`);

  // Now, for anti-aliasing:
  // For pixels adjacent to isBg: if dist <= 45, compute alpha based on how far it is from the background color!
  // For isBg: alpha = 0.
  for (let i = 0; i < numPixels; i++) {
    const offset = i * 4;
    if (isBg[i]) {
      outData[offset + 3] = 0; // Completely transparent
    } else {
      // Check if neighboring any background pixel
      const px = i % width;
      const py = Math.floor(i / width);
      let hasBgNeighbor = false;
      if (px > 0 && isBg[i - 1]) hasBgNeighbor = true;
      else if (px < width - 1 && isBg[i + 1]) hasBgNeighbor = true;
      else if (py > 0 && isBg[i - width]) hasBgNeighbor = true;
      else if (py < height - 1 && isBg[i + width]) hasBgNeighbor = true;

      if (hasBgNeighbor) {
        const r = data[offset];
        const g = data[offset + 1];
        const b = data[offset + 2];
        const dist = colorDist(r, g, b);
        if (dist < 40) {
          // Smooth transition
          const alpha = Math.min(255, Math.max(0, Math.round(((dist - bgThreshold) / (40 - bgThreshold)) * 255)));
          outData[offset + 3] = alpha;
        }
      }
    }
  }

  // Save the result as high-res 576x576 transparent PNG
  await sharp(outData, { raw: { width, height, channels: 4 } })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile('public/logo.png');

  console.log('Saved public/logo.png successfully!');

  // Check trimmed bounds of non-transparent logo in public/logo.png
  const trimmed = await sharp('public/logo.png').trim().toBuffer({ resolveWithObject: true });
  console.log(`Trimmed logo bounds: ${trimmed.info.width}x${trimmed.info.height}`);
}

testFloodFill().catch(console.error);
