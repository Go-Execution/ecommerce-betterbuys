"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckIcon,
  HeartIcon,
  BasketIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { Product } from "@/types/store";
import { useStore } from "@/context/StoreContext";

interface ProductCardProps {
  product: Product;
  variant?: "standard" | "spotlight";
  index?: number;
}

export function ProductCard({
  product,
  variant,
  index = 0,
}: ProductCardProps) {
  const { addToCart, toggleFavourite, isFavourite } = useStore();
  const [justAdded, setJustAdded] = useState(false);
  const reduce = useReducedMotion();

  const saved = isFavourite(product.id);
  const isSpotlight = variant === "spotlight" || (variant === undefined && product.spotlight);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavourite(product);
  };

  if (isSpotlight) {
    return (
      <motion.article
        layout={!reduce}
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.25) }}
        whileHover={reduce ? undefined : { y: -4 }}
        className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-br from-[#5236FF] via-[#664AFF] to-[#7D65FF] p-4 text-white shadow-lg shadow-[#5D45FD]/25"
        data-agent={`product-card-spotlight-${product.id}`}
      >
        {/* Top Row: Spotlight tag & Favourite heart */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/18 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
            Featured Pick
          </span>
          <motion.button
            type="button"
            whileTap={reduce ? undefined : { scale: 0.85 }}
            onClick={handleFav}
            aria-label={saved ? `Remove ${product.name} from favourites` : `Save ${product.name} to favourites`}
            aria-pressed={saved}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5D45FD] shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <HeartIcon size={18} weight={saved ? "fill" : "bold"} />
          </motion.button>
        </div>

        {/* Center Image + Floating Rating Bubbles (matching reference spotlight card) */}
        <Link
          href={`/product/${product.slug}`}
          className="relative my-3 flex aspect-[4/3] items-center justify-center rounded-[18px] bg-white/95 p-3 shadow-md transition-transform duration-300 group-hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${
              product.studioImage
                ? "object-contain mix-blend-multiply"
                : "rounded-xl object-cover"
            }`}
          />

          {/* Floating Review Pills */}
          <motion.span
            initial={false}
            animate={reduce ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-[#141523]/85 px-2.5 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur-sm"
          >
            <span>{product.rating.toFixed(1)}/5</span>
            <StarIcon size={12} weight="fill" className="text-[#FFD233]" />
          </motion.span>

          <motion.span
            initial={false}
            animate={reduce ? undefined : { y: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="hidden sm:inline-flex absolute right-2.5 bottom-2.5 items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#141523] shadow-md ring-1 ring-[#E7E9F2]"
          >
            <span>5/5</span>
            <StarIcon size={12} weight="fill" className="text-[#FFD233]" />
            <span className="text-[#5C6078] font-medium">({product.reviewCount})</span>
          </motion.span>
        </Link>

        {/* Title & Add to Cart Pill */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <Link
            href={`/product/${product.slug}`}
            className="line-clamp-2 min-h-[40px] text-[15px] font-semibold leading-snug text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {product.shortName}
          </Link>

          <div className="mt-3 flex items-center justify-center gap-2.5">
            {product.compareAtPrice && (
              <span className="text-xs font-medium text-white/70 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
            <motion.button
              type="button"
              whileTap={reduce ? undefined : { scale: 0.95 }}
              onClick={handleAdd}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-white/70 bg-white/15 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#5D45FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {justAdded ? (
                <>
                  <CheckIcon size={16} weight="bold" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <BasketIcon size={16} weight="bold" />
                  <span>${product.price.toFixed(2)}</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout={!reduce}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.25) }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="group relative flex flex-col justify-between rounded-[24px] border border-[#EAECEF] bg-white p-2.5 shadow-[0_2px_12px_rgba(20,21,35,0.03)] transition-shadow duration-300 hover:border-[#D5D1FC] hover:shadow-[0_14px_30px_rgba(93,69,253,0.10)]"
      data-agent={`product-card-${product.id}`}
    >
      {/* Studio Image Tray */}
      <div className="relative">
        <Link
          href={`/product/${product.slug}`}
          className="block aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#F3F4F8] p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD]"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={`h-full w-full transition-transform duration-300 ease-out group-hover:scale-105 ${
              product.studioImage
                ? "object-contain mix-blend-multiply"
                : "rounded-xl object-cover"
            }`}
          />
        </Link>

        {/* Top-Right Wishlist Button */}
        <motion.button
          type="button"
          whileTap={reduce ? undefined : { scale: 0.85 }}
          onClick={handleFav}
          aria-label={saved ? `Remove ${product.name} from favourites` : `Save ${product.name} to favourites`}
          aria-pressed={saved}
          className={`absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD] ${
            saved
              ? "border-[#5D45FD] bg-[#5D45FD] text-white"
              : "border-[#E7E9F2] bg-white/95 text-[#5D45FD] hover:bg-[#EEEBFF]"
          }`}
        >
          <HeartIcon size={17} weight={saved ? "fill" : "bold"} />
        </motion.button>

        {/* Top-Left Discount Tag if on sale */}
        {product.compareAtPrice && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-[#141523] px-2.5 py-0.5 text-[11px] font-semibold text-white">
            Save ${(product.compareAtPrice - product.price).toFixed(0)}
          </span>
        )}

        {/* Signature Yellow "Top item" Pill overlapping bottom center edge */}
        {product.topItem && (
          <span className="pointer-events-none absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#FFD233] px-3.5 py-0.5 text-[11px] font-bold tracking-tight text-[#141523] shadow-sm">
            Top item
          </span>
        )}
      </div>

      {/* Product Info + Price Pill Button */}
      <div className="flex flex-1 flex-col items-center justify-between px-2 pb-2.5 pt-4 text-center">
        <div>
          <Link
            href={`/product/${product.slug}`}
            className="line-clamp-2 text-[14.5px] font-semibold leading-snug text-[#141523] transition-colors hover:text-[#5D45FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD]"
          >
            {product.shortName}
          </Link>
          <div className="mt-1 flex items-center justify-center gap-1.5 text-xs text-[#7A7E96]">
            <span>{product.brand}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-0.5 font-semibold text-[#141523]">
              <StarIcon size={12} weight="fill" className="text-[#FFD233]" />
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="mt-3.5 flex items-center justify-center gap-2.5">
          {product.compareAtPrice && (
            <span className="text-xs font-medium text-[#9B9FB5] line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
          <motion.button
            type="button"
            whileTap={reduce ? undefined : { scale: 0.95 }}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart for $${product.price.toFixed(2)}`}
            className={`inline-flex h-9 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD] focus-visible:ring-offset-1 ${
              justAdded
                ? "border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "border-[#5D45FD] bg-white text-[#5D45FD] hover:bg-[#5D45FD] hover:text-white hover:shadow-md hover:shadow-[#5D45FD]/25"
            }`}
          >
            {justAdded ? (
              <>
                <CheckIcon size={16} weight="bold" />
                <span>Added</span>
              </>
            ) : (
              <>
                <BasketIcon size={16} weight="bold" />
                <span>${product.price.toFixed(2)}</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
