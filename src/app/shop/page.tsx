"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/data/products";
import { CategorySlug } from "@/types/store";
import { StorefrontCatalog } from "@/components/StorefrontCatalog";

function ShopCatalogLoader() {
  const params = useSearchParams();
  const rawCategory = params.get("category") || "all";
  const q = params.get("q") || "";

  const validCategory: CategorySlug = CATEGORIES.some((c) => c.slug === rawCategory)
    ? (rawCategory as CategorySlug)
    : "all";

  return (
    <StorefrontCatalog
      key={`${validCategory}:${q}`}
      mode="shop"
      initialCategory={validCategory}
      initialSearch={q}
    />
  );
}

export default function ShopPage() {
  return (
    <div className="pb-12">
      <Suspense
        fallback={
          <div className="mx-auto max-w-[1380px] px-4 py-10 sm:px-6 lg:px-8">
            <div className="h-12 w-full animate-pulse rounded-2xl bg-white" />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[276px_minmax(0,1fr)]">
              <div className="h-96 animate-pulse rounded-[22px] bg-white" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-72 animate-pulse rounded-[24px] bg-white" />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <ShopCatalogLoader />
      </Suspense>
    </div>
  );
}
