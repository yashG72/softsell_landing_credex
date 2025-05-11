"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./components/ThemeToggle";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerTestimonials from "./components/CustomerTestimonials";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Header with logo */}
      <header className="px-6 py-4 flex justify-center md:justify-start">
        <h1 className="text-2xl font-bold text-indigo-600">SoftSell</h1>
      </header>

      {/* Hero Section with animation */}
      <section className="flex items-center justify-center px-4 py-16">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Sell Unused Software Licenses & Get Instant Value
          </h1>
          <p className="mt-4 text-lg">
            SoftSell helps businesses unlock value from old or unused software licenses quickly and securely.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded hover:bg-indigo-700 transition-colors">
            Get a Quote
          </button>
        </motion.div>
      </section>

      {/* Page Sections */}
      <HowItWorks />
      <WhyChooseUs />
      <CustomerTestimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  );
}
