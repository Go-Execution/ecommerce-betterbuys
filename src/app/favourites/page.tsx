"use client";

import React from "react";
import Link from "next/link";
import { HeartIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { PRODUCTS } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { ProductCard } from "@/components/ProductCard";

export default function FavouritesPage() {
  const { favourites } = useStore();
  const savedProducts = PRODUCTS.filter((p) => favourites.includes(p.id));
  const suggestions = PRODUCTS.filter((p) => p.topItem).slice(0, 4);

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-[#141523] sm:text-3xl">
            Saved Favourites
          </h1>
          <p className="mt-1 text-sm text-[#5C6078]">
            {savedProducts.length === 0
              ? "Tap the heart on any product card to save favorites here."
              : `${savedProducts.length} saved item${savedProducts.length === 1 ? "" : "s"} in your wishlist.`}
          </p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0077EE] hover:underline"
        >
          <span>Explore All Products</span>
          <ArrowRightIcon size={16} weight="bold" />
        </Link>
      </div>

      {savedProducts.length === 0 ? (
        <>
          <div className="rounded-[28px] border border-[#EAECEF] bg-white p-10 text-center shadow-xs">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF1E5] text-[#FF6B00]">
              <HeartIcon size={30} weight="duotone" />
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-[#141523]">
              Your wishlist is empty
            </h2>
            <p className="mx-auto mt-1.5 max-w-md text-sm text-[#5C6078]">
              Keep track of gifts, kitchen upgrades, and pet toys you want to pick up later.
            </p>
            <Link
              href="/shop"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#FF6B00] px-7 text-sm font-bold text-white shadow-md shadow-[#FF6B00]/25 hover:bg-[#E55A00]"
            >
              Browse Catalog
            </Link>
          </div>

          <section className="mt-12">
            <h2 className="mb-5 font-display text-xl font-bold text-[#141523]">
              Trending Top Items
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {suggestions.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {savedProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
