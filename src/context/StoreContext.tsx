"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  PRODUCTS,
  SHIPPING_OPTIONS,
  STORE_INFO,
  getProductById,
} from "@/data/products";
import {
  CartItem,
  OrderCustomer,
  OrderRecord,
  Product,
  ProductReview,
  ShippingMethodId,
} from "@/types/store";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  image?: string;
  type?: "cart" | "fav" | "info" | "success";
}

export interface CartTotals {
  itemCount: number;
  subtotal: number;
  discountPercent: number;
  discount: number;
  shippingCost: number;
  freeShippingRemaining: number;
  freeShippingProgress: number;
  tax: number;
  total: number;
}

interface StoreContextValue {
  cart: CartItem[];
  favourites: number[];
  orders: OrderRecord[];
  promoCode: string;
  shippingMethod: ShippingMethodId;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number, variant?: string, openDrawer?: boolean) => void;
  updateQuantity: (productId: number, quantity: number, variant?: string) => void;
  removeFromCart: (productId: number, variant?: string) => void;
  clearCart: () => void;
  toggleFavourite: (product: Product) => void;
  isFavourite: (productId: number) => boolean;
  applyPromoCode: (code: string) => { ok: boolean; message: string };
  clearPromoCode: () => void;
  setShippingMethod: (method: ShippingMethodId) => void;
  totals: CartTotals;
  placeOrder: (customer: OrderCustomer, paymentLast4: string) => OrderRecord;
  getOrderById: (id: string) => OrderRecord | undefined;
  toasts: ToastMessage[];
  dismissToast: (id: string) => void;
  pushToast: (toast: Omit<ToastMessage, "id">) => void;
  customReviews: Record<number, ProductReview[]>;
  addReview: (productId: number, review: Omit<ProductReview, "id" | "date" | "verified">) => void;
  hydrated: boolean;
}

const StoreContext = createContext<StoreContextValue | null>(null);

const CART_KEY = "ebb_cart_v1";
const FAV_KEY = "ebb_favs_v1";
const ORDERS_KEY = "ebb_orders_v1";
const PROMO_KEY = "ebb_promo_v1";
const SHIP_KEY = "ebb_shipping_v1";
const REVIEWS_KEY = "ebb_reviews_v1";

export function calculateCartTotals(
  cart: CartItem[],
  promoCode: string,
  shippingMethod: ShippingMethodId
): CartTotals {
  let itemCount = 0;
  let subtotal = 0;

  for (const item of cart) {
    const prod = getProductById(item.productId);
    if (!prod) continue;
    itemCount += item.quantity;
    subtotal += prod.price * item.quantity;
  }

  const normalizedPromo = promoCode.trim().toUpperCase() as keyof typeof STORE_INFO.promoCodes;
  const promoObj = STORE_INFO.promoCodes[normalizedPromo];
  const discountPercent = promoObj ? promoObj.percent : 0;
  const discount = Number(((subtotal * discountPercent) / 100).toFixed(2));
  const afterDiscount = Math.max(0, subtotal - discount);

  const shippingOption =
    SHIPPING_OPTIONS.find((o) => o.id === shippingMethod) ?? SHIPPING_OPTIONS[0];

  let shippingCost = 0;
  if (itemCount > 0) {
    if (shippingOption.id === "pickup") {
      shippingCost = 0;
    } else if (
      shippingOption.freeThreshold &&
      afterDiscount >= shippingOption.freeThreshold
    ) {
      shippingCost = 0;
    } else {
      shippingCost = shippingOption.price;
    }
  }

  const threshold = STORE_INFO.freeShippingThreshold;
  const freeShippingRemaining = Math.max(0, Number((threshold - afterDiscount).toFixed(2)));
  const freeShippingProgress = Math.min(100, Math.round((afterDiscount / threshold) * 100));

  const tax = itemCount > 0 ? Number((afterDiscount * 0.08).toFixed(2)) : 0;
  const total = Number((afterDiscount + shippingCost + tax).toFixed(2));

  return {
    itemCount,
    subtotal: Number(subtotal.toFixed(2)),
    discountPercent,
    discount,
    shippingCost: Number(shippingCost.toFixed(2)),
    freeShippingRemaining,
    freeShippingProgress,
    tax,
    total,
  };
}

interface PersistedSnapshot {
  cart: CartItem[];
  favourites: number[];
  orders: OrderRecord[];
  promoCode: string;
  shippingMethod: ShippingMethodId;
  customReviews: Record<number, ProductReview[]>;
}

const DEFAULT_SNAPSHOT: PersistedSnapshot = {
  cart: [],
  favourites: [],
  orders: [],
  promoCode: "",
  shippingMethod: "standard",
  customReviews: {},
};

let clientSnapshot: PersistedSnapshot | null = null;
const storeListeners = new Set<() => void>();
const emptySubscribe = () => () => {};

