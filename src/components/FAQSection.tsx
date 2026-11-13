"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  CaretDownIcon,
  ChatCircleTextIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparkleIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import { STORE_INFO } from "@/data/products";

interface FAQItem {
  id: string;
  category: "shipping" | "returns" | "orders" | "general";
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-shipping-time",
    category: "shipping",
    question: "How fast does shipping take?",
    answer:
      "All orders are processed and dispatched within 24 hours from our warehouse in Catskill, New York. Standard ground delivery takes 3 to 5 business days across the continental United States. Express 2-Day Priority shipping is also available at checkout if you need your items sooner.",
  },
  {
    id: "faq-free-shipping",
    category: "shipping",
    question: "Is shipping free?",
    answer:
      `Yes! We offer automatic Free Standard Ground Shipping on all orders over $${STORE_INFO.freeShippingThreshold}.00. For orders under $${STORE_INFO.freeShippingThreshold}, standard flat-rate shipping is just $5.95 with full tracking included.`,
  },
  {
    id: "faq-returns",
    category: "returns",
    question: "What is your return & refund policy?",
    answer:
      "We stand behind every item with our 30-Day Hassle-Free Return Guarantee. If you are not completely satisfied with your purchase, contact us at info@ecommercebetterbuys.com within 30 days of delivery. We will issue a prepaid return shipping label and provide a full refund to your original payment method.",
  },
  {
    id: "faq-pickup",
    category: "orders",
    question: "Can I pick up my order locally in New York?",
    answer:
      `Yes! If you are local to Greene County or the Hudson Valley, choose "Catskill Warehouse Pickup" at checkout for free. Your order is typically prepared and ready for collection within 2 hours at ${STORE_INFO.address}.`,
  },
  {
    id: "faq-tracking",
    category: "orders",
    question: "How do I track my shipment?",
    answer:
      "As soon as your package is dispatched, you will receive an email confirmation with your official live courier tracking number (USPS or UPS). You can also click 'Track Orders' in our navigation to look up your order status in real time.",
  },
  {
    id: "faq-quality",
    category: "general",
    question: "Are your products authentic and quality-inspected?",
    answer:
      "Every single home, kitchen, fitness, tech, and pet care essential is directly curated, packaged, and inspected by Joseph Casanova and our New York team. We only source genuine, high-grade items that we use ourselves.",
  },
  {
    id: "faq-payments",
    category: "general",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), Apple Pay, Google Pay, and secure encrypted checkout. All transactions are protected by industry-standard 256-bit SSL encryption.",
  },
  {
    id: "faq-promos",
    category: "general",
    question: "Do you have any discount or welcome promo codes?",
    answer:
      "Yes! First-time buyers can use promo code WELCOME15 at checkout for 15% off their entire order. Returning customers can also use code BETTER10 for 10% off everyday orders.",
  },
];

type CategoryFilter = "all" | "shipping" | "returns" | "orders" | "general";

const CATEGORY_TABS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Questions" },
  { id: "shipping", label: "Shipping & Delivery" },
  { id: "returns", label: "Returns & Guarantee" },
  { id: "orders", label: "Orders & Local Pickup" },
  { id: "general", label: "Products & Payment" },
];

export function FAQSection() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-shipping-time": true,
    "faq-free-shipping": true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    activeTab === "all"
      ? FAQS
      : FAQS.filter((faq) => faq.category === activeTab);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 rounded-[32px] border border-[#E7E9F2] bg-white p-6 shadow-sm shadow-[#01143F]/5 sm:p-10 lg:p-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF1E5] px-3.5 py-1 text-xs font-bold text-[#FF6B00]">
          <SparkleIcon size={13} weight="fill" />
          <span>Got Questions? We Have Answers</span>
        </span>

        <h2
          id="faq-heading"
          className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#0B1736] sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-sm text-[#526079] sm:text-base">
          Clear answers about shipping from New York, free ground delivery, 30-day returns, and warehouse pickup.
        </p>

        {/* Category Filter Chips */}
        <div className="no-scrollbar mt-6 flex items-center justify-center gap-2 overflow-x-auto pb-1">
          {CATEGORY_TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                  active
                    ? "bg-[#01143F] text-white shadow-sm shadow-[#01143F]/30"
                    : "border border-[#E7E9F2] bg-white text-[#526079] hover:border-[#FFCCA6] hover:text-[#FF6B00]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = Boolean(openIds[faq.id]);
          return (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "border-[#0077EE]/40 bg-[#FAFBFD] shadow-xs"
                  : "border-[#E7E9F2] bg-white hover:border-[#DFE2EE]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
              >
                <span className="font-display text-base font-bold text-[#0B1736] sm:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                    isOpen
                      ? "rotate-180 bg-[#FF6B00] text-white"
                      : "bg-[#F4F6FA] text-[#0B1736]"
                  }`}
                >
                  <CaretDownIcon size={16} weight="bold" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden px-5 pb-5 pt-1 text-sm leading-relaxed text-[#526079] sm:text-[15px]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Direct Contact Callout */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#E7E9F2] bg-[#F7F9FC] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
        <div>
          <h3 className="font-display text-base font-bold text-[#0B1736]">
            Still have questions or need a custom order?
          </h3>
          <p className="mt-1 text-xs text-[#526079] sm:text-sm">
            Joseph Casanova and our Catskill team respond to every inquiry within 24 hours.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:mt-0">
          <a
            href={`mailto:${STORE_INFO.email}`}
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#01143F] px-4 text-xs font-bold text-white transition-colors hover:bg-[#0A2558]"
          >
            <EnvelopeSimpleIcon size={14} weight="bold" />
            <span>Email Us</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#0077EE] bg-white px-4 text-xs font-bold text-[#0077EE] transition-colors hover:bg-[#EAF3FF]"
          >
            <ChatCircleTextIcon size={14} weight="bold" />
            <span>Contact Page</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
