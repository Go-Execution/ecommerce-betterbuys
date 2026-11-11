"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  BasketIcon,
  SparkleIcon,
  TagIcon,
  TrashIcon,
  TruckIcon,
  XIcon,
} from "@phosphor-icons/react";
import { PRODUCTS, STORE_INFO, getProductById } from "@/data/products";
import { useStore } from "@/context/StoreContext";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    addToCart,
    totals,
    promoCode,
    applyPromoCode,
    clearPromoCode,
  } = useStore();
  const reduce = useReducedMotion();

  const [promoInput, setPromoInput] = useState("");
  const [promoFeedback, setPromoFeedback] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (!isCartOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isCartOpen, setIsCartOpen]);

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyPromoCode(promoInput);
    setPromoFeedback(res);
    if (res.ok) setPromoInput("");
  };

  const quickSuggestions = PRODUCTS.filter((p) => p.topItem).slice(0, 3);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart drawer"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-[#141523]/40 backdrop-blur-[3px]"
          />

          {/* Slide-Over Panel */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "spring", stiffness: 360, damping: 34 }}
            className="relative z-10 flex h-full w-full max-w-[430px] flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#ECEEF6] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEEBFF] text-[#5D45FD]">
                  <BasketIcon size={19} weight="bold" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-[#141523]">
                    Your Cart
                  </h2>
                  <p className="text-xs text-[#7A7E96]">
                    {totals.itemCount === 0
                      ? "No items added yet"
                      : `${totals.itemCount} item${totals.itemCount === 1 ? "" : "s"} ready`}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart drawer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7E9F2] text-[#5C6078] transition-colors hover:bg-[#F4F5FA] hover:text-[#141523] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD]"
              >
                <XIcon size={18} weight="bold" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="border-b border-[#ECEEF6] bg-[#F8F8FD] px-5 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#141523]">
                <TruckIcon size={16} weight="bold" className="text-[#5D45FD]" />
                {totals.freeShippingRemaining === 0 && totals.itemCount > 0 ? (
                  <span className="text-emerald-700">
                    Free Ground Shipping unlocked!
                  </span>
                ) : (
                  <span>
                    Add{" "}
                    <strong className="text-[#5D45FD]">
                      ${totals.freeShippingRemaining.toFixed(2)}
                    </strong>{" "}
                    for free ground shipping (orders ${STORE_INFO.freeShippingThreshold}+)
                  </span>
                )}
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#E5E7F2]">
                <motion.div
                  className={`h-full w-full origin-left rounded-full ${
                    totals.freeShippingRemaining === 0 && totals.itemCount > 0
                      ? "bg-emerald-500"
                      : "bg-gradient-to-r from-[#5D45FD] to-[#8774FF]"
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: totals.freeShippingProgress / 100 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Cart Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4F5FA] text-[#5D45FD]">
                    <BasketIcon size={30} weight="duotone" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#141523]">
                    Your cart is empty
                  </h3>
                  <p className="mt-1 max-w-[26ch] text-sm text-[#7A7E96]">
                    Start with a customer favorite below or browse the full store.
                  </p>

                  <div className="mt-6 w-full space-y-2.5 text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
                      Quick-Add Top Picks
                    </p>
                    {quickSuggestions.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-2xl border border-[#EAECEF] bg-[#FAFBFD] p-2.5"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 shrink-0 rounded-xl bg-white object-contain p-1 mix-blend-multiply"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold text-[#141523]">
                            {item.shortName}
                          </p>
                          <p className="text-xs font-bold text-[#5D45FD]">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => addToCart(item, 1)}
                          className="rounded-full bg-[#5D45FD] px-3 py-1.5 text-xs font-semibold text-white transition-transform hover:bg-[#4B33EC] active:scale-95"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {cart.map((item) => {
                      const product = getProductById(item.productId);
                      if (!product) return null;
                      return (
                        <motion.li
                          key={`${item.productId}-${item.variant || "default"}`}
                          layout={!reduce}
                          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0, x: 40 }}
                          transition={{ duration: 0.2 }}
                          className="flex gap-3.5 rounded-2xl border border-[#ECEEF6] bg-white p-3 shadow-xs"
                        >
                          <Link
                            href={`/product/${product.slug}`}
                            onClick={() => setIsCartOpen(false)}
                            className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#F3F4F8] p-1.5"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className={`h-full w-full ${
                                product.studioImage
                                  ? "object-contain mix-blend-multiply"
                                  : "rounded-lg object-cover"
                              }`}
                            />
                          </Link>

                          <div className="flex min-w-0 flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <Link
                                href={`/product/${product.slug}`}
                                onClick={() => setIsCartOpen(false)}
                                className="line-clamp-2 text-sm font-semibold leading-snug text-[#141523] hover:text-[#5D45FD]"
                              >
                                {product.shortName}
                              </Link>
                              <button
                                type="button"
                                onClick={() =>
                                  removeFromCart(product.id, item.variant)
                                }
                                aria-label={`Remove ${product.name}`}
                                className="rounded-lg p-1 text-[#8C90A6] transition-colors hover:bg-rose-50 hover:text-rose-600"
                              >
                                <TrashIcon size={15} weight="bold" />
                              </button>
                            </div>

                            {item.variant && (
                              <p className="text-[11px] font-medium text-[#7A7E96]">
                                {item.variant}
                              </p>
                            )}

                            <div className="mt-2 flex items-center justify-between">
                              <div className="inline-flex items-center rounded-full border border-[#E5E7F2] bg-[#F7F8FC] p-0.5">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      product.id,
                                      item.quantity - 1,
                                      item.variant
                                    )
                                  }
                                  aria-label="Decrease quantity"
                                  className="flex h-6 w-6 items-center justify-center rounded-full text-[#35384B] transition-colors hover:bg-white"
                                >
                                  <MinusIcon size={12} weight="bold" />
                                </button>
                                <span className="min-w-7 text-center text-xs font-bold text-[#141523]">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      product.id,
                                      item.quantity + 1,
                                      item.variant
                                    )
                                  }
                                  aria-label="Increase quantity"
                                  className="flex h-6 w-6 items-center justify-center rounded-full text-[#35384B] transition-colors hover:bg-white"
                                >
                                  <PlusIcon size={12} weight="bold" />
                                </button>
                              </div>

                              <span className="text-sm font-bold text-[#141523]">
                                ${(product.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer Totals & Checkout */}
            {cart.length > 0 && (
              <div className="border-t border-[#ECEEF6] bg-[#FAFBFD] px-5 py-4">
                {/* Promo Code Bar */}
                {promoCode ? (
                  <div className="mb-3 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
                    <span className="inline-flex items-center gap-1.5">
                      <SparkleIcon size={14} weight="fill" />
                      Code {promoCode} applied ({totals.discountPercent}% off)
                    </span>
                    <button
                      type="button"
                      onClick={clearPromoCode}
                      className="text-emerald-700 underline hover:text-emerald-950"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePromoSubmit} className="mb-3">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <TagIcon
                          size={15}
                          weight="bold"
                          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8C90A6]"
                        />
                        <input
                          type="text"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="Promo code (BETTER10)"
                          aria-label="Promo code"
                          className="h-9 w-full rounded-full border border-[#E5E7F2] bg-white pl-8 pr-3 text-xs text-[#141523] placeholder:text-[#8C90A6] focus:border-[#5D45FD] focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="h-9 rounded-full border border-[#5D45FD] px-4 text-xs font-semibold text-[#5D45FD] transition-colors hover:bg-[#5D45FD] hover:text-white"
                      >
                        Apply
                      </button>
                    </div>
                    {promoFeedback && (
                      <p
                        className={`mt-1.5 text-[11px] font-medium ${
                          promoFeedback.ok ? "text-emerald-700" : "text-rose-600"
                        }`}
                      >
                        {promoFeedback.message}
                      </p>
                    )}
                  </form>
                )}

                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-[#5C6078]">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#141523]">
                      ${totals.subtotal.toFixed(2)}
                    </span>
                  </div>
                  {totals.discount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Discount ({promoCode})</span>
                      <span className="font-semibold">
                        -${totals.discount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#5C6078]">
                    <span>Shipping</span>
                    <span className="font-semibold text-[#141523]">
                      {totals.shippingCost === 0
                        ? "Free"
                        : `$${totals.shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-[#E7E9F2] pt-2 text-base font-bold text-[#141523]">
                    <span>Estimated Total</span>
                    <span>${totals.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <Link
                    href="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="flex h-11 items-center justify-center rounded-full border border-[#DFE2EE] bg-white text-sm font-semibold text-[#141523] transition-colors hover:border-[#5D45FD] hover:text-[#5D45FD]"
                  >
                    View Cart
                  </Link>
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#5D45FD] text-sm font-semibold text-white shadow-md shadow-[#5D45FD]/25 transition-all hover:bg-[#4B33EC] active:scale-[0.98]"
                  >
                    <span>Checkout</span>
                    <ArrowRightIcon size={16} weight="bold" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