function readSnapshotFromStorage(): PersistedSnapshot {
  if (typeof window === "undefined") return DEFAULT_SNAPSHOT;
  try {
    const savedCart = localStorage.getItem(CART_KEY);
    const savedFavs = localStorage.getItem(FAV_KEY);
    const savedOrders = localStorage.getItem(ORDERS_KEY);
    const savedPromo = localStorage.getItem(PROMO_KEY);
    const savedShip = localStorage.getItem(SHIP_KEY);
    const savedReviews = localStorage.getItem(REVIEWS_KEY);

    return {
      cart: savedCart ? JSON.parse(savedCart) : [],
      favourites: savedFavs ? JSON.parse(savedFavs) : [],
      orders: savedOrders ? JSON.parse(savedOrders) : [],
      promoCode: savedPromo || "",
      shippingMethod:
        savedShip === "standard" || savedShip === "express" || savedShip === "pickup"
          ? savedShip
          : "standard",
      customReviews: savedReviews ? JSON.parse(savedReviews) : {},
    };
  } catch {
    return DEFAULT_SNAPSHOT;
  }
}

function getClientSnapshot(): PersistedSnapshot {
  if (clientSnapshot === null) {
    clientSnapshot = readSnapshotFromStorage();
  }
  return clientSnapshot;
}

function getServerSnapshot(): PersistedSnapshot {
  return DEFAULT_SNAPSHOT;
}

