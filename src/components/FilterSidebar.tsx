"use client";

import React, { useMemo, useState } from "react";
import { CheckIcon, StarIcon } from "@phosphor-icons/react";
import { ALL_BRANDS, PRODUCTS } from "@/data/products";
import { CatalogFilters } from "@/types/store";

interface FilterSidebarProps {
  filters: CatalogFilters;
  onChange: (next: CatalogFilters) => void;
  minLimit?: number;
  maxLimit?: number;
}

export function FilterSidebar({
  filters,
  onChange,
  minLimit = 15,
  maxLimit = 45,
}: FilterSidebarProps) {
  const [showAllBrands, setShowAllBrands] = useState(false);

  const avgPrice = useMemo(() => {
    const relevant =
      filters.category === "all"
        ? PRODUCTS
        : filters.category === "deals"
        ? PRODUCTS.filter((p) => Boolean(p.compareAtPrice))
        : PRODUCTS.filter((p) => p.categorySlug === filters.category);
    if (!relevant.length) return 23;
    const sum = relevant.reduce((acc, p) => acc + p.price, 0);
    return Math.round(sum / relevant.length);
  }, [filters.category]);

  // Compute histogram buckets from $15 to $45 across 12 bins
  const histogramPoints = useMemo(() => {
    const bins = 12;
    const step = (maxLimit - minLimit) / bins;
    const counts = Array.from({ length: bins }, (_, idx) => {
      const low = minLimit + idx * step;
      const high = low + step;
      return PRODUCTS.filter((p) =>
        idx === bins - 1
          ? p.price >= low && p.price <= high
          : p.price >= low && p.price < high
      ).length;
    });
    const maxCount = Math.max(1, ...counts);
    // Build smooth mountain-like SVG points matching the reference aesthetic
    return counts.map((c, i) => ({
      x: (i / (bins - 1)) * 220,
      y: 56 - (c / maxCount) * 44 - (i % 2 === 0 ? 4 : 0),
    }));
  }, [minLimit, maxLimit]);

  const areaPath = useMemo(() => {
    if (!histogramPoints.length) return "";
    const line = histogramPoints
      .map((pt, idx) => `${idx === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`)
      .join(" ");
    return `${line} L 220 60 L 0 60 Z`;
  }, [histogramPoints]);

  const leftPercent = Math.max(
    0,
    Math.min(100, ((filters.priceMin - minLimit) / (maxLimit - minLimit)) * 100)
  );
  const rightPercent = Math.max(
    0,
    Math.min(100, ((filters.priceMax - minLimit) / (maxLimit - minLimit)) * 100)
  );

  const visibleBrands = showAllBrands ? ALL_BRANDS : ALL_BRANDS.slice(0, 7);

  const toggleBrand = (brand: string) => {
    const exists = filters.brands.includes(brand);
    const nextBrands = exists
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onChange({ ...filters, brands: nextBrands });
  };

  return (
    <aside aria-label="Product filters" className="flex flex-col gap-3.5">
      {/* 1. Price Range Card with SVG Distribution Sparkline */}
      <section className="rounded-[22px] border border-[#EAECEF] bg-white p-4 shadow-[0_2px_10px_rgba(20,21,35,0.025)]">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-[#141523]">Price Range</h2>
          <button
            type="button"
            onClick={() =>
              onChange({ ...filters, priceMin: minLimit, priceMax: maxLimit })
            }
            className="text-xs font-semibold text-[#7A7E96] transition-colors hover:text-[#0077EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
          >
            Reset
          </button>
        </div>
        <p className="mt-0.5 text-xs text-[#7A7E96]">
          The average price is ${avgPrice}
        </p>

        {/* Price Distribution Histogram + Dual Range Slider */}
        <div className="relative mt-4 pt-2">
          <svg
            viewBox="0 0 220 60"
            className="h-14 w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ebbHistGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C66FF" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#C8BFFF" stopOpacity="0.12" />
              </linearGradient>
              <clipPath id="ebbHistActiveClip">
                <rect
                  x={(leftPercent / 100) * 220}
                  y="0"
                  width={Math.max(0, ((rightPercent - leftPercent) / 100) * 220)}
                  height="60"
                />
              </clipPath>
            </defs>
            {/* Inactive muted background */}
            <path d={areaPath} fill="#ECEEF6" />
            {/* Active range highlight */}
            <path
              d={areaPath}
              fill="url(#ebbHistGrad)"
              clipPath="url(#ebbHistActiveClip)"
            />
          </svg>

          {/* Range Track + Native Accessible Sliders */}
          <div className="relative mt-1 h-6">
            <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-[#E6E8F2]" />
            <div
              className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#FF6B00]"
              style={{
                left: `${leftPercent}%`,
                width: `${Math.max(0, rightPercent - leftPercent)}%`,
              }}
            />

            <label htmlFor="price-min-range" className="visually-hidden">
              Minimum price
            </label>
            <input
              id="price-min-range"
              type="range"
              min={minLimit}
              max={maxLimit}
              step={1}
              value={filters.priceMin}
              aria-valuetext={`Minimum $${filters.priceMin}`}
              onChange={(e) => {
                const val = Math.min(Number(e.target.value), filters.priceMax - 1);
                onChange({ ...filters, priceMin: val });
              }}
              className="ebb-range pointer-events-none absolute inset-0 z-10 w-full"
            />

            <label htmlFor="price-max-range" className="visually-hidden">
              Maximum price
            </label>
            <input
              id="price-max-range"
              type="range"
              min={minLimit}
              max={maxLimit}
              step={1}
              value={filters.priceMax}
              aria-valuetext={`Maximum $${filters.priceMax}`}
              onChange={(e) => {
                const val = Math.max(Number(e.target.value), filters.priceMin + 1);
                onChange({ ...filters, priceMax: val });
              }}
              className="ebb-range pointer-events-none absolute inset-0 z-20 w-full"
            />
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex rounded-full bg-[#141523] px-3 py-1 text-xs font-semibold text-white shadow-sm">
              ${filters.priceMin}
            </span>
            <span className="text-[11px] font-medium text-[#8C90A6]">to</span>
            <span className="inline-flex rounded-full bg-[#141523] px-3 py-1 text-xs font-semibold text-white shadow-sm">
              ${filters.priceMax}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Star Rating Card */}
      <section className="rounded-[22px] border border-[#EAECEF] bg-white p-4 shadow-[0_2px_10px_rgba(20,21,35,0.025)]">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-[#141523]">Star Rating</h2>
          {filters.minRating > 0 && (
            <button
              type="button"
              onClick={() => onChange({ ...filters, minRating: 0 })}
              className="text-xs font-semibold text-[#7A7E96] hover:text-[#0077EE]"
            >
              Reset
            </button>
          )}
        </div>
        <div className="mt-3 flex flex-col gap-1.5">
          {[
            { value: 4.8, label: "4.8 Stars & up", stars: 5 },
            { value: 4.5, label: "4.5 Stars & up", stars: 4 },
            { value: 0, label: "All Ratings", stars: 0 },
          ].map((opt) => {
            const active = filters.minRating === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange({ ...filters, minRating: opt.value })}
                aria-pressed={active}
                className={`flex items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                  active
                    ? "bg-[#EAF3FF] text-[#0077EE] font-semibold"
                    : "text-[#5C6078] hover:bg-[#F5F6FA]"
                }`}
              >
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      size={14}
                      weight="fill"
                      className={
                        opt.stars === 0 || i < opt.stars
                          ? "text-[#FFD233]"
                          : "text-[#E2E4EE]"
                      }
                    />
                  ))}
                </span>
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Brand Checklist Card */}
      <section className="rounded-[22px] border border-[#EAECEF] bg-white p-4 shadow-[0_2px_10px_rgba(20,21,35,0.025)]">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-[#141523]">Brand</h2>
          <button
            type="button"
            onClick={() => onChange({ ...filters, brands: [] })}
            className="text-xs font-semibold text-[#7A7E96] transition-colors hover:text-[#0077EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
          >
            Reset
          </button>
        </div>

        <ul className="mt-3 space-y-2">
          {visibleBrands.map((brand) => {
            const checked = filters.brands.includes(brand);
            return (
              <li key={brand}>
                <label className="group flex cursor-pointer items-center justify-between rounded-lg py-0.5 text-[13.5px] text-[#35384B] transition-colors hover:text-[#141523]">
                  <span className="flex items-center gap-2.5">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#F3F4F8] text-[10px] font-bold text-[#0077EE]">
                      {brand.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="font-medium">{brand}</span>
                  </span>
                  <span className="relative inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleBrand(brand)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={`flex h-5 w-5 items-center justify-center rounded-md border transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-[#FF6B00] peer-focus-visible:ring-offset-1 ${
                        checked
                          ? "border-[#0077EE] bg-[#0077EE] text-white"
                          : "border-[#D3D6E5] bg-white group-hover:border-[#0077EE]"
                      }`}
                    >
                      {checked && <CheckIcon size={12} weight="bold" />}
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        {ALL_BRANDS.length > 7 && (
          <button
            type="button"
            onClick={() => setShowAllBrands((prev) => !prev)}
            className="mt-3 text-xs font-semibold text-[#0077EE] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
          >
            {showAllBrands
              ? "Show fewer brands"
              : `More Brand (${ALL_BRANDS.length - 7}+)`}
          </button>
        )}
      </section>

      {/* 4. Delivery Options Card (Standard vs Local Pick Up) */}
      <section className="rounded-[22px] border border-[#EAECEF] bg-white p-4 shadow-[0_2px_10px_rgba(20,21,35,0.025)]">
        <div className="flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-[#141523]">
            Delivery Options
          </h2>
          {filters.delivery !== "all" && (
            <button
              type="button"
              onClick={() => onChange({ ...filters, delivery: "all" })}
              className="text-xs font-semibold text-[#7A7E96] hover:text-[#0077EE]"
            >
              All
            </button>
          )}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { id: "standard" as const, label: "Standard" },
            { id: "pickup" as const, label: "Pick Up" },
          ].map((opt) => {
            const active =
              filters.delivery === opt.id ||
              (filters.delivery === "all" && opt.id === "standard");
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() =>
                  onChange({
                    ...filters,
                    delivery:
                      filters.delivery === opt.id ? "all" : opt.id,
                  })
                }
                aria-pressed={filters.delivery === opt.id}
                className={`h-10 rounded-full text-xs font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                  filters.delivery === opt.id
                    ? "bg-[#01143F] text-white shadow-sm shadow-[#01143F]/30"
                    : active
                    ? "border border-[#FFCCA6] bg-[#FFF6F0] text-[#FF6B00] hover:bg-[#FFEBDC]"
                    : "border border-[#E7E9F2] bg-white text-[#35384B] hover:border-[#0077EE]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
