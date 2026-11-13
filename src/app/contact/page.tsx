"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import { STORE_INFO } from "@/data/products";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderRef, setOrderRef] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
    setName("");
    setEmail("");
    setOrderRef("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-[1160px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          <span className="inline-flex rounded-full bg-[#EEEBFF] px-3 py-1 text-xs font-bold text-[#5D45FD]">
            Customer Support & Local Pickup
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#141523]">
            Questions about an order or product?
          </h1>
          <p className="text-sm leading-relaxed text-[#5C6078]">
            Reach our Catskill, NY team directly for order tracking, product sizing, bulk availability, or local pickup coordination.
          </p>

          <div className="space-y-3 rounded-[24px] border border-[#EAECEF] bg-white p-5 shadow-xs">
            <div className="flex items-start gap-3">
              <MapPinIcon size={20} weight="bold" className="mt-0.5 shrink-0 text-[#0077EE]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
                  Fulfillment & Pickup Address
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#141523]">
                  {STORE_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-[#F3F4F8] pt-3">
              <EnvelopeSimpleIcon size={20} weight="bold" className="mt-0.5 shrink-0 text-[#0077EE]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
                  Direct Email
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#141523]">
                  <a href={`mailto:${STORE_INFO.email}`} className="hover:text-[#FF6B00]">
                    {STORE_INFO.email}
                  </a>
                </p>
                <p className="text-xs text-[#5C6078]">
                  <a href={`mailto:${STORE_INFO.altEmail}`} className="hover:text-[#FF6B00]">
                    {STORE_INFO.altEmail}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-[#F3F4F8] pt-3">
              <TruckIcon size={20} weight="bold" className="mt-0.5 shrink-0 text-[#0077EE]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
                  Dispatch Window
                </p>
                <p className="mt-0.5 text-sm text-[#5C6078]">
                  Orders placed before 2 PM EST ship same business day. Local pickup ready in 2 hours.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/shop"
            className="inline-flex h-11 items-center rounded-full border border-[#0077EE] bg-white px-6 text-sm font-semibold text-[#0077EE] hover:bg-[#EAF3FF]"
          >
            Back to Storefront
          </Link>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-[#EAECEF] bg-white p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <CheckCircleIcon size={32} weight="fill" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-[#141523]">
                  Message Sent!
                </h2>
                <p className="mt-2 text-sm text-[#5C6078]">
                  Thanks for reaching out to Ecommerce Better Buys. Our Catskill team responds within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full bg-[#FF6B00] px-6 py-2.5 text-xs font-bold text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-display text-xl font-bold text-[#141523]">
                  Send a Support Message
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="cnt-name"
                      className="block text-xs font-bold text-[#35384B]"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="cnt-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Taylor Brooks"
                      className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base focus:border-[#0077EE] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cnt-email"
                      className="block text-xs font-bold text-[#35384B]"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="cnt-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base focus:border-[#0077EE] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cnt-order"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    Order Number (optional)
                  </label>
                  <input
                    id="cnt-order"
                    type="text"
                    value={orderRef}
                    onChange={(e) => setOrderRef(e.target.value)}
                    placeholder="EBB-123456"
                    className="mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base focus:border-[#0077EE] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cnt-msg"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="cnt-msg"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help with your order or product question?"
                    className="ebb-input mt-1.5 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] p-4 text-base focus:border-[#0077EE] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#FF6B00] px-7 text-sm font-bold text-white shadow-md shadow-[#FF6B00]/25 transition-all hover:bg-[#E55A00] active:scale-[0.98]"
                >
                  <PaperPlaneTiltIcon size={17} weight="bold" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
