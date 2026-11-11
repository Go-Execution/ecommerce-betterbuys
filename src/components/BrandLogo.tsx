import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD] focus-visible:ring-offset-2"
      aria-label="Ecommerce Better Buys Home"
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5D45FD] to-[#7B61FF] text-white shadow-sm shadow-[#5D45FD]/25 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-white"
        >
          <path
            d="M6 7.5C6 5.01472 8.01472 3 10.5 3H13.5C15.9853 3 18 5.01472 18 7.5V8.5H6V7.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4.2 8.5H19.8L20.7 19.1C20.8089 20.3869 19.7938 21.5 18.5024 21.5H5.4976C4.20624 21.5 3.19109 20.3869 3.30001 19.1L4.2 8.5Z"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 13.5L11.2 15.2L15 11.4"
            stroke="#FFD233"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[19px] font-bold tracking-tight text-[#141523]">
            Better<span className="text-[#5D45FD]">Buys</span>
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7A7E96]">
            Curated Goods
          </span>
        </span>
      )}
    </Link>
  );
}
