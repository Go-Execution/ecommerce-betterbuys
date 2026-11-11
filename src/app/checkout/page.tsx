"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  CreditCardIcon,
  LockKeyIcon,
  MapPinIcon,
  ShieldCheckIcon,
  BasketIcon,
  SparkleIcon,
  TagIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import {
  PRODUCTS,
  SHIPPING_OPTIONS,
  STORE_INFO,
  getProductById,
} from "@/data/products";
import { useStore } from "@/context/StoreContext";

export default function CheckoutPage() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const {
    cart,
    totals,
    promoCode,
    applyPromoCode,
    clearPromoCode,
    shippingMethod,
    setShippingMethod,
    placeOrder,
    addToCart,
    hydrated,
  } = useStore();

  const formRef = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [notes, setNotes] = useState("");
  const [billingSame, setBillingSame] = useState(true);

  const [payMethod, setPayMethod] = useState<"card" | "express">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const [promoInput, setPromoInput] = useState("");
  const [promoMsg, setPromoMsg] = useState<{ ok: boolean; message: string } | null>(
    null
  );
  const [submitting, setSubmitting] = useState(false);

  const formatCardNumber = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  const handlePromo = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyPromoCode(promoInput);
    setPromoMsg(res);
    if (res.ok) setPromoInput("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const formEl = formRef.current;
    if (formEl && !formEl.checkValidity()) {
      const firstInvalid = formEl.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      formEl.reportValidity();
      return;
    }

    setSubmitting(true);
    const digits = cardNumber.replace(/\D/g, "");
    const last4 = payMethod === "express" ? "PAYX" : digits.slice(-4) || "4242";

    setTimeout(() => {
      const order = placeOrder(
        {
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          address:
            shippingMethod === "pickup"
              ? STORE_INFO.address
              : address.trim(),
          city: shippingMethod === "pickup" ? "Catskill" : city.trim(),
          state: shippingMethod === "pickup" ? "NY" : stateCode.trim(),
          postalCode:
            shippingMethod === "pickup" ? "12414" : postalCode.trim(),
          notes: notes.trim() || undefined,
        },
        last4
      );
      router.push(`/thank-you?order=${encodeURIComponent(order.id)}`);
    }, 650);
  };

  if (hydrated && cart.length === 0) {
    const sampleItem = PRODUCTS.find((p) => p.topItem) || PRODUCTS[0];
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="rounded-[28px] border border-[#EAECEF] bg-white p-8 shadow-sm sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEEBFF] text-[#5D45FD]">
            <BasketIcon size={32} weight="duotone" />
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold text-[#141523]">
            Your checkout bag is empty
          </h1>
          <p className="mt-2 text-sm text-[#5C6078]">
            Add at least one item to your cart before checking out.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/shop"
              className="inline-flex h-11 items-center rounded-full bg-[#5D45FD] px-7 text-sm font-bold text-white shadow-md shadow-[#5D45FD]/25 hover:bg-[#4B33EC]"
            >
              Browse All Products
            </Link>
            <button
              type="button"
              onClick={() => addToCart(sampleItem, 1, undefined, false)}
              className="inline-flex h-11 items-center rounded-full border border-[#5D45FD] bg-white px-6 text-sm font-semibold text-[#5D45FD] hover:bg-[#EEEBFF]"
            >
              Quick-Add {sampleItem.shortName} (${sampleItem.price})
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1380px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5D45FD] hover:underline"
          >
            <ArrowLeftIcon size={14} weight="bold" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="mt-1 font-display text-2xl font-bold text-[#141523] sm:text-3xl">
            Secure Checkout
          </h1>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#35384B] shadow-xs ring-1 ring-[#E7E9F2]">
          <LockKeyIcon size={16} weight="fill" className="text-emerald-600" />
          <span>256-Bit Encrypted Checkout</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Checkout Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          aria-labelledby="checkout-form-heading"
          className="space-y-6 lg:col-span-7"
        >
          <h2 id="checkout-form-heading" className="visually-hidden">
            Customer and payment details
          </h2>

          {/* Step 1: Contact Information */}
          <section className="rounded-[26px] border border-[#EAECEF] bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5D45FD] text-xs font-bold text-white">
                1
              </span>
              <h3 className="font-display text-lg font-bold text-[#141523]">
                Contact Details
              </h3>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="co-name"
                  className="block text-xs font-bold text-[#35384B]"
                >
                  Full name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="co-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jordan Rivera"
                  data-error="co-name-err"
                  className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                />
                <p
                  id="co-name-err"
                  className="ebb-error-msg mt-1 text-xs font-medium text-rose-600"
                >
                  Please enter your full name for delivery.
                </p>
              </div>

              <div>
                <label
                  htmlFor="co-email"
                  className="block text-xs font-bold text-[#35384B]"
                >
                  Email address <span className="text-rose-500">*</span>
                </label>
                <span id="co-email-hint" className="mt-0.5 block text-[11px] text-[#7A7E96]">
                  Receipt and tracking link sent here
                </span>
                <input
                  id="co-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  aria-describedby="co-email-hint"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                />
                <p className="ebb-error-msg mt-1 text-xs font-medium text-rose-600">
                  Enter an email address in the format you@example.com.
                </p>
              </div>

              <div>
                <label
                  htmlFor="co-phone"
                  className="block text-xs font-bold text-[#35384B]"
                >
                  Phone number <span className="text-rose-500">*</span>
                </label>
                <span id="co-phone-hint" className="mt-0.5 block text-[11px] text-[#7A7E96]">
                  For carrier or pickup alerts
                </span>
                <input
                  id="co-phone"
                  name="tel"
                  type="tel"
                  required
                  autoComplete="tel"
                  aria-describedby="co-phone-hint"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(518) 555-0194"
                  className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                />
                <p className="ebb-error-msg mt-1 text-xs font-medium text-rose-600">
                  Please enter a valid contact phone number.
                </p>
              </div>
            </div>
          </section>

          {/* Step 2: Delivery Method & Address */}
          <section className="rounded-[26px] border border-[#EAECEF] bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5D45FD] text-xs font-bold text-white">
                2
              </span>
              <h3 className="font-display text-lg font-bold text-[#141523]">
                Delivery Method & Address
              </h3>
            </div>

            <fieldset className="mt-4">
              <legend className="visually-hidden">Select shipping method</legend>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {SHIPPING_OPTIONS.map((opt) => {
                  const selected = shippingMethod === opt.id;
                  const freeGround =
                    opt.id === "standard" &&
                    totals.subtotal - totals.discount >=
                      STORE_INFO.freeShippingThreshold;
                  return (
                    <label
                      key={opt.id}
                      className={`flex cursor-pointer flex-col justify-between rounded-2xl border p-3.5 transition-all ${
                        selected
                          ? "border-[#5D45FD] bg-[#F7F6FF] ring-1 ring-[#5D45FD]"
                          : "border-[#E7E9F2] hover:border-[#D5D1FC]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <input
                          type="radio"
                          name="shipping-method"
                          checked={selected}
                          onChange={() => setShippingMethod(opt.id)}
                          className="mt-0.5 h-4 w-4 accent-[#5D45FD]"
                        />
                        <span className="text-xs font-bold text-[#5D45FD]">
                          {opt.price === 0 || freeGround
                            ? "Free"
                            : `$${opt.price.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs font-bold text-[#141523]">
                          {opt.label}
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#7A7E96]">
                          {opt.eta}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {shippingMethod === "pickup" ? (
              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#DFDAFF] bg-[#F7F6FF] p-4">
                <MapPinIcon size={20} weight="fill" className="mt-0.5 shrink-0 text-[#5D45FD]" />
                <div>
                  <p className="text-sm font-bold text-[#141523]">
                    Catskill Warehouse Pickup
                  </p>
                  <p className="mt-0.5 text-xs text-[#5C6078]">
                    Pick up directly at {STORE_INFO.address}. We will email you as soon as your items are packed (typically within 2 hours).
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="co-address"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    Street address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="co-address"
                    name="street-address"
                    type="text"
                    required
                    autoComplete="shipping street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="742 Evergreen Terrace, Apt 4B"
                    className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                  />
                  <p className="ebb-error-msg mt-1 text-xs font-medium text-rose-600">
                    Please enter your street address.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="co-city"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="co-city"
                    name="city"
                    type="text"
                    required
                    autoComplete="shipping address-level2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Catskill"
                    className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="co-state"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    State <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="co-state"
                    name="state"
                    type="text"
                    required
                    autoComplete="shipping address-level1"
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value)}
                    placeholder="NY"
                    className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="co-zip"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    ZIP / Postal Code
                  </label>
                  <input
                    id="co-zip"
                    name="postal-code"
                    type="text"
                    inputMode="numeric"
                    autoComplete="shipping postal-code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="12414"
                    className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="mt-4">
              <label
                htmlFor="co-notes"
                className="block text-xs font-bold text-[#35384B]"
              >
                Delivery instructions (optional)
              </label>
              <textarea
                id="co-notes"
                name="notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Gate code, leave on covered porch, gift note..."
                className="mt-1.5 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] p-3 text-sm text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
              />
            </div>

            <label className="mt-3 inline-flex cursor-pointer items-center gap-2.5 text-xs font-medium text-[#35384B]">
              <input
                type="checkbox"
                checked={billingSame}
                onChange={(e) => setBillingSame(e.target.checked)}
                className="h-4 w-4 rounded accent-[#5D45FD]"
              />
              <span>Billing address is the same as delivery address</span>
            </label>
          </section>

          {/* Step 3: Payment Details */}
          <section className="rounded-[26px] border border-[#EAECEF] bg-white p-6 shadow-xs">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5D45FD] text-xs font-bold text-white">
                  3
                </span>
                <h3 className="font-display text-lg font-bold text-[#141523]">
                  Payment
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-[#7A7E96]">
                Demo storefront checkout
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setPayMethod("card")}
                aria-pressed={payMethod === "card"}
                className={`flex h-11 items-center justify-center gap-2 rounded-2xl border text-xs font-bold transition-all ${
                  payMethod === "card"
                    ? "border-[#5D45FD] bg-[#EEEBFF] text-[#5D45FD]"
                    : "border-[#E7E9F2] bg-white text-[#35384B]"
                }`}
              >
                <CreditCardIcon size={17} weight="bold" />
                <span>Credit / Debit Card</span>
              </button>
              <button
                type="button"
                onClick={() => setPayMethod("express")}
                aria-pressed={payMethod === "express"}
                className={`flex h-11 items-center justify-center gap-2 rounded-2xl border text-xs font-bold transition-all ${
                  payMethod === "express"
                    ? "border-[#5D45FD] bg-[#EEEBFF] text-[#5D45FD]"
                    : "border-[#E7E9F2] bg-white text-[#35384B]"
                }`}
              >
                <SparkleIcon size={17} weight="fill" />
                <span>1-Click Express Pay</span>
              </button>
            </div>

            {payMethod === "card" ? (
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="co-cc"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    Card number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="co-cc"
                    name="cc-number"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    required
                    minLength={15}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="4532 8910 2345 6789"
                    className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 font-mono text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="co-exp"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    Expiration (MM/YY) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="co-exp"
                    name="cc-exp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    required
                    minLength={4}
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                    placeholder="08/29"
                    className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 font-mono text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="co-csc"
                    className="block text-xs font-bold text-[#35384B]"
                  >
                    Security code (CVC) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="co-csc"
                    name="cc-csc"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    required
                    minLength={3}
                    maxLength={4}
                    value={cardCvc}
                    onChange={(e) =>
                      setCardCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
                    }
                    placeholder="482"
                    className="ebb-input mt-1.5 h-12 w-full rounded-xl border border-[#DFE2EE] bg-[#FAFBFD] px-4 font-mono text-base text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="mt-4 rounded-2xl border border-[#DFDAFF] bg-[#F7F6FF] p-4 text-xs text-[#35384B]">
                Instant tokenized express payment selected. Click below to complete your order immediately.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={submitting}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              data-agent="checkout-submit-order"
              className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#5D45FD] text-base font-bold text-white shadow-lg shadow-[#5D45FD]/30 transition-all hover:bg-[#4B33EC] disabled:cursor-not-allowed disabled:opacity-65"
            >
              <LockKeyIcon size={18} weight="bold" />
              <span>
                {submitting
                  ? "Confirming Your Order..."
                  : `Pay $${totals.total.toFixed(2)} & Place Order`}
              </span>
            </motion.button>
          </section>
        </form>

        {/* Right Sticky Order Summary */}
        <aside className="lg:col-span-5">
          <div className="sticky top-[88px] rounded-[28px] border border-[#EAECEF] bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[#141523]">
              In Your Bag ({totals.itemCount})
            </h2>

            <ul className="mt-4 max-h-80 space-y-3 overflow-y-auto pr-1">
              {cart.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;
                return (
                  <li
                    key={`${item.productId}-${item.variant || "std"}`}
                    className="flex items-center gap-3 rounded-2xl bg-[#F8F9FD] p-2.5"
                  >
                    <div className="relative h-14 w-14 shrink-0 rounded-xl bg-white p-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain mix-blend-multiply"
                      />
                      <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5D45FD] px-1 text-[10px] font-bold text-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-[#141523]">
                        {product.shortName}
                      </p>
                      {item.variant && (
                        <p className="truncate text-[11px] text-[#7A7E96]">
                          {item.variant}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-bold text-[#141523]">
                      ${(product.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Promo Code inside Checkout Summary */}
            <div className="mt-5 border-t border-[#ECEEF6] pt-4">
              {promoCode ? (
                <div className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-800">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon size={15} weight="fill" />
                    Code {promoCode} active (-{totals.discountPercent}%)
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
                <form onSubmit={handlePromo} className="flex gap-2">
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
                      placeholder="Promo code (WELCOME15)"
                      aria-label="Checkout promo code"
                      className="h-10 w-full rounded-full border border-[#E7E9F2] bg-[#F7F8FC] pl-9 pr-3 text-xs text-[#141523] focus:border-[#5D45FD] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-10 rounded-full border border-[#5D45FD] px-4 text-xs font-bold text-[#5D45FD] hover:bg-[#5D45FD] hover:text-white"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoMsg && (
                <p
                  className={`mt-1.5 text-xs font-medium ${
                    promoMsg.ok ? "text-emerald-700" : "text-rose-600"
                  }`}
                >
                  {promoMsg.message}
                </p>
              )}
            </div>

            {/* Totals Breakdown */}
            <dl className="mt-4 space-y-2 border-t border-[#ECEEF6] pt-4 text-sm">
              <div className="flex justify-between text-[#5C6078]">
                <dt>Subtotal</dt>
                <dd className="font-semibold text-[#141523]">
                  ${totals.subtotal.toFixed(2)}
                </dd>
              </div>
              {totals.discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <dt>Discount</dt>
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
                <dt>Estimated Tax</dt>
                <dd className="font-semibold text-[#141523]">
                  ${totals.tax.toFixed(2)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-[#ECEEF6] pt-3 text-base font-bold text-[#141523]">
                <dt>Total Due</dt>
                <dd className="font-display text-2xl text-[#5D45FD]">
                  ${totals.total.toFixed(2)}
                </dd>
              </div>
            </dl>

            <div className="mt-5 space-y-2 rounded-2xl bg-[#F8F9FD] p-3.5 text-xs text-[#5C6078]">
              <p className="flex items-center gap-2 font-semibold text-[#141523]">
                <TruckIcon size={16} weight="bold" className="text-[#5D45FD]" />
                <span>Fast dispatch from Catskill, NY 12414</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheckIcon size={16} weight="bold" className="text-[#5D45FD]" />
                <span>30-day money-back guarantee on every product</span>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
