"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRightIcon,
  BasketIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CheckIcon,
  HeartIcon,
  PlusIcon,
  SparkleIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { CATEGORIES, PRODUCTS, STORE_INFO } from "@/data/products";
import { CategorySlug, Product } from "@/types/store";
import { useStore } from "@/context/StoreContext";
import { ProductCard } from "@/components/ProductCard";

const HERO_SPOTLIGHT_IDS = [1551, 1563, 1564];
const HERO_SIDE_IDS = [1565, 1534];

function pickProducts(ids: number[]): Product[] {
  return ids
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}

export function HomeShowcase() {
  const reduce = useReducedMotion();
  const { addToCart, toggleFavourite, isFavourite } = useStore();

  const heroSpotlights = useMemo(() => pickProducts(HERO_SPOTLIGHT_IDS), []);
  const heroSideItems = useMemo(() => pickProducts(HERO_SIDE_IDS), []);

  const [heroIdx, setHeroIdx] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [activeCollection, setActiveCollection] = useState<CategorySlug>("all");
  const [quickAddedId, setQuickAddedId] = useState<number | null>(null);

  useEffect(() => {
    if (reduce || heroPaused || heroSpotlights.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroSpotlights.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [reduce, heroPaused, heroSpotlights.length]);

  const currentHero = heroSpotlights[heroIdx] ?? PRODUCTS[0];
  const heroSaved = isFavourite(currentHero.id);

  const collectionItems = useMemo(() => {
    let pool = PRODUCTS;
    if (activeCollection === "deals") {
      pool = PRODUCTS.filter((p) => Boolean(p.compareAtPrice));
    } else if (activeCollection !== "all") {
      pool = PRODUCTS.filter((p) => p.categorySlug === activeCollection);
    } else {
      pool = [...PRODUCTS].sort(
        (a, b) => Number(b.topItem) - Number(a.topItem) || b.rating - a.rating
      );
    }
    return pool.slice(0, activeCollection === "all" ? 8 : 4);
  }, [activeCollection]);

  const activeCategoryMeta =
    CATEGORIES.find((c) => c.slug === activeCollection) ?? CATEGORIES[0];

  const handleQuickAdd = (product: Product) => {
    addToCart(product, 1);
    setQuickAddedId(product.id);
    setTimeout(() => {
      setQuickAddedId((curr) => (curr === product.id ? null : curr));
    }, 1100);
  };

  return (
    <div className="mx-auto max-w-[1380px] space-y-12 px-4 pt-5 sm:px-6 lg:px-8">
      {/* 1. Calm, Airy Marketplace Hero (No SaaS metrics or heavy copy) */}
      <section aria-label="Featured marketplace showcase">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Left Marketplace Intro */}
          <div className="flex flex-col justify-center rounded-[28px] border border-[#E7E9F2] bg-white p-6 shadow-[0_2px_16px_rgba(20,21,35,0.03)] sm:p-9 lg:col-span-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEEBFF] px-3.5 py-1 text-xs font-bold text-[#5D45FD]">
                <SparkleIcon size={13} weight="fill" />
                <span>Free Shipping Over ${STORE_INFO.freeShippingThreshold}</span>
              </span>

              <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-[#141523] sm:text-4xl xl:text-[42px]">
                Better Picks for Home, Gym & Pets.
              </h1>

              <p className="mt-3 text-sm text-[#5C6078] sm:text-base">
                Everyday essentials from $17 to $40.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/shop"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#5D45FD] px-6 text-sm font-bold text-white shadow-md shadow-[#5D45FD]/25 transition-all hover:bg-[#4B33EC] active:scale-[0.98]"
                >
                  <span>Shop All Products</span>
                  <ArrowRightIcon size={16} weight="bold" />
                </Link>
                <Link
                  href="/shop?category=deals"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-[#DFE2EE] bg-white px-5 text-sm font-semibold text-[#141523] transition-colors hover:border-[#5D45FD] hover:text-[#5D45FD]"
                >
                  <span>Today&apos;s Deals</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Live Stage: 1 Spotlight Carousel + 2 Spacious Side Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 lg:col-span-7">
            {/* Electric-Indigo Hero Card */}
            <div
              onMouseEnter={() => setHeroPaused(true)}
              onMouseLeave={() => setHeroPaused(false)}
              className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br from-[#5236FF] via-[#664AFF] to-[#7D65FF] p-5 text-white shadow-lg shadow-[#5D45FD]/20 sm:col-span-7"
            >
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFD233] px-3 py-1 text-[11px] font-bold text-[#141523]">
                  Top item
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setHeroIdx(
                        (prev) =>
                          (prev - 1 + heroSpotlights.length) % heroSpotlights.length
                      )
                    }
                    aria-label="Previous featured item"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-[#5D45FD]"
                  >
                    <CaretLeftIcon size={14} weight="bold" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setHeroIdx((prev) => (prev + 1) % heroSpotlights.length)
                    }
                    aria-label="Next featured item"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-[#5D45FD]"
                  >
                    <CaretRightIcon size={14} weight="bold" />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleFavourite(currentHero)}
                    aria-label={
                      heroSaved
                        ? `Remove ${currentHero.shortName} from favourites`
                        : `Save ${currentHero.shortName} to favourites`
                    }
                    aria-pressed={heroSaved}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#5D45FD] shadow-xs transition-transform hover:scale-105"
                  >
                    <HeartIcon size={15} weight={heroSaved ? "fill" : "bold"} />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentHero.id}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                  className="my-3 flex flex-1 flex-col justify-between"
                >
                  <Link
                    href={`/product/${currentHero.slug}`}
                    className="group relative flex aspect-[4/3] items-center justify-center rounded-[20px] bg-white/95 p-4 shadow-sm"
                  >
                    <img
                      src={currentHero.image}
                      alt={currentHero.name}
                      className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#141523]/85 px-2.5 py-1 text-[11px] font-bold text-white">
                      <span>{currentHero.rating.toFixed(1)}/5</span>
                      <StarIcon size={11} weight="fill" className="text-[#FFD233]" />
                    </span>
                  </Link>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <Link
                      href={`/product/${currentHero.slug}`}
                      className="min-w-0 flex-1 truncate text-sm font-bold text-white hover:underline sm:text-base"
                    >
                      {currentHero.shortName}
                    </Link>

                    <motion.button
                      type="button"
                      whileTap={reduce ? undefined : { scale: 0.95 }}
                      onClick={() => handleQuickAdd(currentHero)}
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-bold text-[#5D45FD] shadow-sm transition-transform hover:scale-[1.03]"
                    >
                      {quickAddedId === currentHero.id ? (
                        <>
                          <CheckIcon size={14} weight="bold" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <BasketIcon size={14} weight="bold" />
                          <span>${currentHero.price.toFixed(2)}</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-1.5">
                {heroSpotlights.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHeroIdx(i)}
                    aria-label={`View ${item.shortName}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === heroIdx ? "w-5 bg-white" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 2 Clean Stacked White Marketplace Cards */}
            <div className="grid grid-cols-2 gap-4 sm:col-span-5 sm:grid-cols-1">
              {heroSideItems.map((item) => {
                const isAdded = quickAddedId === item.id;
                return (
                  <motion.article
                    key={item.id}
                    whileHover={reduce ? undefined : { y: -3 }}
                    className="group flex flex-col justify-between rounded-[24px] border border-[#EAECEF] bg-white p-3 shadow-xs transition-shadow hover:border-[#CFC9FB] hover:shadow-md sm:flex-row sm:items-center sm:gap-3"
                    data-agent={`home-hero-card-${item.id}`}
                  >
                    <Link
                      href={`/product/${item.slug}`}
                      className="flex aspect-square w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#F3F4F8] p-2 sm:h-24 sm:w-24"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>

                    <div className="mt-2.5 flex min-w-0 flex-1 flex-col justify-between sm:mt-0">
                      <div>
                        {item.topItem && (
                          <span className="inline-block rounded-full bg-[#FFD233] px-2 py-0.5 text-[10px] font-bold text-[#141523]">
                            Top item
                          </span>
                        )}
                        <Link
                          href={`/product/${item.slug}`}
                          className="mt-1 block line-clamp-2 text-xs font-bold leading-snug text-[#141523] group-hover:text-[#5D45FD] sm:text-sm"
                        >
                          {item.shortName}
                        </Link>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="font-display text-sm font-extrabold text-[#141523]">
                          ${item.price.toFixed(0)}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuickAdd(item)}
                          aria-label={`Add ${item.shortName} to cart`}
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                            isAdded
                              ? "border-emerald-600 bg-emerald-600 text-white"
                              : "border-[#5D45FD] bg-white text-[#5D45FD] hover:bg-[#5D45FD] hover:text-white"
                          }`}
                        >
                          {isAdded ? (
                            <CheckIcon size={14} weight="bold" />
                          ) : (
                            <PlusIcon size={14} weight="bold" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compact Marketplace Shelf (Interactive Tabs + 4-Col Grid, No Sidebar) */}
      <section aria-labelledby="home-collections-heading">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2
            id="home-collections-heading"
            className="font-display text-2xl font-bold tracking-tight text-[#141523] sm:text-[28px]"
          >
            Trending Picks
          </h2>

          <Link
            href={
              activeCollection === "all"
                ? "/shop"
                : `/shop?category=${activeCollection}`
            }
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5D45FD] hover:underline"
          >
            <span>View all in {activeCategoryMeta.shortName} ({activeCategoryMeta.count})</span>
            <ArrowRightIcon size={15} weight="bold" />
          </Link>
        </div>

        {/* Clean Category Pills */}
        <div className="no-scrollbar mt-4 flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => {
            const active = activeCollection === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCollection(cat.slug)}
                aria-pressed={active}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  active
                    ? "text-white"
                    : "border border-[#E7E9F2] bg-white text-[#35384B] hover:border-[#D5D1FC] hover:text-[#5D45FD]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId={reduce ? undefined : "home-collection-pill"}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#5D45FD] shadow-sm shadow-[#5D45FD]/25"
                  />
                )}
                <span className="relative z-10">{cat.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* 4-Column Product Grid */}
        <motion.div
          layout={!reduce}
          className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {collectionItems.map((product, idx) => (
              <ProductCard
                key={`${activeCollection}-${product.id}`}
                product={product}
                index={idx}
                variant={idx === 2 && collectionItems.length >= 4 ? "spotlight" : "standard"}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-7 flex justify-center">
          <Link
            href="/shop"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#5D45FD] bg-white px-7 text-sm font-bold text-[#5D45FD] transition-colors hover:bg-[#5D45FD] hover:text-white"
          >
            <span>Browse Full Storefront ({PRODUCTS.length} Items)</span>
            <ArrowRightIcon size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
