"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CheckCircleIcon,
  HeartIcon,
  ShoppingBagIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useStore } from "@/context/StoreContext";

export function ToastStack() {
  const { toasts, dismissToast, setIsCartOpen, isCartOpen } = useStore();
  const reduce = useReducedMotion();

  if (isCartOpen) return null;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-5 right-5 z-40 flex w-full max-w-sm flex-col gap-2.5 px-4 sm:px-0"
    >
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.94 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-[#E7E9F2] bg-white/95 p-3 shadow-xl shadow-[#141523]/10 backdrop-blur-md"
          >
            {toast.image ? (
              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#F3F4F8] p-1">
                <img
                  src={toast.image}
                  alt=""
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEEBFF] text-[#5D45FD]">
                {toast.type === "fav" ? (
                  <HeartIcon size={20} weight="fill" />
                ) : toast.type === "success" ? (
                  <CheckCircleIcon size={20} weight="fill" />
                ) : (
                  <ShoppingBagIcon size={20} weight="fill" />
                )}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#141523]">{toast.title}</p>
              {toast.description && (
                <p className="truncate text-xs text-[#5C6078]">{toast.description}</p>
              )}
              {toast.type === "cart" && (
                <div className="mt-1 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      dismissToast(toast.id);
                      setIsCartOpen(true);
                    }}
                    className="text-xs font-semibold text-[#5D45FD] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD]"
                  >
                    Open Cart
                  </button>
                  <Link
                    href="/checkout"
                    onClick={() => dismissToast(toast.id)}
                    className="text-xs font-semibold text-[#141523] hover:text-[#5D45FD]"
                  >
                    Checkout
                  </Link>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
              className="rounded-lg p-1 text-[#8C90A6] transition-colors hover:bg-[#F3F4F8] hover:text-[#141523] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D45FD]"
            >
              <XIcon size={16} weight="bold" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
