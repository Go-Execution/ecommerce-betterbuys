import { CategoryInfo, Product, ShippingOption } from "@/types/store";

export const STORE_INFO = {
  brandName: "Ecommerce Better Buys",
  shortBrand: "Better Buys",
  owner: "Ecommerce Better Buys",
  legalName: "Ecommerce Better Buys LLC",
  address: "",
  email: "info@ecommercebetterbuys.com",
  altEmail: "support@ecommercebetterbuys.com",
  freeShippingThreshold: 50,
  promoCodes: {
    BETTER10: { percent: 10, label: "10% off your order" },
    WELCOME15: { percent: 15, label: "15% welcome discount" },
  },
} as const;

export const SHIPPING_OPTIONS: ShippingOption[] = [
  {
    id: "standard",
    label: "Standard Ground Shipping",
    eta: "3 to 5 business days",
    price: 5.95,
    freeThreshold: 50,
    description: "Free automatically on orders over $50.00",
  },
  {
    id: "express",
    label: "Express Priority 2-Day",
    eta: "1 to 2 business days",
    price: 12.95,
    description: "Tracked air & priority courier from New York",
  },
  {
    id: "pickup",
    label: "Local Warehouse Pickup",
    eta: "Ready in 2 hours",
    price: 0,
    description: "Free local pickup (details provided at confirmation)",
  },
];

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: "all",
    name: "All Categories",
    shortName: "All Products",
    description: "Browse every curated essential across fitness, tech, kitchen, pet care, home, and outdoor.",
    count: 31,
    featuredImage: "/images/products/1564.webp",
  },
  {
    slug: "deals",
    name: "Hot Deals",
    shortName: "Deals",
    description: "Limited-time markdowns on customer favorites across the store.",
    count: 9,
    featuredImage: "/images/products/1563.webp",
  },
  {
    slug: "fitness-and-gym",
    name: "Fitness & Gym",
    shortName: "Fitness & Gym",
    description: "Resistance bands, speed ropes, cooling towels, and daily hydration gear.",
    count: 4,
    featuredImage: "/images/products/1565.webp",
  },
  {
    slug: "phone-case",
    name: "Phone Cases & Charms",
    shortName: "Phone & Tech",
    description: "MagSafe drop-proof cases, kickstand armor, and Y2K beaded charms.",
    count: 6,
    featuredImage: "/images/products/1548.webp",
  },
  {
    slug: "home-and-kitchen",
    name: "Home & Kitchen",
    shortName: "Home & Kitchen",
    description: "Stone nonstick cookware, divided omelet pans, and glass spice organizers.",
    count: 4,
    featuredImage: "/images/products/1551.webp",
  },
  {
    slug: "pet-supplies",
    name: "Pet Supplies",
    shortName: "Pet Supplies",
    description: "Self-cleaning deshedding brushes, catnip toys, interactive balls, and furniture covers.",
    count: 9,
    featuredImage: "/images/products/1534.webp",
  },
  {
    slug: "garden-outdoor",
    name: "Garden & Outdoor",
    shortName: "Garden & Outdoor",
    description: "Solar garden decor, steel hand weeders, expandable leaf rakes, and misting bottles.",
    count: 4,
    featuredImage: "/images/products/1542.webp",
  },
  {
    slug: "bathroom-accessories",
    name: "Bathroom & Sink",
    shortName: "Bathroom",
    description: "Stainless pump soap dispensers, chenille bath mats, and sink caddies.",
    count: 4,
    featuredImage: "/images/products/1538.webp",
  },
];

