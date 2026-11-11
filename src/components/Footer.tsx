import React from "react";
import Link from "next/link";
import { EnvelopeSimpleIcon, MapPinIcon, ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { BrandLogo } from "@/components/BrandLogo";
import { CATEGORIES, STORE_INFO } from "@/data/products";

export function Footer() {
  const categoryLinks = CATEGORIES.filter(
    (c) => c.slug !== "all" && c.slug !== "deals"
  );

  return (
    <footer className="mt-16 border-t border-[#E7E9F2] bg-white">
      <div className="mx-auto max-w-[1380px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Warehouse Origin */}
          <div className="space-y-4">
            <BrandLogo />
            <p className="max-w-xs text-sm leading-relaxed text-[#5C6078]">
              Everyday home, kitchen, fitness, pet, garden, and tech essentials
              curated by Joseph Casanova and shipped quickly from New York.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F5FA] px-3.5 py-1.5 text-xs font-semibold text-[#5D45FD]">
              <ShieldCheckIcon size={16} weight="fill" />
              <span>Use code WELCOME15 for 15% off</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
              Departments
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-[#35384B]">
              {categoryLinks.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/shop?category=${cat.slug}`}
                    className="transition-colors hover:text-[#5D45FD]"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
              Shopping & Orders
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-[#35384B]">
              <li>
                <Link href="/shop" className="transition-colors hover:text-[#5D45FD]">
                  All Products (31)
                </Link>
              </li>
              <li>
                <Link href="/shop?category=deals" className="transition-colors hover:text-[#5D45FD]">
                  Current Deals
                </Link>
              </li>
              <li>
                <Link href="/cart" className="transition-colors hover:text-[#5D45FD]">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="transition-colors hover:text-[#5D45FD]">
                  Checkout
                </Link>
              </li>
              <li>
                <Link href="/favourites" className="transition-colors hover:text-[#5D45FD]">
                  Saved Favourites
                </Link>
              </li>
              <li>
                <Link href="/orders" className="transition-colors hover:text-[#5D45FD]">
                  Track Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Real Contact & Catskill Location */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
              Customer Care
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#5C6078]">
              <li className="flex items-start gap-2.5">
                <MapPinIcon size={18} weight="bold" className="mt-0.5 shrink-0 text-[#5D45FD]" />
                <span>{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeSimpleIcon size={18} weight="bold" className="shrink-0 text-[#5D45FD]" />
                <a
                  href={`mailto:${STORE_INFO.email}`}
                  className="font-medium text-[#141523] hover:text-[#5D45FD]"
                >
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeSimpleIcon size={18} weight="bold" className="shrink-0 text-[#8C90A6]" />
                <a
                  href={`mailto:${STORE_INFO.altEmail}`}
                  className="text-xs font-medium text-[#5C6078] hover:text-[#5D45FD]"
                >
                  {STORE_INFO.altEmail}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center rounded-full border border-[#E7E9F2] bg-[#FAFBFD] px-4 py-2 text-xs font-semibold text-[#141523] transition-colors hover:border-[#5D45FD] hover:text-[#5D45FD]"
            >
              Contact Support & Pickup Info
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#ECEEF6] pt-6 text-xs text-[#7A7E96] sm:flex-row">
          <p>
            © 2026 {STORE_INFO.legalName}. All rights reserved.
          </p>
          <p>
            Fast US Shipping · Free Ground Delivery Over ${STORE_INFO.freeShippingThreshold} · 30-Day Returns
          </p>
        </div>
      </div>
    </footer>
  );
}
