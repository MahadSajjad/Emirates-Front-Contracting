import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { contactFormSchema, buildWhatsAppLink, buildMailtoLink } from "../../lib/leadCapture.js";
import { services } from "../../data/services.js";
import { sectors } from "../../data/sectors.js";
import Button from "../ui/Button.jsx";
import Toast from "../ui/Toast.jsx";

export const ContactForm = ({ defaultService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService || "General Contracting Inquiry",
    sector: "Commercial",
    message: "",
    botCheck: "", // Honeypot
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ isOpen: false, message: "", type: "success" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Honeypot check
    if (formData.botCheck && formData.botCheck.length > 0) {
      setIsSubmitting(false);
      return;
    }

    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      setToast({
        isOpen: true,
        message: "Please correct the highlighted form errors.",
        type: "error",
      });
      return;
    }

    // Build URL-encoded WhatsApp deep link
    const whatsappUrl = buildWhatsAppLink();

    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setToast({
      isOpen: true,
      message: "Opening WhatsApp with your pre-filled inquiry. Our team will respond promptly!",
      type: "success",
    });

    setIsSubmitting(false);
  };

  const handleMailtoFallback = () => {
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setToast({
        isOpen: true,
        message: "Please provide valid contact information.",
        type: "error",
      });
      return;
    }

    const mailtoUrl = buildMailtoLink({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      sector: formData.sector,
      message: formData.message,
    });

    window.location.href = mailtoUrl;
  };

  return (
    <div className="bg-white border border-slate-200 rounded p-6 sm:p-8 lg:p-10 shadow-lg">
      <div className="mb-8 pb-6 border-b border-slate-200">
        <span className="font-mono text-xs font-bold text-primary-600 uppercase tracking-widest block mb-1">
          Direct Lead Dispatch
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
          Request Project Consultation
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Fill in your project specifications to initiate an immediate WhatsApp engineering consultation or email dispatch.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot field (hidden from genuine users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="botCheck">Leave this empty</label>
          <input
            id="botCheck"
            type="text"
            name="botCheck"
            value={formData.botCheck}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-2"
            >
              Full Name / Company Name <span className="text-primary-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="e.g. Eng. Abdullah Al-Otaibi"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-50 border rounded text-sm text-slate-900 transition-colors focus:bg-white focus:outline-none ${
                errors.name ? "border-rose-500 ring-1 ring-rose-500" : "border-slate-300 focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-2"
            >
              Phone / Mobile (WhatsApp) <span className="text-primary-600">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              placeholder="e.g. 059 014 6337"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-50 border rounded text-sm text-slate-900 transition-colors focus:bg-white focus:outline-none ${
                errors.phone ? "border-rose-500 ring-1 ring-rose-500" : "border-slate-300 focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Sector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-2"
            >
              Email Address <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. procurement@company.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-50 border rounded text-sm text-slate-900 transition-colors focus:bg-white focus:outline-none ${
                errors.email ? "border-rose-500 ring-1 ring-rose-500" : "border-slate-300 focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="sector"
              className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-2"
            >
              Target Sector
            </label>
            <select
              id="sector"
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 transition-colors focus:bg-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
            >
              {sectors.map((sec) => (
                <option key={sec.id} value={sec.title}>
                  {sec.title}
                </option>
              ))}
              <option value="Other">Other / Infrastructure</option>
            </select>
          </div>
        </div>

        {/* Row 3: Service Scope Selector */}
        <div>
          <label
            htmlFor="service"
            className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-2"
          >
            Primary Scope of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded text-sm text-slate-900 transition-colors focus:bg-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
          >
            <option value="General Contracting Inquiry">General Contracting Inquiry (Full Scope)</option>
            <optgroup label="Building Envelope & Façade">
              {services
                .filter((s) => s.category === "facade")
                .map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Civil & Structural">
              {services
                .filter((s) => s.category === "civil")
                .map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
            <optgroup label="MEP Engineering">
              {services
                .filter((s) => s.category === "mep")
                .map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Finishing & Fit-Out">
              {services
                .filter((s) => s.category === "finishing")
                .map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Earthworks & Industrial">
              {services
                .filter((s) => s.category === "earthworks" || s.category === "industrial")
                .map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
          </select>
        </div>

        {/* Row 4: Project Message / Scope details */}
        <div>
          <label
            htmlFor="message"
            className="block font-mono text-xs font-bold uppercase tracking-wider text-slate-900 mb-2"
          >
            Project Summary / Scope Details <span className="text-primary-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Please outline the project location, approximate area (m²), structural requirements, or target timeline..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-slate-50 border rounded text-sm text-slate-900 transition-colors focus:bg-white focus:outline-none resize-y ${
              errors.message ? "border-rose-500 ring-1 ring-rose-500" : "border-slate-300 focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.message}</p>
          )}
        </div>

        {/* Submit Actions: Primary WhatsApp + Fallback Mailto */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <Button
            type="submit"
            variant="cta"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            icon={FaWhatsapp}
            iconPosition="left"
            className="shadow-md sm:flex-1"
          >
            Submit via WhatsApp
          </Button>

          <Button
            type="button"
            onClick={handleMailtoFallback}
            variant="outline"
            size="lg"
            disabled={isSubmitting}
            icon={FaEnvelope}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Email Copy
          </Button>
        </div>

        <p className="font-mono text-[11px] text-muted text-center pt-2">
          Direct dispatch to Emirates Front Contracting procurement team (+966 59 014 6337).
        </p>
      </form>

      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default ContactForm;
