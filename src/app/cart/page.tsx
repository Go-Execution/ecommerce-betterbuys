"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
  BasketIcon,
  SparkleIcon,
  TagIcon,
  TrashIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import {
  PRODUCTS,
  SHIPPING_OPTIONS,
  STORE_INFO,
  getProductById,
} from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { ProductCard } from "@/components/ProductCard";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totals,
    promoCode,
    applyPromoCode,
    clearPromoCode,
    shippingMethod,
    setShippingMethod,
  } = useStore();
  const reduce = useReducedMotion();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  const handlePromo = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyPromoCode(promoInput);
    setPromoMessage(res);
    if (res.ok) setPromoInput("");
  };

  const crossSellProducts = PRODUCTS.filter(
    (p) => !cart.some((c) => c.productId === p.id)
  ).slice(0, 4);

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-[#141523] sm:text-3xl">
            Shopping Cart
          </h1>
          <p className="mt-1 text-sm text-[#5C6078]">
            {totals.itemCount === 0
              ? "Your cart is currently empty."
              : `${totals.itemCount} item${totals.itemCount === 1 ? "" : "s"} ready for checkout.`}
          </p>
        </div>

        {cart.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-semibold text-[#7A7E96] hover:text-rose-600"
          >
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="rounded-[28px] border border-[#EAECEF] bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF1E5] text-[#FF6B00]">
            <BasketIcon size={32} weight="duotone" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-[#141523]">
            Nothing in your cart yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#5C6078]">
            Explore our fitness gear, nonstick cookware, pet favorites, and phone cases, or quick-add a bestseller below.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/shop"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FF6B00] px-7 text-sm font-semibold text-white shadow-md shadow-[#FF6B00]/25 hover:bg-[#E55A00]"
            >
              <span>Browse All Products</span>
              <ArrowRightIcon size={16} weight="bold" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Line Items */}
          <div className="space-y-4 lg:col-span-8">
            {/* Free Shipping Banner */}
            <div className="rounded-[22px] border border-[#E7E9F2] bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#141523]">
                <TruckIcon size={18} weight="bold" className="text-[#0077EE]" />
                {totals.freeShippingRemaining === 0 ? (
                  <span className="text-emerald-700">
                    Awesome! Your order qualifies for Free Ground Shipping.
                  </span>
                ) : (
                  <span>
                    Add{" "}
                    <strong className="text-[#0077EE]">
                      ${totals.freeShippingRemaining.toFixed(2)}
                    </strong>{" "}
                    more to unlock Free Ground Shipping (orders ${STORE_INFO.freeShippingThreshold}+)
                  </span>
                )}
              </div>
              <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#ECEEF6]">
                <motion.div
                  className={`h-full rounded-full ${
                    totals.freeShippingRemaining === 0
                      ? "bg-emerald-500"
                      : "bg-gradient-to-r from-[#0077EE] via-[#048BE3] to-[#FF6B00]"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${totals.freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <ul className="space-y-3">
              <AnimatePresence initial={false}>
                {cart.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;
                  return (
                    <motion.li
                      key={`${item.productId}-${item.variant || "std"}`}
                      layout={!reduce}
                      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, x: -30 }}
                      className="flex flex-col gap-4 rounded-[24px] border border-[#EAECEF] bg-white p-4 shadow-xs sm:flex-row sm:items-center"
                    >
                      <Link
                        href={`/product/${product.slug}`}
                        className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#F3F4F8] p-2"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`h-full w-full ${
                            product.studioImage
                              ? "object-contain mix-blend-multiply"
                              : "rounded-xl object-cover"
                          }`}
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#7A7E96]">
                          <span className="text-[#0077EE]">{product.brand}</span>
                          <span>·</span>
                          <span>{product.category}</span>
                        </div>
                        <Link
                          href={`/product/${product.slug}`}
                          className="mt-1 block text-base font-bold text-[#141523] hover:text-[#FF6B00]"
                        >
                          {product.name}
                        </Link>
                        {item.variant && (
                          <p className="mt-0.5 text-xs text-[#5C6078]">
                            Option: {item.variant}
                          </p>
                        )}
                        <p className="mt-1 text-sm font-semibold text-[#5C6078]">
                          ${product.price.toFixed(2)} each
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <div className="inline-flex items-center rounded-full border border-[#E5E7F2] bg-[#F7F8FC] p-1">
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
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#141523] shadow-xs hover:bg-[#EAF3FF]"
                          >
                            <MinusIcon size={13} weight="bold" />
                          </button>
                          <span className="min-w-9 text-center text-sm font-bold text-[#141523]">
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
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#141523] shadow-xs hover:bg-[#EAF3FF]"
                          >
                            <PlusIcon size={13} weight="bold" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-display text-lg font-bold text-[#141523]">
                            ${(product.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(product.id, item.variant)
                            }
                            className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-[#8C90A6] hover:text-rose-600"
                          >
                            <TrashIcon size={13} weight="bold" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#0077EE] hover:underline"
            >
              <ArrowLeftIcon size={15} weight="bold" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Right Order Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-[88px] rounded-[28px] border border-[#EAECEF] bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-[#141523]">
                Order Summary
              </h2>

              {/* Shipping Selector */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C90A6]">
                  Delivery Option
                </p>
                <div className="mt-2 space-y-2">
                  {SHIPPING_OPTIONS.map((opt) => {
                    const selected = shippingMethod === opt.id;
                    const isFreeStandard =
                      opt.id === "standard" &&
                      totals.subtotal - totals.discount >= STORE_INFO.freeShippingThreshold;
                    return (
                      <label
                        key={opt.id}
                        className={`flex cursor-pointer items-center justify-between rounded-2xl border p-3 transition-all ${
                          selected
                            ? "border-[#FF6B00] bg-[#FFF6F0]"
                            : "border-[#ECEEF6] hover:border-[#D5D1FC]"
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <input
                            type="radio"
                            name="cart-shipping"
                            checked={selected}
                            onChange={() => setShippingMethod(opt.id)}
                            className="mt-0.5 h-4 w-4 accent-[#FF6B00]"
                          />
                          <div>
                            <p className="text-xs font-bold text-[#141523]">
                              {opt.label}
                            </p>
                            <p className="text-[11px] text-[#7A7E96]">{opt.eta}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#141523]">
                          {opt.price === 0 || isFreeStandard
                            ? "Free"
                            : `$${opt.price.toFixed(2)}`}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Promo Input */}
              <div className="mt-5">
                {promoCode ? (
                  <div className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-xs font-semibold text-emerald-800">
                    <span className="inline-flex items-center gap-1.5">
                      <SparkleIcon size={14} weight="fill" />
                      {promoCode} ({totals.discountPercent}% off)
                    </span>
                    <button
                      type="button"
                      onClick={clearPromoCode}
                      className="underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePromo}>
                    <label
                      htmlFor="cart-promo"
                      className="block text-xs font-bold uppercase tracking-wider text-[#8C90A6]"
                    >
                      Promo Code
                    </label>
                    <div className="mt-2 flex gap-2">
                      <div className="relative flex-1">
                        <TagIcon
                          size={15}
                          weight="bold"
                          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8C90A6]"
                        />
                        <input
                          id="cart-promo"
                          type="text"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="BETTER10 or WELCOME15"
                          className="h-10 w-full rounded-full border border-[#E7E9F2] bg-[#F7F8FC] pl-9 pr-3 text-xs text-[#141523] focus:border-[#0077EE] focus:bg-white focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="h-10 rounded-full border border-[#0077EE] px-4 text-xs font-bold text-[#0077EE] transition-colors hover:bg-[#0077EE] hover:text-white"
                      >
                        Apply
                      </button>
                    </div>
                    {promoMessage && (
                      <p
                        className={`mt-1.5 text-xs font-medium ${
                          promoMessage.ok ? "text-emerald-700" : "text-rose-600"
                        }`}
                      >
                        {promoMessage.message}
                      </p>
                    )}
                  </form>
                )}
              </div>

              {/* Breakdown */}
              <dl className="mt-5 space-y-2 border-t border-[#ECEEF6] pt-4 text-sm">
                <div className="flex justify-between text-[#5C6078]">
                  <dt>Subtotal</dt>
                  <dd className="font-semibold text-[#141523]">
                    ${totals.subtotal.toFixed(2)}
                  </dd>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <dt>Discount ({promoCode})</dt>
                    <dd className="font-semibold">-${totals.discount.toFixed(2)}</dd>
                  </div>
                )}
                <div className="flex justify-between text-[#5C6078]">
                  <dt>Shipping</dt>
                  <dd className="font-semibold text-[#141523]">
                    {totals.shippingCost === 0
                      ? "Free"
                      : `$${totals.shippingCost.toFixed(2)}`}
                  </dd>
                </div>
                <div className="flex justify-between text-[#5C6078]">
                  <dt>Estimated Tax (8%)</dt>
                  <dd className="font-semibold text-[#141523]">
                    ${totals.tax.toFixed(2)}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-[#ECEEF6] pt-3 text-base font-bold text-[#141523]">
                  <dt>Total</dt>
                  <dd className="font-display text-xl text-[#FF6B00]">
                    ${totals.total.toFixed(2)}
                  </dd>
                </div>
              </dl>

              <Link
                href="/checkout"
                data-agent="cart-proceed-checkout"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FF6B00] text-sm font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all hover:bg-[#E55A00] active:scale-[0.98]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRightIcon size={17} weight="bold" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#7A7E96]">
                <ShieldCheckIcon size={15} weight="fill" className="text-[#0077EE]" />
                <span>Encrypted checkout & 30-day return protection</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cross-Sell Shelf */}
      <section className="mt-14" aria-labelledby="cart-recs-heading">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2
              id="cart-recs-heading"
              className="font-display text-xl font-bold text-[#141523] sm:text-2xl"
            >
              Popular Picks to Complete Your Order
            </h2>
            <p className="text-xs text-[#5C6078]">
              Add one more favorite to qualify for free ground shipping.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {crossSellProducts.map((item, idx) => (
            <ProductCard key={item.id} product={item} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
