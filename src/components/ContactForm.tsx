import { sendEmail } from "@/utilis/sendEmail";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Confirmation from "./Confirmation";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      const res = await sendEmail(data);
      if (res.ok) {
        setSent(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputClass =
    "w-full border rounded-xl px-5 py-3.5 font-body text-[13px] focus:border-acid-border focus:outline-none transition-colors duration-200";
  const inputStyle = {
    background: "var(--bg-3)",
    borderColor: "var(--border-color)",
    color: "var(--text-primary)",
  } as React.CSSProperties;

  return (
    <div
      className="border rounded-xl p-10"
      style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}
    >
      {!sent ? (
        <>
          <h2
            className="font-display font-bold text-3xl mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Book a Free Strategy Call
          </h2>
          <p
            className="text-base font-body mb-8"
            style={{ color: "var(--muted)" }}
          >
            We&apos;ll get back to you within 4 hours on business days.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  First Name *
                </label>
                <input
                  required
                  placeholder="John"
                  {...register("firstName")}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Last Name *
                </label>
                <input
                  required
                  placeholder="Smith"
                  {...register("lastName")}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                Email *
              </label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                Phone
              </label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                {...register("phone")}
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                How did you hear about us? *
              </label>
              <select
                required
                {...register("hearAboutUs")}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={inputStyle}
              >
                <option value="" disabled>
                  Select your industry
                </option>
                {["twitter", "Google", "Referral", "Social Media", "Other"].map(
                  (o) => (
                    <option key={o}>{o}</option>
                  ),
                )}
              </select>
            </div>

            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                Business Type *
              </label>
              <select
                required
                {...register("businessType")}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={inputStyle}
              >
                <option value="" disabled>
                  Select your industry
                </option>
                {[
                  "Real Estate Agent / Team",
                  "Mortgage Broker / Lender",
                  "Plumbing / HVAC",
                  "Cleaning Service",
                  "Landscaping / Lawn Care",
                  "General Contractor",
                  "Roofing / Siding",
                  "Electrician",
                  "Other Home Service",
                  "Other",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                What are you looking for? *
              </label>
              <select
                required
                {...register("service")}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={inputStyle}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {[
                  "New Website (Framer)",
                  "New Website (Webflow)",
                  "New Website (Custom / Next.js)",
                  "Website Redesign",
                  "Sanity CMS Setup",
                  "SEO & CRO Audit",
                  "Not sure — I need advice",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                Current Website URL
              </label>
              <input
                type="url"
                placeholder="https://yoursite.com"
                {...register("website")}
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                Tell us about your project *
              </label>
              <textarea
                required
                rows={4}
                {...register("message")}
                placeholder="What's the #1 problem your current website has?"
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>
            <div>
              <label
                className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                Budget Range
              </label>
              <select
                {...register("budget")}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={inputStyle}
              >
                <option value="">Approximate budget</option>
                {[
                  "Under $2,000",
                  "$2,000 – $5,000",
                  "$5,000 – $10,000",
                  "$10,000 – $20,000",
                  "$20,000+",
                  "Not sure yet",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200 mt-2"
            >
              {isSubmitting ? "Sending..." : "Book My Free Strategy Call →"}
            </button>
            <p
              className="text-center text-[11px] font-body"
              style={{ color: "var(--muted)" }}
            >
              No commitment required. We&apos;ll reach out within 4 hours.
            </p>
          </form>
        </>
      ) : (
        <Confirmation />
      )}
    </div>
  );
}
