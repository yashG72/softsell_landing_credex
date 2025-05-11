"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted (mock only)");
    } else {
      setErrors(validationErrors);
    }
  };

  const inputBase =
    "w-full rounded-md border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition";

  return (
    <section className="py-20 px-4 bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputBase}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={inputBase}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputBase}
              placeholder="Your company name"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Select type</option>
              <option value="software">Software</option>
              <option value="enterprise">Enterprise</option>
              <option value="cloud">Cloud</option>
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={inputBase}
              placeholder="Tell us more about your request..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
