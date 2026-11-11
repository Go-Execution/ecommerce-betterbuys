export type CategorySlug =
  | "all"
  | "deals"
  | "fitness-and-gym"
  | "phone-case"
  | "home-and-kitchen"
  | "pet-supplies"
  | "garden-outdoor"
  | "bathroom-accessories";

export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  count: number;
  featuredImage: string;
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  categorySlug: Exclude<CategorySlug, "all" | "deals">;
  brand: string;
  image: string;
  studioImage: boolean;
  rating: number;
  reviewCount: number;
  topItem: boolean;
  spotlight?: boolean;
  inStock: boolean;
  pickupEligible: boolean;
  summary: string;
  highlights: string[];
  specs: ProductSpec[];
  variantLabel?: string;
  variants?: string[];
  reviews: ProductReview[];
}

export interface CartItem {
  productId: number;
  quantity: number;
  variant?: string;
}

export type ShippingMethodId = "standard" | "express" | "pickup";

export interface ShippingOption {
  id: ShippingMethodId;
  label: string;
  eta: string;
  price: number;
  freeThreshold?: number;
  description: string;
}

export interface OrderCustomer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  notes?: string;
}

export interface OrderLineItem {
  productId: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: string;
}

export interface OrderRecord {
  id: string;
  createdAt: string;
  status: "Confirmed" | "Preparing" | "Shipped" | "Delivered";
  customer: OrderCustomer;
  shippingMethod: ShippingMethodId;
  estimatedDelivery: string;
  items: OrderLineItem[];
  subtotal: number;
  discount: number;
  promoCode?: string;
  shippingCost: number;
  tax: number;
  total: number;
  paymentLast4: string;
}

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "newest";

export interface CatalogFilters {
  category: CategorySlug;
  search: string;
  priceMin: number;
  priceMax: number;
  minRating: number;
  brands: string[];
  delivery: "all" | "standard" | "pickup";
  sort: SortOption;
}