export const PRODUCTS: Product[] = [
  {
    "id": 1567,
    "slug": "speed-jump-rope-with-foam-handles-for-fitness-workout",
    "name": "Speed Jump Rope with Foam Grip Handles",
    "shortName": "Speed Jump Rope",
    "price": 20,
    "category": "Fitness and Gym",
    "categorySlug": "fitness-and-gym",
    "brand": "Better Buys Fit",
    "image": "/images/products/1567.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 142,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "A fast, smooth jump rope for cardio at home, at the gym or outdoors. The foam handles are comfortable to hold through long sessions.",
    "highlights": [
      "Foam handles for a comfortable, secure grip",
      "Built for speed work, cardio and conditioning",
      "Light and compact, so it fits in a gym bag",
      "A simple way to get a real workout almost anywhere"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Fit"
      },
      {
        "label": "Category",
        "value": "Fitness and Gym"
      },
      {
        "label": "SKU",
        "value": "EBB-1567"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1567-1",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Speed Jump Rope with Foam Grip Handles. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1567-2",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1566,
    "slug": "4-pack-cooling-towels-40x12-microfiber-ice-towels-for-sports-gym",
    "name": "Cooling Towels, 4-Pack (40\" x 12\") for Gym, Sports & Hot Days",
    "shortName": "Cooling Towels, 4-Pack",
    "price": 25,
    "compareAtPrice": 34,
    "category": "Fitness and Gym",
    "categorySlug": "fitness-and-gym",
    "brand": "Better Buys Fit",
    "image": "/images/products/1566.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 189,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Wet it, wring it, wear it. These microfiber cooling towels help you stay comfortable during workouts, runs and summer yard work. You get four in the pack, so there's always a spare.",
    "highlights": [
      "4 towels per pack (40\" x 12\" each)",
      "Microfiber material, light and easy to carry",
      "Good for the gym, sports, hiking and outdoor work",
      "Share them with a workout partner or keep one in every bag"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Fit"
      },
      {
        "label": "Category",
        "value": "Fitness and Gym"
      },
      {
        "label": "SKU",
        "value": "EBB-1566"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Pack Colorway",
    "variants": [
      "4-Pack Cool Mix (Blue / Navy / Gray / Sage)"
    ],
    "reviews": [
      {
        "id": "rev-1566-1",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Cooling Towels, 4-Pack (40\" x 12\") for Gym, Sports & Hot Days. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1566-2",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1565,
    "slug": "32oz-bpa-free-water-bottle-with-straw-time-markers",
    "name": "32oz BPA-Free Water Bottle with Straw & Time Markers",
    "shortName": "32oz Water Bottle with Straw & Time Markers",
    "price": 25,
    "category": "Fitness and Gym",
    "categorySlug": "fitness-and-gym",
    "brand": "QLUR",
    "image": "/images/products/1565.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 234,
    "topItem": true,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Hit your daily water goal without thinking about it. The time markers show you how much to have sipped by each hour, and the straw makes it easy to drink on the go.",
    "highlights": [
      "32oz capacity, big enough to carry through your day",
      "Time markers keep you on track",
      "Straw lid for easy sipping at the gym or desk",
      "BPA-free"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "QLUR"
      },
      {
        "label": "Category",
        "value": "Fitness and Gym"
      },
      {
        "label": "SKU",
        "value": "EBB-1565"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Bottle Finish",
    "variants": [
      "Pink-Aqua Gradient (32oz)",
      "Sunset Coral (32oz)"
    ],
    "reviews": [
      {
        "id": "rev-1565-1",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the 32oz BPA. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1565-2",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1564,
    "slug": "pull-up-resistance-bands-set-for-training-and-exercise",
    "name": "Pull-Up Assist & Resistance Bands Set for Home Workouts",
    "shortName": "Pull-Up & Resistance Bands Set",
    "price": 40,
    "compareAtPrice": 54,
    "category": "Fitness and Gym",
    "categorySlug": "fitness-and-gym",
    "brand": "Better Buys Fit",
    "image": "/images/products/1564.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 312,
    "topItem": true,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A full set of bands for strength training, stretching and pull-up practice. Set up a complete workout at home without a pile of equipment.",
    "highlights": [
      "Multiple resistance levels in one set",
      "Works for pull-ups, strength moves and stretching",
      "Packs small, so it travels easily",
      "Suitable for beginners and experienced lifters"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Fit"
      },
      {
        "label": "Category",
        "value": "Fitness and Gym"
      },
      {
        "label": "SKU",
        "value": "EBB-1564"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Resistance Tier",
    "variants": [
      "Full 5-Band Kit (5-125 lbs)"
    ],
    "reviews": [
      {
        "id": "rev-1564-1",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Pull-Up Assist & Resistance Bands Set for Home Workouts. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1564-2",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1563,
    "slug": "iphone-16-pro-max-magsafe-case-13ft-drop-protection-hot-pink",
    "name": "iPhone 16 Pro Max MagSafe Case, 13ft Drop Protection, Hot Pink",
    "shortName": "iPhone 16 Pro Max MagSafe Case, Hot Pink",
    "price": 24,
    "compareAtPrice": 32,
    "category": "Phone Case",
    "categorySlug": "phone-case",
    "brand": "Newfuture",
    "image": "/images/products/1563.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 278,
    "topItem": true,
    "spotlight": true,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Bold hot pink on the outside, serious protection underneath. It's MagSafe compatible and rated for drops from up to 13ft.",
    "highlights": [
      "Fits iPhone 16 Pro Max",
      "MagSafe compatible for magnetic chargers and mounts",
      "13ft drop protection",
      "Hot pink finish"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Newfuture"
      },
      {
        "label": "Category",
        "value": "Phone Case"
      },
      {
        "label": "SKU",
        "value": "EBB-1563"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Color & Fit",
    "variants": [
      "Hot Pink (iPhone 16 Pro Max)",
      "Frosted Rose (iPhone 16 Pro Max)"
    ],
    "reviews": [
      {
        "id": "rev-1563-1",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the iPhone 16 Pro Max MagSafe Case. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1563-2",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1562,
    "slug": "iphone-14-hybrid-case-seashell-jellyfish-design",
    "name": "iPhone 14 Hybrid Case, Seashell Jellyfish Design",
    "shortName": "iPhone 14 Hybrid Case, Seashell Jellyfish",
    "price": 27,
    "category": "Phone Case",
    "categorySlug": "phone-case",
    "brand": "Better Buys Tech",
    "image": "/images/products/1562.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 96,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A hybrid case with a soft seashell and jellyfish design that stands out from plain black cases. It protects your iPhone 14 and adds some personality.",
    "highlights": [
      "Fits iPhone 14",
      "Hybrid construction for everyday protection",
      "Seashell jellyfish design",
      "A good gift for beach and ocean lovers"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Tech"
      },
      {
        "label": "Category",
        "value": "Phone Case"
      },
      {
        "label": "SKU",
        "value": "EBB-1562"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Pattern",
    "variants": [
      "East Coast Seashell Collage"
    ],
    "reviews": [
      {
        "id": "rev-1562-1",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the iPhone 14 Hybrid Case, Seashell Jellyfish Design. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1562-2",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1561,
    "slug": "royalhouse-6-pack-5-5-oz-plastic-spice-jars-with-shaker-lids-bpa-free",
    "name": "Spice Jars with Shaker Lids, 6-Pack (5.5oz, BPA-Free)",
    "shortName": "Plastic Spice Jars, 6-Pack",
    "price": 20,
    "category": "Home and Kitchen",
    "categorySlug": "home-and-kitchen",
    "brand": "RoyalHouse",
    "image": "/images/products/1561.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 118,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Get your spice drawer organized. Six jars with shaker lids let you refill from bulk bags and pour exactly what you need.",
    "highlights": [
      "6 jars, 5.5oz each",
      "Shaker lids for easy, controlled pouring",
      "BPA-free plastic",
      "Good for spices, rubs, herbs and baking mixes"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "RoyalHouse"
      },
      {
        "label": "Category",
        "value": "Home and Kitchen"
      },
      {
        "label": "SKU",
        "value": "EBB-1561"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1561-1",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the RoyalHouse 6. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1561-2",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1560,
    "slug": "fox-run-glass-spice-jar-with-shaker-lid-6-oz-1-pack",
    "name": "Glass Spice Jar with Shaker Lid, 6oz (Single Jar)",
    "shortName": "Glass Spice Jar, 6oz",
    "price": 20,
    "category": "Home and Kitchen",
    "categorySlug": "home-and-kitchen",
    "brand": "Fox Run",
    "image": "/images/products/1560.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 84,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A clear glass jar with a shaker lid for the spices you use most. You can see at a glance when it's running low.",
    "highlights": [
      "6oz glass jar with shaker lid",
      "Single jar, so buy as many as you need",
      "Clear glass lets you check contents quickly"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Fox Run"
      },
      {
        "label": "Category",
        "value": "Home and Kitchen"
      },
      {
        "label": "SKU",
        "value": "EBB-1560"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1560-1",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Glass Spice Jar with Shaker Lid, 6oz (Single Jar). Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1560-2",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1559,
    "slug": "depets-self-cleaning-slicker-brush-for-dogs-cats-deshedding-tool",
    "name": "Self-Cleaning Slicker Brush for Dogs & Cats, Deshedding Tool",
    "shortName": "Self-Cleaning Slicker Brush",
    "price": 18,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Depets",
    "image": "/images/products/1559.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 265,
    "topItem": true,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Brush away loose fur, then press a button to release it. The self-cleaning design makes grooming faster and a lot less messy.",
    "highlights": [
      "Works on dogs and cats",
      "Self-cleaning: no pulling fur off by hand",
      "Helps reduce shedding around the house",
      "Gentle, regular brushing keeps coats tidy"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Depets"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1559"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1559-1",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Depets Self. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1559-2",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1558,
    "slug": "luciphia-3-pack-soft-fleece-pet-blankets-for-dogs-cats-small",
    "name": "Soft Fleece Pet Blankets, 3-Pack (Small) for Dogs & Cats",
    "shortName": "Fleece Pet Blankets, 3-Pack, Small",
    "price": 20,
    "compareAtPrice": 28,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Luciphia",
    "image": "/images/products/1558.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 174,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Cozy fleece blankets for beds, crates and car seats. With three in the pack, you can wash one while another is in use.",
    "highlights": [
      "3 blankets per pack, small size",
      "Soft fleece for warmth and comfort",
      "Good for crates, beds, carriers and the car",
      "Ideal for puppies, kittens and small pets"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Luciphia"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1558"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Blanket Size",
    "variants": [
      "Small 3-Pack (23\" x 16\")",
      "Medium 3-Pack (30\" x 20\")"
    ],
    "reviews": [
      {
        "id": "rev-1558-1",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Luciphia 3. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1558-2",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1557,
    "slug": "ameritex-waterproof-dog-bed-cover-for-sofa-furniture-reversible",
    "name": "Waterproof Furniture Cover for Dogs, Reversible, for Sofas & Beds",
    "shortName": "Waterproof Dog Bed Cover",
    "price": 18,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Ameritex",
    "image": "/images/products/1557.webp",
    "studioImage": true,
    "rating": 4.6,
    "reviewCount": 91,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Let your dog on the couch without worrying about hair, spills or accidents. The reversible cover protects your furniture and washes easily.",
    "highlights": [
      "Waterproof protection for sofas and furniture",
      "Reversible, so you get two looks",
      "Helps keep hair and dirt off your upholstery"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Ameritex"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1557"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Reversible Tone",
    "variants": [
      "Slate Gray / Charcoal"
    ],
    "reviews": [
      {
        "id": "rev-1557-1",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Waterproof Furniture Cover for Dogs, Reversible, for Sofas & Beds. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1557-2",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1556,
    "slug": "self-cleaning-pet-brush-for-dogs-cats-black",
    "name": "Self-Cleaning Pet Grooming Brush, Black",
    "shortName": "Self-Cleaning Pet Brush, Black",
    "price": 20,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Depets",
    "image": "/images/products/1556.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 108,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A one-handed grooming brush that cleans itself. Great for the daily brush-down.",
    "highlights": [
      "For dogs and cats",
      "Self-cleaning design",
      "Black finish"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Depets"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1556"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1556-1",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Self. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1556-2",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1555,
    "slug": "pet-hair-remover-carpet-rake-for-dogs-cats",
    "name": "Pet Hair Remover Carpet Rake for Dogs & Cats",
    "shortName": "Pet Hair Remover Carpet Rake",
    "price": 20,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Better Buys Pet",
    "image": "/images/products/1555.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 156,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Pull stubborn pet hair out of carpets and rugs without a vacuum. It's a simple tool for a cleaner living room.",
    "highlights": [
      "Lifts pet hair from carpet and rugs",
      "No batteries or power needed",
      "Handy for quick touch-ups before guests arrive"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Pet"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1555"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1555-1",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Pet Hair Remover Carpet Rake for Dogs & Cats. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1555-2",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1554,
    "slug": "silvervine-catnip-toy-set-2pcs-for-cats",
    "name": "Silvervine Catnip Toys for Cats, 2-Piece Set",
    "shortName": "Silvervine Catnip Toy Set, 2-Piece",
    "price": 19,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Better Buys Pet",
    "image": "/images/products/1554.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 112,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Two toys for cats who need more play. Silvervine is a favorite for cats that aren't excited by catnip alone.",
    "highlights": [
      "2 toys per set",
      "Silvervine and catnip appeal",
      "Encourages play and activity for indoor cats"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Pet"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1554"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1554-1",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Silvervine Catnip Toys for Cats, 2-Piece Set. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1554-2",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1553,
    "slug": "squeaky-parrot-dog-toy-rope-plush-for-tug-chew",
    "name": "Squeaky Parrot Dog Toy, Rope Plush for Tug & Chew",
    "shortName": "Squeaky Parrot Dog Toy",
    "price": 24,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Better Buys Pet",
    "image": "/images/products/1553.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 139,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "A plush parrot with a squeaker and rope for tug-of-war and chewing. It gives your dog something fun to carry, shake and chase.",
    "highlights": [
      "Squeaker for extra excitement",
      "Rope and plush design for tug and chew",
      "Good for interactive play"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Pet"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1553"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1553-1",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Squeaky Parrot Dog Toy. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1553-2",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1552,
    "slug": "qdan-dog-soccer-ball-toy-with-straps-6-inch",
    "name": "Dog Soccer Ball Toy with Straps, 6-Inch",
    "shortName": "Dog Soccer Ball Toy, 6-Inch",
    "price": 21,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "QDAN",
    "image": "/images/products/1552.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 203,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A 6-inch ball with straps that is easy for dogs to grab and carry. Great for fetch, chasing and burning off energy.",
    "highlights": [
      "6-inch size",
      "Straps make it easy to carry and tug",
      "Good for fetch and outdoor play"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "QDAN"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1552"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1552-1",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the QDAN Dog Soccer Ball Toy with Straps (6. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1552-2",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1551,
    "slug": "jeetee-8-nonstick-stone-frying-pan-heat-resistant-handle",
    "name": "8\" Nonstick Stone Frying Pan with Heat-Resistant Handle",
    "shortName": "JEETEE 8\" Nonstick Stone Frying Pan",
    "price": 28,
    "compareAtPrice": 38,
    "category": "Home and Kitchen",
    "categorySlug": "home-and-kitchen",
    "brand": "JEETEE",
    "image": "/images/products/1551.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 287,
    "topItem": true,
    "spotlight": true,
    "inStock": true,
    "pickupEligible": true,
    "summary": "The right size for eggs, a single steak or a quick stir-fry. The nonstick stone surface cleans up easily, and the heat-resistant handle stays comfortable to hold.",
    "highlights": [
      "8\" cooking surface, ideal for one or two servings",
      "Nonstick stone coating for easy release and cleanup",
      "Heat-resistant handle",
      "Quick everyday cooking"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "JEETEE"
      },
      {
        "label": "Category",
        "value": "Home and Kitchen"
      },
      {
        "label": "SKU",
        "value": "EBB-1551"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Size",
    "variants": [
      "8-Inch Skillet",
      "10-Inch Skillet (+$0 Promo)"
    ],
    "reviews": [
      {
        "id": "rev-1551-1",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the JEETEE 8\" Nonstick Stone Frying Pan. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1551-2",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1550,
    "slug": "y2k-phone-charms-1-4pcs-cute-strawberry-star",
    "name": "Y2K Phone Charms, Strawberry & Star (Choose 1 to 4 Pieces)",
    "shortName": "Y2K Phone Charms, 1-4 Pieces",
    "price": 17,
    "category": "Phone Case",
    "categorySlug": "phone-case",
    "brand": "Ecally",
    "image": "/images/products/1550.webp",
    "studioImage": true,
    "rating": 4.6,
    "reviewCount": 74,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Dress up your phone with retro strawberry and star charms. Pick the number you want and mix them to your own style.",
    "highlights": [
      "Strawberry and star designs",
      "Choose 1, 2, 3 or 4 pieces",
      "Easy to attach to a phone or case",
      "A low-cost gift or stocking stuffer"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Ecally"
      },
      {
        "label": "Category",
        "value": "Phone Case"
      },
      {
        "label": "SKU",
        "value": "EBB-1550"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1550-1",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Y2K Phone Charms 1. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1550-2",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1549,
    "slug": "newfuture-iphone-16-pro-max-case-magsafe-shockproof-hot-pink",
    "name": "Shockproof iPhone 16 Pro Max Case with MagSafe, Hot Pink",
    "shortName": "Newfuture iPhone 16 Pro Max Case, Hot Pink",
    "price": 25,
    "category": "Phone Case",
    "categorySlug": "phone-case",
    "brand": "Newfuture",
    "image": "/images/products/1549.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 162,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "A shockproof, MagSafe-ready case that protects your phone and still looks great. Choose it if you want a bright color with solid everyday protection.",
    "highlights": [
      "Fits iPhone 16 Pro Max",
      "Shockproof design",
      "MagSafe compatible",
      "Hot pink finish"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Newfuture"
      },
      {
        "label": "Category",
        "value": "Phone Case"
      },
      {
        "label": "SKU",
        "value": "EBB-1549"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Edition",
    "variants": [
      "Hot Pink MagSafe"
    ],
    "reviews": [
      {
        "id": "rev-1549-1",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Newfuture iPhone 16 Pro Max Case. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1549-2",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1548,
    "slug": "sunstory-samsung-s24-s25-case-red-with-screen-protector-kickstand",
    "name": "Samsung Galaxy S24/S25 Case with Kickstand & Screen Protector, Red",
    "shortName": "SunStory Samsung S24/S25 Case, Red",
    "price": 25,
    "compareAtPrice": 34,
    "category": "Phone Case",
    "categorySlug": "phone-case",
    "brand": "SunStory",
    "image": "/images/products/1548.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 129,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Protection and extras in one purchase. The built-in kickstand props your phone up for video calls and movies, and the included screen protector shields the display.",
    "highlights": [
      "Fits Samsung S24/S25 (confirm exact model compatibility with your supplier)",
      "Built-in kickstand",
      "Screen protector included",
      "Red finish"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "SunStory"
      },
      {
        "label": "Category",
        "value": "Phone Case"
      },
      {
        "label": "SKU",
        "value": "EBB-1548"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Device Fit",
    "variants": [
      "Galaxy S24 / S25 (Crimson Red)"
    ],
    "reviews": [
      {
        "id": "rev-1548-1",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the SunStory Samsung S24/S25 Case. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1548-2",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1547,
    "slug": "dilabee-12oz-spray-bottles-3-pack-multi-purpose",
    "name": "12oz Spray Bottles, 3-Pack, Multi-Purpose",
    "shortName": "Spray Bottles, 3-Pack, 12oz",
    "price": 22,
    "category": "Garden & Outdoor",
    "categorySlug": "garden-outdoor",
    "brand": "DilaBee",
    "image": "/images/products/1547.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 147,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Three refillable spray bottles for cleaning, plants, laundry and everyday jobs. Label one for each use and you're set.",
    "highlights": [
      "3 bottles, 12oz each",
      "Multi-purpose: cleaning, misting plants, ironing and more",
      "Reusable and refillable"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "DilaBee"
      },
      {
        "label": "Category",
        "value": "Garden & Outdoor"
      },
      {
        "label": "SKU",
        "value": "EBB-1547"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1547-1",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the DilaBee 12oz Spray Bottles (3 Pack). Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1547-2",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1546,
    "slug": "weed-puller-tool-4-tooth-steel-hand-weeder",
    "name": "Hand Weeder, 4-Tooth Steel Weed Puller",
    "shortName": "4-Tooth Steel Hand Weeder",
    "price": 24,
    "category": "Garden & Outdoor",
    "categorySlug": "garden-outdoor",
    "brand": "Better Buys Yard",
    "image": "/images/products/1546.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 88,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Pull weeds out at the root without bending over a shovel. The 4-tooth steel head grips and lifts stubborn weeds from beds and lawns.",
    "highlights": [
      "4-tooth steel head",
      "Removes weeds by the root",
      "Good for flower beds, lawns and vegetable gardens"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Yard"
      },
      {
        "label": "Category",
        "value": "Garden & Outdoor"
      },
      {
        "label": "SKU",
        "value": "EBB-1546"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1546-1",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Weed Puller Tool. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1546-2",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1542,
    "slug": "leses-solar-turtle-garden-statue-7-led-lights-outdoor-decor",
    "name": "Solar Turtle Garden Statue with 7 LED Lights",
    "shortName": "Solar Turtle Garden Statue",
    "price": 27,
    "compareAtPrice": 36,
    "category": "Garden & Outdoor",
    "categorySlug": "garden-outdoor",
    "brand": "LESES",
    "image": "/images/products/1542.webp",
    "studioImage": false,
    "rating": 4.9,
    "reviewCount": 219,
    "topItem": true,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A little turtle that lights up your garden at night. It charges from the sun and needs no wiring.",
    "highlights": [
      "Solar powered, no wiring or batteries to replace",
      "7 LED lights",
      "Outdoor decor for gardens, patios and porches",
      "A good housewarming or Mother's Day gift"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "LESES"
      },
      {
        "label": "Category",
        "value": "Garden & Outdoor"
      },
      {
        "label": "SKU",
        "value": "EBB-1542"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1542-1",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the LESES Solar Turtle Garden Statue. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1542-2",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1541,
    "slug": "clear-soap-dispenser-2-pack-16oz-rustproof-pump",
    "name": "Clear Soap Dispensers, 2-Pack (16oz) with Rustproof Pump",
    "shortName": "Clear Soap Dispensers, 2-Pack, 16oz",
    "price": 20,
    "category": "Bathroom Accessories",
    "categorySlug": "bathroom-accessories",
    "brand": "Better Buys Home",
    "image": "/images/products/1541.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 152,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Two refillable dispensers for the kitchen and bathroom. The rustproof pump is meant to keep working for the long haul.",
    "highlights": [
      "2 dispensers, 16oz each",
      "Rustproof pump",
      "Clear, so you can see when to refill",
      "Works for hand soap, dish soap and lotion"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Home"
      },
      {
        "label": "Category",
        "value": "Bathroom Accessories"
      },
      {
        "label": "SKU",
        "value": "EBB-1541"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1541-1",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Clear Soap Dispenser 2. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1541-2",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1540,
    "slug": "14oz-glass-soap-dispenser-stainless-steel-pump-refillable",
    "name": "14oz Glass Soap Dispenser with Stainless Steel Pump, Refillable",
    "shortName": "14oz Glass Soap Dispenser",
    "price": 18,
    "category": "Bathroom Accessories",
    "categorySlug": "bathroom-accessories",
    "brand": "Better Buys Home",
    "image": "/images/products/1540.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 104,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A glass dispenser with a stainless steel pump that looks better on the counter than a store bottle. Fill it with your favorite soap or lotion.",
    "highlights": [
      "14oz glass bottle",
      "Stainless steel pump",
      "Refillable, which cuts down on plastic"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Home"
      },
      {
        "label": "Category",
        "value": "Bathroom Accessories"
      },
      {
        "label": "SKU",
        "value": "EBB-1540"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1540-1",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the 14oz Glass Soap Dispenser. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1540-2",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1539,
    "slug": "2026-kitchen-soap-dispenser-13oz-with-sponge",
    "name": "Kitchen Soap Dispenser with Sponge Holder, 13oz",
    "shortName": "Kitchen Soap Dispenser with Sponge, 13oz",
    "price": 20,
    "category": "Bathroom Accessories",
    "categorySlug": "bathroom-accessories",
    "brand": "LIFEEZY",
    "image": "/images/products/1539.webp",
    "studioImage": true,
    "rating": 4.6,
    "reviewCount": 95,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Keep dish soap and a sponge together at the sink. Pump out what you need and have your scrubber ready.",
    "highlights": [
      "13oz capacity",
      "Sponge included",
      "Keeps the sink area tidy"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "LIFEEZY"
      },
      {
        "label": "Category",
        "value": "Bathroom Accessories"
      },
      {
        "label": "SKU",
        "value": "EBB-1539"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1539-1",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Kitchen Soap Dispenser with Sponge Holder, 13oz. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1539-2",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1538,
    "slug": "freshmint-chenille-bath-mat-24x17-non-slip",
    "name": "Soft Chenille Bath Mat, 24\" x 17\", Non-Slip",
    "shortName": "Chenille Bath Mat, 24\" x 17\"",
    "price": 25,
    "compareAtPrice": 33,
    "category": "Bathroom Accessories",
    "categorySlug": "bathroom-accessories",
    "brand": "FRESHMINT",
    "image": "/images/products/1538.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 246,
    "topItem": true,
    "inStock": true,
    "pickupEligible": false,
    "summary": "A plush chenille mat that feels good under wet feet. The non-slip backing helps it stay put on the floor.",
    "highlights": [
      "24\" x 17\"",
      "Soft chenille surface",
      "Non-slip backing",
      "Easy to refresh in the wash (confirm care instructions with your supplier)"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "FRESHMINT"
      },
      {
        "label": "Category",
        "value": "Bathroom Accessories"
      },
      {
        "label": "SKU",
        "value": "EBB-1538"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "variantLabel": "Color",
    "variants": [
      "Spa Sky Blue (24\" x 17\")"
    ],
    "reviews": [
      {
        "id": "rev-1538-1",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the FRESHMINT Chenille Bath Mat 24\"x17\". Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1538-2",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1537,
    "slug": "adjustable-metal-leaf-rake-8-17-heavy-duty-garden-tool",
    "name": "Adjustable Metal Leaf Rake (8\"-17\"), Heavy Duty",
    "shortName": "Adjustable Metal Leaf Rake",
    "price": 35,
    "compareAtPrice": 46,
    "category": "Garden & Outdoor",
    "categorySlug": "garden-outdoor",
    "brand": "Better Buys Yard",
    "image": "/images/products/1537.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 131,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Adjust the width for open lawns or tight garden beds. It's a sturdy metal rake for fall cleanup.",
    "highlights": [
      "Adjustable from 8\" to 17\"",
      "Heavy-duty metal construction",
      "Works in open areas and tight spaces"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Better Buys Yard"
      },
      {
        "label": "Category",
        "value": "Garden & Outdoor"
      },
      {
        "label": "SKU",
        "value": "EBB-1537"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1537-1",
        "author": "Devon K.",
        "location": "Kingston, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Adjustable Metal Leaf Rake 8. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1537-2",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1536,
    "slug": "ecally-3-pcs-cute-phone-camera-charms",
    "name": "Cute Phone & Camera Charms, 3-Piece Set",
    "shortName": "Phone & Camera Charms, 3-Piece Set",
    "price": 17,
    "category": "Phone Case",
    "categorySlug": "phone-case",
    "brand": "Ecally",
    "image": "/images/products/1536.webp",
    "studioImage": true,
    "rating": 4.7,
    "reviewCount": 68,
    "topItem": false,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Three cute charms for your phone, camera or bag. A small touch that makes your gear easier to spot and more fun to carry.",
    "highlights": [
      "3 charms per set",
      "Works on phones, cameras and bags",
      "Lightweight and easy to attach",
      "Pairs well with a new phone case"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Ecally"
      },
      {
        "label": "Category",
        "value": "Phone Case"
      },
      {
        "label": "SKU",
        "value": "EBB-1536"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1536-1",
        "author": "Chloe W.",
        "location": "Saratoga, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Ecally 3. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1536-2",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1535,
    "slug": "four-cup-non-stick-egg-pan-divided-omelet-pan",
    "name": "Four-Cup Non-Stick Egg Pan, Divided Omelet Pan",
    "shortName": "Four-Cup Non-Stick Egg Pan",
    "price": 25,
    "category": "Home and Kitchen",
    "categorySlug": "home-and-kitchen",
    "brand": "JEETEE",
    "image": "/images/products/1535.webp",
    "studioImage": true,
    "rating": 4.8,
    "reviewCount": 178,
    "topItem": false,
    "inStock": true,
    "pickupEligible": true,
    "summary": "Make four eggs at once, with no mixing and no mess. Each cup keeps its own portion, so you can cook breakfast for the whole family in one go.",
    "highlights": [
      "4 separate cups, each cooked individually",
      "Non-stick surface for easy release",
      "Good for fried eggs, mini omelets and pancakes",
      "Saves time on busy mornings"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "JEETEE"
      },
      {
        "label": "Category",
        "value": "Home and Kitchen"
      },
      {
        "label": "SKU",
        "value": "EBB-1535"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1535-1",
        "author": "Noah P.",
        "location": "Poughkeepsie, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Four. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1535-2",
        "author": "Marcus T.",
        "location": "Albany, NY",
        "rating": 4,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  },
  {
    "id": 1534,
    "slug": "potaroma-3-pack-catnip-fish-toys",
    "name": "Catnip Fish Toys for Cats, 3-Pack",
    "shortName": "Catnip Fish Toys, 3-Pack",
    "price": 21,
    "category": "Pet Supplies",
    "categorySlug": "pet-supplies",
    "brand": "Potaroma",
    "image": "/images/products/1534.webp",
    "studioImage": true,
    "rating": 4.9,
    "reviewCount": 254,
    "topItem": true,
    "inStock": true,
    "pickupEligible": false,
    "summary": "Three fish-shaped catnip toys for chasing, kicking and carrying around. Rotate them to keep playtime interesting.",
    "highlights": [
      "3 fish toys in the pack",
      "Filled for catnip fun",
      "Good for solo play or play with you"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Potaroma"
      },
      {
        "label": "Category",
        "value": "Pet Supplies"
      },
      {
        "label": "SKU",
        "value": "EBB-1534"
      },
      {
        "label": "Fulfillment",
        "value": "Ships within 24h with Tracking"
      },
      {
        "label": "Return Policy",
        "value": "30-Day Hassle-Free Guarantee"
      }
    ],
    "reviews": [
      {
        "id": "rev-1534-1",
        "author": "Hannah M.",
        "location": "New York, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Potaroma 3. Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1534-2",
        "author": "Elena R.",
        "location": "Brooklyn, NY",
        "rating": 5,
        "date": "September 2026",
        "title": "Great everyday value for the price",
        "body": "Works exactly as described and looks great in daily use. Would happily buy from Ecommerce Better Buys again.",
        "verified": true
      }
    ]
  }
];

export const ALL_BRANDS: string[] = Array.from(
  new Set(PRODUCTS.map((p) => p.brand))
).sort((a, b) => a.localeCompare(b));

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  );
  const others = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug !== product.categorySlug
  );
  return [...sameCategory, ...others].slice(0, limit);
}