function subscribeStore(listener: () => void): () => void {
  storeListeners.add(listener);
  const handleStorage = (e: StorageEvent) => {
    if (
      e.key === null ||
      e.key === CART_KEY ||
      e.key === FAV_KEY ||
      e.key === ORDERS_KEY ||
      e.key === PROMO_KEY ||
      e.key === SHIP_KEY ||
      e.key === REVIEWS_KEY
    ) {
      clientSnapshot = readSnapshotFromStorage();
      storeListeners.forEach((l) => l());
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", handleStorage);
  }
  return () => {
    storeListeners.delete(listener);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

function writeSnapshotChanges(prev: PersistedSnapshot, next: PersistedSnapshot) {
  if (typeof window === "undefined") return;
  try {
    if (next.cart !== prev.cart) localStorage.setItem(CART_KEY, JSON.stringify(next.cart));
    if (next.favourites !== prev.favourites) {
      localStorage.setItem(FAV_KEY, JSON.stringify(next.favourites));
    }
    if (next.orders !== prev.orders) localStorage.setItem(ORDERS_KEY, JSON.stringify(next.orders));
    if (next.promoCode !== prev.promoCode) localStorage.setItem(PROMO_KEY, next.promoCode);
    if (next.shippingMethod !== prev.shippingMethod) {
      localStorage.setItem(SHIP_KEY, next.shippingMethod);
    }
    if (next.customReviews !== prev.customReviews) {
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(next.customReviews));
    }
  } catch {
    // Ignore storage quota or private browsing errors
  }
}

function updatePersistedStore(
  updater: (prev: PersistedSnapshot) => PersistedSnapshot
) {
  const prev = getClientSnapshot();
  const next = updater(prev);
  if (next === prev) return;
  clientSnapshot = next;
  writeSnapshotChanges(prev, next);
  storeListeners.forEach((l) => l());
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeStore,
    getClientSnapshot,
    getServerSnapshot
  );
  const hydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const {
    cart,
    favourites,
    orders,
    promoCode,
    shippingMethod,
    customReviews,
  } = snapshot;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const pushToast = useCallback(
    (toast: Omit<ToastMessage, "id">) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev.slice(-2), { ...toast, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3400);
    },
    []
  );

  const addToCart = useCallback(
    (product: Product, quantity = 1, variant?: string, openDrawer = false) => {
      const chosenVariant = variant || product.variants?.[0];
      updatePersistedStore((prev) => {
        const idx = prev.cart.findIndex(
          (i) => i.productId === product.id && i.variant === chosenVariant
        );
        if (idx > -1) {
          const nextCart = [...prev.cart];
          nextCart[idx] = {
            ...nextCart[idx],
            quantity: nextCart[idx].quantity + quantity,
          };
          return { ...prev, cart: nextCart };
        }
        return {
          ...prev,
          cart: [...prev.cart, { productId: product.id, quantity, variant: chosenVariant }],
        };
      });

      if (openDrawer) {
        setIsCartOpen(true);
      } else {
        pushToast({
          title: "Added to cart",
          description: `${quantity} x ${product.shortName}`,
          image: product.image,
          type: "cart",
        });
      }
    },
    [pushToast]
  );

  const updateQuantity = useCallback(
    (productId: number, quantity: number, variant?: string) => {
      if (quantity <= 0) {
        updatePersistedStore((prev) => ({
          ...prev,
          cart: prev.cart.filter(
            (i) => !(i.productId === productId && i.variant === variant)
          ),
        }));
        return;
      }
      updatePersistedStore((prev) => ({
        ...prev,
        cart: prev.cart.map((i) =>
          i.productId === productId && i.variant === variant
            ? { ...i, quantity: Math.min(99, quantity) }
            : i
        ),
      }));
    },
    []
  );

  const removeFromCart = useCallback((productId: number, variant?: string) => {
    updatePersistedStore((prev) => ({
      ...prev,
      cart: prev.cart.filter(
        (i) => !(i.productId === productId && i.variant === variant)
      ),
    }));
  }, []);

  const clearCart = useCallback(() => {
    updatePersistedStore((prev) => ({
      ...prev,
      cart: [],
      promoCode: "",
    }));
  }, []);

  const toggleFavourite = useCallback(
    (product: Product) => {
      let added = false;
      updatePersistedStore((prev) => {
        const exists = prev.favourites.includes(product.id);
        added = !exists;
        return {
          ...prev,
          favourites: exists
            ? prev.favourites.filter((id) => id !== product.id)
            : [...prev.favourites, product.id],
        };
      });
      pushToast({
        title: added ? "Saved to favourites" : "Removed from favourites",
        description: product.shortName,
        image: product.image,
        type: "fav",
      });
    },
    [pushToast]
  );

  const isFavourite = useCallback(
    (productId: number) => favourites.includes(productId),
    [favourites]
  );

  const applyPromoCode = useCallback((rawCode: string) => {
    const code = rawCode.trim().toUpperCase();
    if (!code) {
      return { ok: false, message: "Enter a promo code such as BETTER10 or WELCOME15." };
    }
    if (code in STORE_INFO.promoCodes) {
      updatePersistedStore((prev) => ({ ...prev, promoCode: code }));
      const details = STORE_INFO.promoCodes[code as keyof typeof STORE_INFO.promoCodes];
      return { ok: true, message: `Applied ${code}: ${details.label}` };
    }
    return {
      ok: false,
      message: "Invalid code. Try BETTER10 (10% off) or WELCOME15 (15% off).",
    };
  }, []);

  const clearPromoCode = useCallback(() => {
    updatePersistedStore((prev) => ({ ...prev, promoCode: "" }));
  }, []);

  const setShippingMethod = useCallback((method: ShippingMethodId) => {
    updatePersistedStore((prev) => ({ ...prev, shippingMethod: method }));
  }, []);

  const totals = useMemo(
    () => calculateCartTotals(cart, promoCode, shippingMethod),
    [cart, promoCode, shippingMethod]
  );

  const placeOrder = useCallback(
    (customer: OrderCustomer, paymentLast4: string): OrderRecord => {
      const orderNum = `EBB-${Math.floor(100000 + Math.random() * 900000)}`;
      const lineItems = cart
        .map((item) => {
          const prod = PRODUCTS.find((p) => p.id === item.productId);
          if (!prod) return null;
          return {
            productId: prod.id,
            slug: prod.slug,
            name: prod.name,
            image: prod.image,
            price: prod.price,
            quantity: item.quantity,
            variant: item.variant,
          };
        })
        .filter((x): x is NonNullable<typeof x> => x !== null);

      const etaMap: Record<ShippingMethodId, string> = {
        standard: "3 to 5 business days",
        express: "1 to 2 business days",
        pickup: "Today in 2 hours (Local Pickup)",
      };

      const newOrder: OrderRecord = {
        id: orderNum,
        createdAt: new Date().toISOString(),
        status: "Confirmed",
        customer,
        shippingMethod,
        estimatedDelivery: etaMap[shippingMethod],
        items: lineItems,
        subtotal: totals.subtotal,
        discount: totals.discount,
        promoCode: promoCode || undefined,
        shippingCost: totals.shippingCost,
        tax: totals.tax,
        total: totals.total,
        paymentLast4,
      };

      updatePersistedStore((prev) => ({
        ...prev,
        orders: [newOrder, ...prev.orders],
        cart: [],
        promoCode: "",
      }));
      return newOrder;
    },
    [cart, promoCode, shippingMethod, totals]
  );

  const getOrderById = useCallback(
    (id: string) => orders.find((o) => o.id === id),
    [orders]
  );

  const addReview = useCallback(
    (productId: number, review: Omit<ProductReview, "id" | "date" | "verified">) => {
      const fullReview: ProductReview = {
        ...review,
        id: `rev-user-${Date.now()}`,
        date: "Just now",
        verified: true,
      };
      updatePersistedStore((prev) => ({
        ...prev,
        customReviews: {
          ...prev.customReviews,
          [productId]: [fullReview, ...(prev.customReviews[productId] || [])],
        },
      }));
      pushToast({
        title: "Review published",
        description: "Thank you for sharing your feedback.",
        type: "success",
      });
    },
    [pushToast]
  );

  return (
    <StoreContext.Provider
      value={{
        cart,
        favourites,
        orders,
        promoCode,
        shippingMethod,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleFavourite,
        isFavourite,
        applyPromoCode,
        clearPromoCode,
        setShippingMethod,
        totals,
        placeOrder,
        getOrderById,
        toasts,
        dismissToast,
        pushToast,
        customReviews,
        addReview,
        hydrated,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore(): StoreContextValue {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error("useStore must be used inside StoreProvider");
  }
  return ctx;
}
