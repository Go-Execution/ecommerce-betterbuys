"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CaretRightIcon,
  CheckCircleIcon,
  CheckIcon,
  HeartIcon,
  LightningIcon,
  MagnifyingGlassPlusIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
  BasketIcon,
  StarIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import { Product } from "@/types/store";
import { useStore } from "@/context/StoreContext";
import { ProductCard } from "@/components/ProductCard";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

export function ProductDetailClient({
  product,
  related,
}: ProductDetailClientProps) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const { addToCart, toggleFavourite, isFavourite, customReviews, addReview } =
    useStore();

  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [viewMode, setViewMode] = useState<"studio" | "detail" | "pack">("studio");
  const [activeTab, setActiveTab] = useState<"highlights" | "specs" | "reviews">(
    "highlights"
  );
  const [addedAnim, setAddedAnim] = useState(false);

  // Review composer state
  const [revName, setRevName] = useState("");
  const [revRating, setRevRating] = useState(5);
  const [revTitle, setRevTitle] = useState("");
  const [revBody, setRevBody] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

  const saved = isFavourite(product.id);
  const allReviews = useMemo(
    () => [...(customReviews[product.id] || []), ...product.reviews],
    [customReviews, product.id, product.reviews]
  );

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1400);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariant, false);
    router.push("/checkout");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revName.trim() || !revTitle.trim() || !revBody.trim()) return;
    addReview(product.id, {
      author: revName.trim(),
      location: "Verified Buyer",
      rating: revRating,
      title: revTitle.trim(),
      body: revBody.trim(),
    });
    setRevName("");
    setRevTitle("");
    setRevBody("");
    setRevRating(5);
    setShowReviewForm(false);
  };

  const discountPercent = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
      )
    : 0;

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb Bar */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-[#7A7E96]"
      >
        <Link href="/" className="hover:text-[#0077EE]">
          Home
        </Link>
        <CaretRightIcon size={12} />
        <Link href="/shop" className="hover:text-[#0077EE]">
          Shop
        </Link>
        <CaretRightIcon size={12} />
        <Link
          href={`/shop?category=${product.categorySlug}`}
          className="hover:text-[#0077EE]"
        >
          {product.category}
        </Link>
        <CaretRightIcon size={12} />
        <span className="truncate font-semibold text-[#141523] max-w-[240px] sm:max-w-md">
          {product.shortName}
        </span>
      </nav>

      {/* Main Split Product Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: Interactive Gallery Stage */}
        <div className="lg:col-span-6">
          <div className="rounded-[28px] border border-[#EAECEF] bg-white p-4 shadow-sm">
            <div
              onMouseEnter={() => setZoomed(true)}
              onMouseLeave={() => setZoomed(false)}
              onMouseMove={handleMouseMove}
              className="relative aspect-square w-full overflow-hidden rounded-[22px] bg-[#F3F4F8] p-6 cursor-zoom-in"
            >
              {/* Badges */}
              <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                {product.topItem && (
                  <span className="rounded-full bg-[#FFD233] px-3 py-1 text-xs font-bold text-[#141523] shadow-sm">
                    Top item
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="rounded-full bg-[#141523] px-3 py-1 text-xs font-bold text-white shadow-sm">
                    Save {discountPercent}%
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => toggleFavourite(product)}
                aria-label={saved ? "Remove from favourites" : "Save to favourites"}
                aria-pressed={saved}
                className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all hover:scale-105 ${
                  saved
                    ? "border-[#FF6B00] bg-[#FF6B00] text-white"
                    : "border-[#E7E9F2] bg-white text-[#0077EE]"
                }`}
              >
                <HeartIcon size={20} weight={saved ? "fill" : "bold"} />
              </button>

              <motion.img
                key={viewMode}
                src={product.image}
                alt={product.name}
                initial={reduce ? { opacity: 1 } : { opacity: 0.5, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                style={
                  zoomed && !reduce
                    ? {
                        transform:
                          viewMode === "detail" ? "scale(1.65)" : "scale(1.38)",
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                      }
                    : viewMode === "detail"
                    ? { transform: "scale(1.22)" }
                    : undefined
                }
                className={`h-full w-full transition-transform duration-200 ease-out ${
                  product.studioImage
                    ? "object-contain mix-blend-multiply"
                    : "rounded-2xl object-cover"
                }`}
              />

              <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#5C6078] shadow-xs backdrop-blur-sm">
                <MagnifyingGlassPlusIcon size={14} weight="bold" className="text-[#0077EE]" />
                <span>Hover to zoom</span>
              </span>
            </div>

            {/* Interactive Thumbnail Views */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { id: "studio" as const, label: "Full View" },
                { id: "detail" as const, label: "Detail Zoom" },
                { id: "pack" as const, label: "Ready to Ship" },
              ].map((thumb) => {
                const active = viewMode === thumb.id;
                return (
                  <button
                    key={thumb.id}
                    type="button"
                    onClick={() => setViewMode(thumb.id)}
                    className={`flex items-center gap-2.5 rounded-2xl border p-2 text-left transition-all ${
                      active
                        ? "border-[#FF6B00] bg-[#FFF6F0] ring-1 ring-[#FF6B00]"
                        : "border-[#EAECEF] bg-[#FAFBFD] hover:border-[#FFCCA6]"
                    }`}
                  >
                    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white p-1">
                      <img
                        src={product.image}
                        alt=""
                        className={`h-full w-full object-contain mix-blend-multiply ${
                          thumb.id === "detail" ? "scale-125" : ""
                        }`}
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#141523]">
                      {thumb.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Buy Box */}
        <div className="lg:col-span-6">
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[28px] border border-[#EAECEF] bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-xs font-bold text-[#0077EE]">
                  {product.brand}
                </span>
                <Link
                  href={`/shop?category=${product.categorySlug}`}
                  className="text-xs font-semibold text-[#7A7E96] hover:text-[#0077EE]"
                >
                  {product.category}
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FAFBFD] px-3 py-1 text-xs font-semibold text-[#141523] hover:bg-[#F3F4F8]"
              >
                <StarIcon size={14} weight="fill" className="text-[#FFD233]" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-[#7A7E96]">
                  ({allReviews.length + product.reviewCount - 2} reviews)
                </span>
              </button>
            </div>

            <h1 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-[#141523] sm:text-3xl">
              {product.name}
            </h1>

            {/* Price Block */}
            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <span className="font-display text-3xl font-bold text-[#141523]">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg font-medium text-[#9B9FB5] line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    You save ${(product.compareAtPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <CheckCircleIcon size={15} weight="fill" />
              <span>In stock & ready to dispatch from Catskill, NY</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#5C6078]">
              {product.summary}
            </p>

            {/* Variant Picker */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
                  {product.variantLabel || "Option"}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.variants.map((opt) => {
                    const active = selectedVariant === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedVariant(opt)}
                        aria-pressed={active}
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                          active
                            ? "border-[#FF6B00] bg-[#FFF1E5] text-[#FF6B00]"
                            : "border-[#E7E9F2] bg-white text-[#35384B] hover:border-[#FF6B00]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity + Primary Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex h-12 items-center justify-between rounded-full border border-[#E5E7F2] bg-[#F7F8FC] px-2 sm:w-36">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#141523] shadow-xs transition-transform active:scale-90"
                >
                  <MinusIcon size={14} weight="bold" />
                </button>
                <span className="text-sm font-bold text-[#141523]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                  aria-label="Increase quantity"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#141523] shadow-xs transition-transform active:scale-90"
                >
                  <PlusIcon size={14} weight="bold" />
                </button>
              </div>

              <motion.button
                type="button"
                whileTap={reduce ? undefined : { scale: 0.98 }}
                onClick={handleAddToCart}
                data-agent="pdp-add-to-cart"
                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-sm font-bold text-white shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 ${
                  addedAnim
                    ? "bg-emerald-600 shadow-emerald-600/25"
                    : "bg-[#FF6B00] shadow-[#FF6B00]/25 hover:bg-[#E55A00]"
                }`}
              >
                {addedAnim ? (
                  <>
                    <CheckIcon size={18} weight="bold" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <BasketIcon size={18} weight="bold" />
                    <span>
                      Add to Cart · ${(product.price * quantity).toFixed(2)}
                    </span>
                  </>
                )}
              </motion.button>

              <motion.button
                type="button"
                whileTap={reduce ? undefined : { scale: 0.98 }}
                onClick={handleBuyNow}
                className="flex h-12 items-center justify-center gap-1.5 rounded-full bg-[#141523] px-6 text-sm font-bold text-white transition-colors hover:bg-[#27293D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141523]"
              >
                <LightningIcon size={16} weight="fill" className="text-[#FFD233]" />
                <span>Buy Now</span>
              </motion.button>
            </div>

            {/* Fulfillment Guarantees */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 border-t border-[#ECEEF6] pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-2.5 rounded-2xl bg-[#F7F8FC] p-3">
                <TruckIcon size={18} weight="bold" className="shrink-0 text-[#0077EE]" />
                <div className="text-xs">
                  <p className="font-bold text-[#141523]">Free Over $50</p>
                  <p className="text-[#7A7E96]">3 to 5 day delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl bg-[#F7F8FC] p-3">
                <MapPinIcon size={18} weight="bold" className="shrink-0 text-[#0077EE]" />
                <div className="text-xs">
                  <p className="font-bold text-[#141523]">
                    {product.pickupEligible ? "Local Pickup" : "NY Dispatch"}
                  </p>
                  <p className="text-[#7A7E96]">Catskill, NY 12414</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl bg-[#F7F8FC] p-3">
                <ShieldCheckIcon size={18} weight="bold" className="shrink-0 text-[#0077EE]" />
                <div className="text-xs">
                  <p className="font-bold text-[#141523]">30-Day Guarantee</p>
                  <p className="text-[#7A7E96]">Easy direct returns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Details / Specs / Reviews Tabs */}
      <section className="mt-10 rounded-[28px] border border-[#EAECEF] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap gap-2 border-b border-[#ECEEF6] pb-4">
          {[
            { id: "highlights" as const, label: "Highlights & Features" },
            { id: "specs" as const, label: "Specifications" },
            { id: "reviews" as const, label: `Customer Reviews (${allReviews.length})` },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active ? "text-white" : "text-[#5C6078] hover:bg-[#F4F5FA]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="pdp-tab-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#01143F] to-[#0A2558]"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "highlights" && (
            <motion.div
              key="highlights"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              {product.highlights.map((bullet, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-[#F8F9FD] p-4"
                >
                  <CheckCircleIcon
                    size={19}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-[#0077EE]"
                  />
                  <p className="text-sm leading-relaxed text-[#35384B]">
                    {bullet}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "specs" && (
            <motion.div
              key="specs"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6 overflow-hidden rounded-2xl border border-[#ECEEF6]"
            >
              <dl className="divide-y divide-[#ECEEF6]">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-3"
                  >
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-medium text-[#141523] sm:col-span-2">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}

          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-6 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-3xl font-bold text-[#141523]">
                      {product.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          size={18}
                          weight="fill"
                          className="text-[#FFD233]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-0.5 text-xs text-[#7A7E96]">
                    Based on {allReviews.length + product.reviewCount - 2} verified customer ratings
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowReviewForm((prev) => !prev)}
                  className="rounded-full border border-[#0077EE] px-5 py-2 text-xs font-semibold text-[#0077EE] transition-colors hover:bg-[#0077EE] hover:text-white"
                >
                  {showReviewForm ? "Cancel Review" : "Write a Review"}
                </button>
              </div>

              {showReviewForm && (
                <form
                  onSubmit={handleReviewSubmit}
                  className="space-y-4 rounded-2xl border border-[#DFDAFF] bg-[#F9F8FF] p-5"
                >
                  <h3 className="text-sm font-bold text-[#141523]">
                    Share your experience
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="rev-name"
                        className="block text-xs font-semibold text-[#35384B]"
                      >
                        Your Name
                      </label>
                      <input
                        id="rev-name"
                        type="text"
                        required
                        value={revName}
                        onChange={(e) => setRevName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="mt-1 h-10 w-full rounded-xl border border-[#E7E9F2] bg-white px-3 text-sm focus:border-[#0077EE] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rev-rating"
                        className="block text-xs font-semibold text-[#35384B]"
                      >
                        Rating
                      </label>
                      <select
                        id="rev-rating"
                        value={revRating}
                        onChange={(e) => setRevRating(Number(e.target.value))}
                        className="mt-1 h-10 w-full rounded-xl border border-[#E7E9F2] bg-white px-3 text-sm focus:border-[#0077EE] focus:outline-none"
                      >
                        <option value={5}>5 Stars - Love it</option>
                        <option value={4}>4 Stars - Very good</option>
                        <option value={3}>3 Stars - Solid</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="rev-title"
                      className="block text-xs font-semibold text-[#35384B]"
                    >
                      Headline
                    </label>
                    <input
                      id="rev-title"
                      type="text"
                      required
                      value={revTitle}
                      onChange={(e) => setRevTitle(e.target.value)}
                      placeholder="Great quality and fast shipping"
                      className="mt-1 h-10 w-full rounded-xl border border-[#E7E9F2] bg-white px-3 text-sm focus:border-[#0077EE] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rev-body"
                      className="block text-xs font-semibold text-[#35384B]"
                    >
                      Review Details
                    </label>
                    <textarea
                      id="rev-body"
                      required
                      rows={3}
                      value={revBody}
                      onChange={(e) => setRevBody(e.target.value)}
                      placeholder="How did this work for you?"
                      className="mt-1 w-full rounded-xl border border-[#E7E9F2] bg-white p-3 text-sm focus:border-[#0077EE] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-[#FF6B00] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#E55A00]"
                  >
                    Publish Review
                  </button>
                </form>
              )}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {allReviews.map((rev) => (
                  <article
                    key={rev.id}
                    className="rounded-2xl border border-[#ECEEF6] bg-[#FAFBFD] p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon
                            key={i}
                            size={14}
                            weight="fill"
                            className={
                              i < rev.rating
                                ? "text-[#FFD233]"
                                : "text-[#E2E4EE]"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-[#8C90A6]">
                        {rev.date}
                      </span>
                    </div>
                    <h4 className="mt-2.5 text-sm font-bold text-[#141523]">
                      {rev.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#5C6078]">
                      {rev.body}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-[#35384B]">
                      {rev.author} ·{" "}
                      <span className="font-normal text-[#7A7E96]">
                        {rev.location}
                      </span>
                    </p>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Related Products Grid */}
      <section className="mt-12" aria-labelledby="related-heading">
        <div className="mb-5 flex items-center justify-between">
          <h2
            id="related-heading"
            className="font-display text-2xl font-bold text-[#141523]"
          >
            Customers Also Bought
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0077EE] hover:underline"
          >
            <span>View all products</span>
            <ArrowRightIcon size={16} weight="bold" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item, idx) => (
            <ProductCard key={item.id} product={item} index={idx} />
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C6078] hover:text-[#0077EE]"
        >
          <ArrowLeftIcon size={16} weight="bold" />
          <span>Back to All Products</span>
        </Link>
      </div>
    </div>
  );
}
