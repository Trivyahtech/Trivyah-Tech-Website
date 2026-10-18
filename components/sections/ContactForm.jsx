"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact, site } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

// EmailJS (same account/template as the previous v0 site). These are public, browser-safe keys.
const emailjsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
};

const limits = { name: 100, email: 200, phone: 30, message: 5000 };

const inputClass =
  "w-full rounded-tile border border-white/10 bg-ink/60 px-4 py-3 text-b2 text-fg placeholder:text-muted/70 transition-colors outline-none hover:border-white/25 focus:border-white/50 aria-invalid:border-red-400/70";

function validate(values) {
  const errors = {};
  if (!values.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !/^[+\d][\d\s-]{6,}$/.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (!contact.services.includes(values.service)) errors.service = "Please choose a service.";
  if (!values.message) errors.message = "Please write a short message.";
  for (const [key, max] of Object.entries(limits)) {
    if (values[key].length > max) errors[key] = `Please keep this under ${max} characters.`;
  }
  return errors;
}

function Field({ id, label, optional, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-b3 font-medium text-fg">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-b3 text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Honeypot: real visitors never see or fill this field.
    if (formData.get("company")) return setStatus("sent");

    const values = Object.fromEntries(
      ["name", "email", "phone", "service", "message"].map((key) => [key, String(formData.get(key) ?? "").trim()]),
    );
    const found = validate(values);
    setErrors(found);
    setMessage("");
    if (Object.keys(found).length) return;

    const { publicKey, serviceId, templateId } = emailjsConfig;
    if (!publicKey || !serviceId || !templateId) {
      console.error("Contact form: EmailJS environment variables are not set.");
      return setMessage(`Sorry, the form isn't working right now. Please email us at ${site.email}.`);
    }

    setStatus("sending");
    try {
      // Field names match the existing EmailJS template. The template has no "service"
      // variable, so the service is added to the top of the message.
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: site.email,
          from_name: values.name,
          from_email: values.email,
          phone: values.phone || "-",
          message: `Service: ${values.service}\n\n${values.message}`,
        },
        { publicKey },
      );
      setStatus("sent");
    } catch (error) {
      console.error("Contact form: EmailJS error.", error);
      setStatus("idle");
      setMessage(`Sorry, something went wrong. Please try again or email us at ${site.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-2 py-6">
        <p className="font-display text-h7 font-semibold text-fg">Thanks, your message is on its way.</p>
        <p className="text-b2 text-muted">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  const invalid = (name) =>
    errors[name] ? { "aria-invalid": true, "aria-describedby": `contact-${name}-error` } : {};
  const pending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="contact-name" label="Name" error={errors.name}>
          <input id="contact-name" name="name" autoComplete="name" required className={inputClass} {...invalid("name")} />
        </Field>
        <Field id="contact-email" label="Email" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            {...invalid("email")}
          />
        </Field>
        <Field id="contact-phone" label="Phone" optional error={errors.phone}>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} {...invalid("phone")} />
        </Field>
        <Field id="contact-service" label="Service" error={errors.service}>
          <select
            id="contact-service"
            name="service"
            required
            defaultValue=""
            className={cn(inputClass, "appearance-none")}
            {...invalid("service")}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {contact.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={cn(inputClass, "resize-y")}
          {...invalid("message")}
        />
      </Field>

      {/* Honeypot for spam bots */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <input name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button
          type="submit"
          disabled={pending}
          font="body"
          icon={pending ? undefined : "arrow-right"}
          className="disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send Message"}
        </Button>
        {message && (
          <p role="alert" className="text-b3 text-red-300">
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
