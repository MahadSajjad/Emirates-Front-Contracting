import { z } from "zod";
import siteConfig from "../config/siteConfig.js";

/**
 * Lead capture form validation schema using Zod
 */
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your full name or company name." }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Please enter a valid phone number." })
    .regex(/^[0-9+\s\-()]{8,20}$/, { message: "Please enter a valid contact number." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .or(z.literal("")),
  service: z.string().optional().default("General Inquiry"),
  sector: z.string().optional().default("General"),
  message: z.string().trim().min(5, { message: "Please describe your project or inquiry (minimum 5 characters)." }),
  // Honeypot field for bot detection (must remain empty)
  botCheck: z.string().max(0, { message: "Spam detected." }).optional().or(z.literal("")),
});

/**
 * Generates a pre-filled WhatsApp click-to-chat URL
 * @param {Object} params
 * @param {string} [params.name]
 * @param {string} [params.phone]
 * @param {string} [params.service]
 * @param {string} [params.sector]
 * @param {string} [params.message]
 * @returns {string} URL encoded wa.me link
 */
export const buildWhatsAppLink = () => {
  const whatsappNumber = siteConfig.phone.rawWhatsApp;

  const lines = [
    "Hello Emirates Front, I would like to inquire about your contracting services.",
    "----------------------------------------",
    "Sent via Emirates Front Website",
  ];

  const formattedText = lines.join("\n");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
};

/**
 * Generates a mailto fallback link
 * @param {Object} params
 * @returns {string} mailto link
 */
export const buildMailtoLink = ({
  name = "",
  phone = "",
  service = "General Contracting Inquiry",
  sector = "",
  message = "",
} = {}) => {
  const recipient = siteConfig.email;
  const subject = `[Website Lead] ${service}${name ? ` - ${name}` : ""}`;
  
  const bodyLines = [
    `Emirates Front Contracting Inquiry`,
    `=================================`,
    ``,
    `Name: ${name || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Service of Interest: ${service || "General"}`,
    `Sector: ${sector || "Not specified"}`,
    ``,
    `Project Description:`,
    `${message || "No additional message provided."}`,
    ``,
    `---------------------------------`,
    `Sent from https://emiratesfront.com`,
  ];

  const body = bodyLines.join("\n");
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Optional Form Relay handler (Web3Forms/Formspree if configured via env)
 * Safely resolves without crashing if unconfigured
 */
export const submitToFormRelay = async (formData) => {
  const relayEndpoint = import.meta.env.VITE_FORM_RELAY_URL;
  if (!relayEndpoint) {
    // Graceful fallback to client-side WhatsApp/mailto
    return { success: false, reason: "NO_RELAY_CONFIGURED" };
  }

  try {
    const response = await fetch(relayEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    }
    return { success: false, reason: "HTTP_ERROR", status: response.status };
  } catch (err) {
    console.warn("Form relay notice:", err);
    return { success: false, reason: "NETWORK_ERROR" };
  }
};
