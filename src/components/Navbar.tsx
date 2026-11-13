"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import {
  ArrowRightIcon,
  HeartIcon,
  ListIcon,
  MagnifyingGlassIcon,
  PackageIcon,
  BasketIcon,
  StorefrontIcon,
  XIcon,
} from "@phosphor-icons/react";
import { BrandLogo } from "@/components/BrandLogo";
import { PRODUCTS } from "@/data/products";
import { useStore } from "@/context/StoreContext";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totals, favourites, orders, setIsCartOpen } = useStore();
  const reduce = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isNowScrolled = latest > 14;
    setScrolled((prev) => (prev === isNowScrolled ? prev : isNowScrolled));
  });

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setSearchFocused(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close autocomplete popover on outside click
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    setSearchFocused(false);
    if (trimmed) {
      router.push(`/shop?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/shop");
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E7E9F2] bg-white/92 shadow-sm shadow-[#141523]/5 backdrop-blur-xl"
          : "border-b border-[#ECEEF6] bg-white/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1380px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Left: Brand + Search */}
        <div className="flex flex-1 items-center gap-4 lg:gap-6">
          <BrandLogo />

          {/* Desktop/Tablet Search Input */}
          <div ref={searchBoxRef} className="relative hidden max-w-md flex-1 sm:block">
            <search>
              <form onSubmit={handleSearchSubmit} className="relative">
                <MagnifyingGlassIcon
                  size={18}
                  weight="bold"
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C90A6]"
                />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onFocus={() => setSearchFocused(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchFocused(true);
                  }}
                  placeholder="Search products, brands, rooms..."
                  aria-label="Search products"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  className="h-10 w-full rounded-full border border-[#E7E9F2] bg-[#F4F5FA] pl-10 pr-12 text-sm text-[#141523] placeholder:text-[#8C90A6] transition-all focus:border-[#0077EE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0077EE]/20"
                />
                {!searchQuery ? (
                  <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-[#DFE2EE] bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[#8C90A6] lg:inline-block">
                    /
                  </kbd>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-[#8C90A6] hover:bg-[#E7E9F2] hover:text-[#141523]"
                  >
                    <XIcon size={14} weight="bold" />
                  </button>
                )}
              </form>
            </search>

            {/* Live Search Popover */}
            <AnimatePresence>
              {searchFocused && searchQuery.trim().length > 0 && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-2xl border border-[#E7E9F2] bg-white p-2 shadow-2xl shadow-[#141523]/12"
                >
                  {searchResults.length > 0 ? (
                    <>
                      <ul className="divide-y divide-[#F3F4F8]">
                        {searchResults.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={`/product/${item.slug}`}
                              onClick={() => setSearchFocused(false)}
                              className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-[#F5F6FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
                            >
                              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#F3F4F8] p-1">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="h-full w-full object-contain mix-blend-multiply"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold text-[#141523]">
                                  {item.name}
                                </p>
                                <p className="text-xs text-[#7A7E96]">
                                  {item.category} · {item.brand}
                                </p>
                              </div>
                              <span className="shrink-0 text-sm font-bold text-[#FF6B00]">
                                ${item.price.toFixed(2)}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={handleSearchSubmit}
                        className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#F5F6FA] py-2 text-xs font-semibold text-[#FF6B00] transition-colors hover:bg-[#EAF3FF]"
                      >
                        <span>View all matches in Shop</span>
                        <ArrowRightIcon size={14} weight="bold" />
                      </button>
                    </>
                  ) : (
                    <div className="px-3 py-5 text-center text-sm text-[#7A7E96]">
                      No matches for &ldquo;{searchQuery}&rdquo;. Try &ldquo;pan&rdquo;, &ldquo;catnip&rdquo;, or &ldquo;case&rdquo;.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Utility Navigation Matching Design Reference */}
        <nav aria-label="Main navigation" className="flex items-center gap-1.5 sm:gap-2.5">
          <Link
            href="/shop"
            className={`hidden md:inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
              pathname === "/shop"
                ? "bg-[#EAF3FF] text-[#0077EE] font-semibold"
                : "text-[#35384B] hover:bg-[#F4F5FA] hover:text-[#141523]"
            }`}
          >
            <StorefrontIcon size={18} weight={pathname === "/shop" ? "fill" : "regular"} />
            <span>Shop All</span>
          </Link>

          <Link
            href="/orders"
            className={`relative hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
              pathname === "/orders"
                ? "bg-[#EAF3FF] text-[#0077EE] font-semibold"
                : "text-[#35384B] hover:bg-[#F4F5FA] hover:text-[#141523]"
            }`}
          >
            <PackageIcon size={19} weight={pathname === "/orders" ? "fill" : "regular"} />
            <span className="hidden lg:inline">Orders</span>
            {orders.length > 0 && (
              <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#141523] px-1 text-[10px] font-bold text-white">
                {orders.length}
              </span>
            )}
          </Link>

          <Link
            href="/favourites"
            className={`relative inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
              pathname === "/favourites"
                ? "bg-[#EAF3FF] text-[#0077EE] font-semibold"
                : "text-[#35384B] hover:bg-[#F4F5FA] hover:text-[#141523]"
            }`}
            aria-label={`Favourites (${favourites.length})`}
          >
            <HeartIcon
              size={19}
              weight={favourites.length > 0 || pathname === "/favourites" ? "fill" : "regular"}
              className={favourites.length > 0 ? "text-[#FF6B00]" : ""}
            />
            <span className="hidden lg:inline">Favourites</span>
            {favourites.length > 0 && (
              <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF6B00] px-1 text-[10px] font-bold text-white">
                {favourites.length}
              </span>
            )}
          </Link>

          {/* Cart Drawer Trigger with Spring Counter */}
          <motion.button
            type="button"
            whileTap={reduce ? undefined : { scale: 0.96 }}
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open shopping cart with ${totals.itemCount} items`}
            data-agent="navbar-cart-button"
            className="relative inline-flex items-center gap-2 rounded-full border border-[#E7E9F2] bg-white px-3.5 py-2 text-sm font-semibold text-[#141523] shadow-xs transition-all hover:border-[#FF6B00] hover:bg-[#FFF6F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
          >
            <span className="relative">
              <BasketIcon size={19} weight="bold" className="text-[#141523]" />
              <AnimatePresence mode="popLayout">
                {totals.itemCount > 0 && (
                  <motion.span
                    key={totals.itemCount}
                    initial={reduce ? { opacity: 1 } : { scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 24 }}
                    className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF5A36] px-1 text-[10px] font-bold text-white shadow-sm"
                  >
                    {totals.itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
            <span>Cart</span>
            {totals.itemCount > 0 && (
              <span className="hidden sm:inline text-xs font-bold text-[#FF6B00]">
                ${totals.subtotal.toFixed(0)}
              </span>
            )}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E9F2] bg-white text-[#141523] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
          >
            {mobileMenuOpen ? <XIcon size={19} weight="bold" /> : <ListIcon size={19} weight="bold" />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Navigation + Search */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#ECEEF6] bg-white px-4 pb-4 pt-3 md:hidden"
          >
            <form onSubmit={handleSearchSubmit} className="relative mb-3 sm:hidden">
              <MagnifyingGlassIcon
                size={18}
                weight="bold"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C90A6]"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products mobile"
                className="h-10 w-full rounded-full border border-[#E7E9F2] bg-[#F4F5FA] pl-10 pr-4 text-sm text-[#141523] focus:border-[#0077EE] focus:bg-white focus:outline-none"
              />
            </form>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "/", label: "Storefront" },
                { href: "/shop", label: "All Products" },
                { href: "/cart", label: `Cart (${totals.itemCount})` },
                { href: "/checkout", label: "Checkout" },
                { href: "/favourites", label: `Favourites (${favourites.length})` },
                { href: "/orders", label: `Orders (${orders.length})` },
                { href: "/contact", label: "Support & Pickup" },
                { href: "/faq", label: "Help & FAQs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "bg-[#EAF3FF] text-[#0077EE] font-semibold"
                      : "bg-[#F4F5FA] text-[#141523] hover:bg-[#EAECEF]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
