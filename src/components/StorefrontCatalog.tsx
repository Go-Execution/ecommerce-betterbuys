"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRightIcon,
  ArrowsDownUpIcon,
  FadersIcon,
  MagnifyingGlassIcon,
  SparkleIcon,
  XIcon,
} from "@phosphor-icons/react";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { CatalogFilters, CategorySlug, SortOption } from "@/types/store";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";

interface StorefrontCatalogProps {
  mode: "home" | "shop";
  initialCategory?: CategorySlug;
  initialSearch?: string;
}

const DEFAULT_FILTERS: CatalogFilters = {
  category: "all",
  search: "",
  priceMin: 15,
  priceMax: 45,
  minRating: 0,
  brands: [],
  delivery: "all",
  sort: "featured",
};

export function StorefrontCatalog({
  mode,
  initialCategory = "all",
  initialSearch = "",
}: StorefrontCatalogProps) {
  const reduce = useReducedMotion();
  const [filters, setFilters] = useState<CatalogFilters>({
    ...DEFAULT_FILTERS,
    category: initialCategory,
    search: initialSearch,
  });
  const [showAllOnHome, setShowAllOnHome] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Lock body scroll when mobile filter drawer is open
  useEffect(() => {
    if (!mobileFilterOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileFilterOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileFilterOpen]);

  const filteredProducts = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      if (filters.category === "deals" && !p.compareAtPrice) return false;
      if (
        filters.category !== "all" &&
        filters.category !== "deals" &&
        p.categorySlug !== filters.category
      ) {
        return false;
      }
      if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
      if (filters.minRating > 0 && p.rating < filters.minRating) return false;
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
        return false;
      }
      if (filters.delivery === "pickup" && !p.pickupEligible) return false;
      if (q) {
        const hay = `${p.name} ${p.brand} ${p.category} ${p.summary}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const sorted = [...list];
    switch (filters.sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "featured":
      default:
        // Place curated spotlight and top items smoothly inside the primary showcase view
        sorted.sort((a, b) => {
          const score = (item: typeof a) =>
            (item.spotlight ? 4 : 0) + (item.topItem ? 2 : 0) + (item.compareAtPrice ? 1 : 0);
          return score(b) - score(a);
        });
        break;
    }

    return sorted;
  }, [filters]);

  const isFiltering =
    filters.category !== "all" ||
    filters.search.trim() !== "" ||
    filters.priceMin > 15 ||
    filters.priceMax < 45 ||
    filters.minRating > 0 ||
    filters.brands.length > 0 ||
    filters.delivery !== "all";

  const displayedProducts = useMemo(() => {
    if (mode === "shop" || isFiltering || showAllOnHome) {
      return filteredProducts;
    }
    // On initial home load, present 9 products (3 crisp rows) with an iconic Spotlight card at slot #5 (matching reference!)
    const firstNine = filteredProducts.slice(0, 9);
    const spotlightIdx = firstNine.findIndex((p) => p.spotlight);
    if (spotlightIdx > -1 && spotlightIdx !== 4 && firstNine.length >= 5) {
      const copy = [...firstNine];
      const [spot] = copy.splice(spotlightIdx, 1);
      copy.splice(4, 0, spot);
      return copy;
    }
    return firstNine;
  }, [filteredProducts, isFiltering, mode, showAllOnHome]);

  const activeFilterCount =
    (filters.priceMin > 15 || filters.priceMax < 45 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0) +
    filters.brands.length +
    (filters.delivery !== "all" ? 1 : 0) +
    (filters.search.trim() ? 1 : 0);

  const resetAllFilters = () => {
    setFilters({ ...DEFAULT_FILTERS });
  };

  return (
    <section
      aria-label="Product catalog"
      className="mx-auto max-w-[1380px] px-4 pt-5 sm:px-6 lg:px-8"
    >
      {/* Top Category Pill Strip (matching design reference immediately below navbar) */}
      <div className="mb-5 flex flex-col gap-3">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => {
            const active = filters.category === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setFilters((prev) => ({ ...prev, category: cat.slug }))}
                aria-pressed={active}
                className={`relative shrink-0 rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                  active
                    ? "text-white"
                    : "border border-[#E7E9F2] bg-white text-[#35384B] hover:border-[#FFCCA6] hover:text-[#FF6B00]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId={`cat-pill-${mode}`}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 440, damping: 32 }
                    }
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#01143F] to-[#0A2558] shadow-md shadow-[#01143F]/25"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  {cat.slug === "deals" && (
                    <SparkleIcon size={14} weight="fill" className={active ? "text-[#FFB300]" : "text-[#0077EE]"} />
                  )}
                  <span>{cat.shortName}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[11px] font-bold ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-[#F4F5FA] text-[#7A7E96]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Storefront Status & Sort Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#EAECEF] bg-white px-4 py-2.5 shadow-[0_2px_10px_rgba(20,21,35,0.02)]">
          <div className="flex flex-wrap items-center gap-2.5">
            {mode === "shop" ? (
              <h1 className="font-display text-lg font-bold text-[#141523] sm:text-xl">
                {CATEGORIES.find((c) => c.slug === filters.category)?.name || "All Products"}
              </h1>
            ) : (
              <h1 className="font-display text-lg font-bold text-[#141523] sm:text-xl">
                Shop Everyday Better Buys
              </h1>
            )}
            <span className="rounded-full bg-[#F4F5FA] px-2.5 py-0.5 text-xs font-semibold text-[#5C6078]">
              {filteredProducts.length} item{filteredProducts.length === 1 ? "" : "s"}
            </span>
            {filters.search.trim() && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF3FF] px-2.5 py-0.5 text-xs font-semibold text-[#0077EE]">
                Search: &ldquo;{filters.search}&rdquo;
                <button
                  type="button"
                  onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
                  aria-label="Clear search filter"
                  className="ml-0.5 rounded-full hover:bg-white"
                >
                  <XIcon size={12} weight="bold" />
                </button>
              </span>
            )}
            {isFiltering && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-xs font-semibold text-[#0077EE] hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Inline quick search on Shop page */}
            {mode === "shop" && (
              <div className="relative hidden md:block">
                <MagnifyingGlassIcon
                  size={15}
                  weight="bold"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8C90A6]"
                />
                <input
                  type="search"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                  }
                  placeholder="Filter by keyword..."
                  aria-label="Filter catalog by keyword"
                  className="h-9 w-48 rounded-full border border-[#E7E9F2] bg-[#F7F8FC] pl-8 pr-3 text-xs text-[#141523] placeholder:text-[#8C90A6] focus:border-[#0077EE] focus:bg-white focus:outline-none"
                />
              </div>
            )}

            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#E7E9F2] bg-[#F7F8FC] px-3.5 text-xs font-semibold text-[#141523] lg:hidden"
            >
              <FadersIcon size={15} weight="bold" className="text-[#0077EE]" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF6B00] px-1 text-[10px] font-bold text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort Selector */}
            <div className="relative flex items-center">
              <ArrowsDownUpIcon
                size={14}
                weight="bold"
                className="pointer-events-none absolute left-3 text-[#0077EE]"
              />
              <label htmlFor={`sort-${mode}`} className="visually-hidden">
                Sort products
              </label>
              <select
                id={`sort-${mode}`}
                value={filters.sort}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    sort: e.target.value as SortOption,
                  }))
                }
                className="h-9 cursor-pointer appearance-none rounded-full border border-[#E7E9F2] bg-[#F7F8FC] pl-8 pr-8 text-xs font-semibold text-[#141523] transition-colors hover:border-[#0077EE] focus:border-[#0077EE] focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Split: Left Filter Sidebar + Right Product Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[276px_minmax(0,1fr)]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-[88px]">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </div>
        </div>

        {/* Product Grid Column */}
        <div>
          {displayedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[26px] border border-[#EAECEF] bg-white px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#0077EE]">
                <MagnifyingGlassIcon size={28} weight="duotone" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-[#141523]">
                No matching products found
              </h2>
              <p className="mt-1.5 max-w-sm text-sm text-[#5C6078]">
                Try widening your price slider or clearing brand and rating filters to see more products.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-5 rounded-full bg-[#FF6B00] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#FF6B00]/25 transition-transform hover:bg-[#E55A00] active:scale-95"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout={!reduce}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {displayedProducts.map((product, idx) => {
                  const spotlightIndex = displayedProducts.length >= 5 ? 4 : -1;
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={idx}
                      variant={idx === spotlightIndex ? "spotlight" : "standard"}
                    />
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Home Grid Footer Action: Expand all 31 or Jump to Shop Page */}
          {mode === "home" && !isFiltering && filteredProducts.length > 9 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {!showAllOnHome ? (
                <button
                  type="button"
                  onClick={() => setShowAllOnHome(true)}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FF6B00] px-7 text-sm font-semibold text-white shadow-lg shadow-[#FF6B00]/25 transition-all hover:bg-[#E55A00] active:scale-[0.98]"
                >
                  <span>Load More Products (+{filteredProducts.length - 9})</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowAllOnHome(false)}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-[#DFE2EE] bg-white px-6 text-sm font-semibold text-[#141523] transition-colors hover:border-[#0077EE] hover:text-[#0077EE]"
                >
                  Show Compact Grid
                </button>
              )}
              <Link
                href="/shop"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[#FF6B00] bg-white px-6 text-sm font-semibold text-[#FF6B00] transition-colors hover:bg-[#FFF6F0]"
              >
                <span>Open Full Shop Page ({PRODUCTS.length} Items)</span>
                <ArrowRightIcon size={16} weight="bold" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <div
            className="fixed inset-0 z-50 flex lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile product filters"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
              className="fixed inset-0 bg-[#141523]/40 backdrop-blur-[2px]"
            />
            <motion.div
              initial={reduce ? { opacity: 0 } : { x: "-100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "-100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
              className="relative z-10 flex h-full w-full max-w-[330px] flex-col bg-[#F4F5FA] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#E7E9F2] bg-white px-4 py-3.5">
                <h2 className="font-display text-base font-bold text-[#141523]">
                  Filter Products
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  aria-label="Close filters"
                  className="rounded-full p-1.5 text-[#5C6078] hover:bg-[#F4F5FA]"
                >
                  <XIcon size={18} weight="bold" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <FilterSidebar filters={filters} onChange={setFilters} />
              </div>
              <div className="border-t border-[#E7E9F2] bg-white p-3.5">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="h-11 w-full rounded-full bg-[#FF6B00] text-sm font-semibold text-white hover:bg-[#E55A00]"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
