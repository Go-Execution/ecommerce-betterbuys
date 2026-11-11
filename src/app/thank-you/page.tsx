"use client";

import React, { Suspense, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  PackageIcon,
  PrinterIcon,
  SparkleIcon,
  TruckIcon,
} from "@phosphor-icons/react";
import { PRODUCTS, STORE_INFO } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { ProductCard } from "@/components/ProductCard";

function ThankYouContent() {
  const params = useSearchParams();
  const orderId = params.get("order") || "";
  const reduce = useReducedMotion();
  const { orders, getOrderById } = useStore();

  const order = useMemo(() => {
    if (orderId) {
      const found = getOrderById(orderId);
      if (found) return found;
    }
    return orders[0];
  }, [getOrderById, orderId, orders]);

  const recommended = PRODUCTS.filter((p) => p.topItem).slice(0, 4);

  return (
    <div className="mx-auto max-w-[1160px] px-4 py-8 sm:px-6 lg:px-8">
      {/* Celebratory Confirmation Card */}
      <motion.section
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative overflow-hidden rounded-[32px] border border-[#E7E9F2] bg-white p-6 shadow-sm sm:p-10"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={reduce ? { scale: 1 } : { scale: 0.4, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 360, damping: 20, delay: 0.1 }}
            className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5D45FD] to-[#816BFF] text-white shadow-xl shadow-[#5D45FD]/30"
          >
            <CheckCircleIcon size={42} weight="fill" />
            {!reduce && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.2, repeat: 2 }}
                className="absolute inset-0 rounded-3xl border-2 border-[#5D45FD]"
              />
            )}
          </motion.div>

          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#EEEBFF] px-3.5 py-1 text-xs font-bold text-[#5D45FD]">
            <SparkleIcon size={14} weight="fill" />
            <span>Order Confirmed</span>
          </span>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#141523] sm:text-4xl">
            Thank you{order ? `, ${order.customer.fullName.split(" ")[0]}` : ""}! Your order is in.
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#5C6078]">
            {order
              ? `We have sent an order summary to ${order.customer.email}. Your items are being prepared at our Catskill, NY facility.`
              : "Your order confirmation is complete. Check your order history or keep browsing our everyday deals."}
          </p>

          {/* Order Timeline */}
          <div className="mt-8 w-full max-w-2xl rounded-2xl border border-[#ECEEF6] bg-[#F8F9FD] p-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Order Placed", active: true, icon: CheckCircleIcon },
                { label: "Packing in NY", active: true, icon: PackageIcon },
                { label: "On the Way", active: false, icon: TruckIcon },
                { label: "Delivered", active: false, icon: MapPinIcon },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex flex-col items-center">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        step.active
                          ? "bg-[#5D45FD] text-white shadow-sm shadow-[#5D45FD]/30"
                          : "bg-white text-[#9B9FB5] ring-1 ring-[#E5E7F2]"
                      }`}
                    >
                      <Icon size={17} weight={step.active ? "fill" : "bold"} />
                    </div>
                    <p
                      className={`mt-2 text-xs font-bold ${
                        step.active ? "text-[#141523]" : "text-[#8C90A6]"
                      }`}
                    >
                      {i + 1}. {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Receipt if Order Record Found */}
        {order && (
          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#ECEEF6] pt-8 lg:grid-cols-12">
            {/* Customer & Delivery Details */}
            <div className="space-y-4 lg:col-span-5">
              <div className="rounded-2xl bg-[#FAFBFD] p-5 ring-1 ring-[#ECEEF6]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C90A6]">
                  Order Number
                </p>
                <p className="mt-1 font-mono text-lg font-bold text-[#5D45FD]">
                  {order.id}
                </p>
                <p className="mt-0.5 text-xs text-[#7A7E96]">
                  Placed on {new Date(order.createdAt).toLocaleString()}
                </p>

                <div className="mt-4 space-y-3 border-t border-[#ECEEF6] pt-4 text-xs text-[#35384B]">
                  <div>
                    <p className="font-bold text-[#141523]">
                      {order.shippingMethod === "pickup"
                        ? "Pickup Location"
                        : "Shipping Destination"}
                    </p>
                    <p className="mt-0.5 text-[#5C6078]">
                      {order.customer.fullName}
                    </p>
                    <p className="text-[#5C6078]">{order.customer.address}</p>
                    <p className="text-[#5C6078]">
                      {order.customer.city}, {order.customer.state}{" "}
                      {order.customer.postalCode}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#141523]">
                      Estimated Arrival
                    </p>
                    <p className="mt-0.5 font-semibold text-emerald-700">
                      {order.estimatedDelivery}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#141523]">Payment Method</p>
                    <p className="mt-0.5 text-[#5C6078]">
                      {order.paymentLast4 === "PAYX"
                        ? "1-Click Express Pay"
                        : `Card ending in •••• ${order.paymentLast4}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Items + Receipt Totals */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#ECEEF6] bg-white p-5">
                <h2 className="font-display text-base font-bold text-[#141523]">
                  Items Ordered ({order.items.reduce((a, b) => a + b.quantity, 0)})
                </h2>
                <ul className="mt-4 divide-y divide-[#F3F4F8]">
                  {order.items.map((item) => (
                    <li
                      key={`${item.productId}-${item.variant || "std"}`}
                      className="flex items-center gap-3.5 py-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 shrink-0 rounded-xl bg-[#F3F4F8] object-contain p-1 mix-blend-multiply"
                      />
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/product/${item.slug}`}
                          className="line-clamp-1 text-sm font-semibold text-[#141523] hover:text-[#5D45FD]"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-[#7A7E96]">
                          Qty: {item.quantity} · ${item.price.toFixed(2)} each
                          {item.variant ? ` · ${item.variant}` : ""}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-[#141523]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-4 space-y-1.5 border-t border-[#ECEEF6] pt-4 text-sm">
                  <div className="flex justify-between text-[#5C6078]">
                    <dt>Subtotal</dt>
                    <dd className="font-semibold text-[#141523]">
                      ${order.subtotal.toFixed(2)}
                    </dd>
                  </div>
                  {order.discount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <dt>Promo Discount ({order.promoCode})</dt>
                      <dd className="font-semibold">
                        -${order.discount.toFixed(2)}
                      </dd>
                    </div>
                  )}
                  <div className="flex justify-between text-[#5C6078]">
                    <dt>Shipping</dt>
                    <dd className="font-semibold text-[#141523]">
                      {order.shippingCost === 0
                        ? "Free"
                        : `$${order.shippingCost.toFixed(2)}`}
                    </dd>
                  </div>
                  <div className="flex justify-between text-[#5C6078]">
                    <dt>Tax</dt>
                    <dd className="font-semibold text-[#141523]">
                      ${order.tax.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-[#ECEEF6] pt-2.5 text-base font-bold text-[#141523]">
                    <dt>Total Paid</dt>
                    <dd className="font-display text-xl text-[#5D45FD]">
                      ${order.total.toFixed(2)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 print:hidden">
          <Link
            href="/shop"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#5D45FD] px-7 text-sm font-bold text-white shadow-md shadow-[#5D45FD]/25 hover:bg-[#4B33EC]"
          >
            <span>Continue Shopping</span>
            <ArrowRightIcon size={16} weight="bold" />
          </Link>
          <Link
            href="/orders"
            className="inline-flex h-11 items-center rounded-full border border-[#DFE2EE] bg-white px-6 text-sm font-semibold text-[#141523] hover:border-[#5D45FD] hover:text-[#5D45FD]"
          >
            View Order History
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex h-11 items-center gap-1.5 rounded-full border border-[#DFE2EE] bg-[#FAFBFD] px-5 text-sm font-semibold text-[#5C6078] hover:text-[#141523]"
          >
            <PrinterIcon size={16} weight="bold" />
            <span>Print Receipt</span>
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-[#8C90A6]">
          Need help with this order? Contact {STORE_INFO.email} or visit {STORE_INFO.address}.
        </p>
      </motion.section>

      {/* Post-Purchase Recommendations */}
      <section className="mt-12 print:hidden" aria-labelledby="ty-recs">
        <h2
          id="ty-recs"
          className="mb-5 font-display text-2xl font-bold text-[#141523]"
        >
          More Essentials You Might Like
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recommended.map((item, idx) => (
            <ProductCard key={item.id} product={item} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="h-96 animate-pulse rounded-[32px] bg-white" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
