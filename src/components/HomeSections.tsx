"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react";
import { CATEGORIES } from "@/data/products";
import { FAQSection } from "@/components/FAQSection";

export function HomeSections() {
  const reduce = useReducedMotion();
  const departmentCards = CATEGORIES.filter(
    (c) => c.slug !== "all" && c.slug !== "deals"
  );

  return (
    <div className="mx-auto mt-12 max-w-[1380px] space-y-14 px-4 sm:px-6 lg:px-8">
      {/* Compact Shop by Department Row (Image-forward, minimal text) */}
      <section aria-labelledby="departments-heading">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2
            id="departments-heading"
            className="font-display text-2xl font-bold tracking-tight text-[#141523] sm:text-[28px]"
          >
            Shop by Category
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0077EE] hover:underline"
          >
            <span>All departments</span>
            <ArrowRightIcon size={15} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {departmentCards.map((dept) => (
            <motion.div
              key={dept.slug}
              whileHover={reduce ? undefined : { y: -4 }}
              className="ebb-scroll-card"
            >
              <Link
                href={`/shop?category=${dept.slug}`}
                className="group flex h-full flex-col items-center rounded-[22px] border border-[#EAECEF] bg-white p-3.5 text-center shadow-xs transition-all hover:border-[#FFCCA6] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
              >
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F3F4F8] p-2.5">
                  <img
                    src={dept.featuredImage}
                    alt={dept.name}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${
                      dept.slug === "garden-outdoor"
                        ? "rounded-xl object-cover"
                        : "object-contain mix-blend-multiply"
                    }`}
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#141523] transition-colors group-hover:text-[#FF6B00]">
                  {dept.shortName}
                </h3>
                <span className="mt-0.5 text-[11px] font-medium text-[#7A7E96]">
                  {dept.count} products
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Single Clean Deal Promo Strip */}
      <section aria-label="Welcome promotion">
        <div className="flex flex-col items-start justify-between gap-5 rounded-[26px] bg-gradient-to-r from-[#01143F] via-[#0A2558] to-[#123B88] p-6 text-white shadow-lg shadow-[#01143F]/25 sm:flex-row sm:items-center sm:p-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-xs">
              <SparkleIcon size={13} weight="fill" className="text-[#FFD233]" />
              <span>Code WELCOME15</span>
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
              Take 15% off your first order
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop?category=deals"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FF6B00] px-6 text-sm font-bold text-white shadow-sm transition-transform hover:bg-[#E55A00] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Shop Deals</span>
              <ArrowRightIcon size={16} weight="bold" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex h-11 items-center rounded-full border border-white/50 bg-white/15 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#01143F]"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FAQSection />
    </div>
  );
}
