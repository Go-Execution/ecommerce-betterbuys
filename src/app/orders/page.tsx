"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  PackageIcon,
  ReceiptIcon,
} from "@phosphor-icons/react";
import { useStore } from "@/context/StoreContext";

export default function OrdersPage() {
  const { orders } = useStore();

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-[#141523] sm:text-3xl">
            Your Orders
          </h1>
          <p className="mt-1 text-sm text-[#5C6078]">
            Track recent purchases and inspect itemized receipts.
          </p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5D45FD] hover:underline"
        >
          <span>Shop New Arrivals</span>
          <ArrowRightIcon size={16} weight="bold" />
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="rounded-[28px] border border-[#EAECEF] bg-white p-10 text-center shadow-xs">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEEBFF] text-[#5D45FD]">
            <PackageIcon size={32} weight="duotone" />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-[#141523]">
            No orders placed yet
          </h2>
          <p className="mx-auto mt-1.5 max-w-md text-sm text-[#5C6078]">
            Once you complete checkout, your confirmation receipt and live status tracker will appear right here.
          </p>
          <Link
            href="/shop"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#5D45FD] px-7 text-sm font-bold text-white shadow-md shadow-[#5D45FD]/25 hover:bg-[#4B33EC]"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <article
              key={order.id}
              className="rounded-[24px] border border-[#EAECEF] bg-white p-5 shadow-xs sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ECEEF6] pb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-base font-bold text-[#5D45FD]">
                      {order.id}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                      <CheckCircleIcon size={13} weight="fill" />
                      {order.status}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#7A7E96]">
                    {new Date(order.createdAt).toLocaleString()} ·{" "}
                    {order.customer.fullName} · {order.estimatedDelivery}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-[#7A7E96]">Total Paid</p>
                    <p className="font-display text-lg font-bold text-[#141523]">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <Link
                    href={`/thank-you?order=${encodeURIComponent(order.id)}`}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#5D45FD] px-4 text-xs font-bold text-[#5D45FD] transition-colors hover:bg-[#5D45FD] hover:text-white"
                  >
                    <ReceiptIcon size={15} weight="bold" />
                    <span>View Receipt</span>
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {order.items.map((item) => (
                  <Link
                    key={`${order.id}-${item.productId}-${item.variant || "std"}`}
                    href={`/product/${item.slug}`}
                    className="flex items-center gap-2.5 rounded-2xl border border-[#ECEEF6] bg-[#FAFBFD] p-2 pr-3.5 transition-colors hover:border-[#5D45FD]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-11 w-11 rounded-xl bg-white object-contain p-1 mix-blend-multiply"
                    />
                    <div className="text-xs">
                      <p className="max-w-[180px] truncate font-semibold text-[#141523]">
                        {item.name}
                      </p>
                      <p className="text-[#7A7E96]">
                        Qty {item.quantity} · ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
