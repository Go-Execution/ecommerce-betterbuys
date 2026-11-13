import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Ecommerce Better Buys",
  description:
    "Find answers to frequently asked questions about shipping, 30-day returns, local pickup in Catskill NY, payments, and order tracking.",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0077EE] hover:underline"
        >
          <ArrowLeftIcon size={16} weight="bold" />
          <span>Back to Home</span>
        </Link>
      </div>
      <FAQSection />
    </div>
  );
}
