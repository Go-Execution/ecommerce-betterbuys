import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  compact?: boolean;
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2"
      aria-label="Ecommerce Better Buys LLC Home"
    >
      {compact ? (
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#01143F] shadow-sm shadow-[#01143F]/25 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
          <Image
            src="/images/better-buys-icon.png"
            alt="Ecommerce Better Buys"
            width={44}
            height={44}
            className="h-8 w-8 object-contain"
            priority
          />
        </span>
      ) : (
        <span className="relative flex items-center overflow-hidden rounded-xl bg-[#01143F] px-3 py-1.5 shadow-sm shadow-[#01143F]/20 transition-transform duration-200 group-hover:scale-[1.02] group-active:scale-[0.98]">
          <Image
            src="/images/better-buys-logo.png"
            alt="Ecommerce Better Buys LLC"
            width={200}
            height={72}
            className="h-10 w-auto object-contain sm:h-11 md:h-12"
            priority
          />
        </span>
      )}
    </Link>
  );
}
