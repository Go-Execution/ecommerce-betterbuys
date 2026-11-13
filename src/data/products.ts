import { CategoryInfo, Product, ShippingOption } from "@/types/store";

export const STORE_INFO = {
  brandName: "Ecommerce Better Buys",
  shortBrand: "Better Buys",
  owner: "Joseph Casanova",
  legalName: "Ecommerce Better Buys LLC",
  address: "900 Route 23A, Catskill, NY 12414",
  email: "info@ecommercebetterbuys.com",
  altEmail: "casanovajoseph74@yahoo.com",
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
    label: "Catskill Warehouse Pickup",
    eta: "Ready in 2 hours",
    price: 0,
    description: "900 Route 23A, Catskill, NY 12414",
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
    "name": "Speed Jump Rope with Foam Handles for Fitness & Workout",
    "shortName": "Speed Jump Rope with Foam Handles",
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
    "summary": "Durable & Adjustable Rope: This jump rope is made of steel wires that are coated with strong PVC material, making it durable even after a long time exercising. Its adjustable length design enables you to customize the length according to your needs, making it suitable for everyone, no matter for kids or adults.",
    "highlights": [
      "Durable & Adjustable Rope: This jump rope is made of steel wires that are coated with strong PVC material, making it durable even after a long time exercising. Its adjustable length design enables you to customize the length according to your needs, making it suitable for everyone, no matter for kids or adults.",
      "Jump Fast, Jump Easily: Built-in with high-quality ball bearings, the skipping rope provides you with comfortable jump exercises. It supports fast jumps while protecting you from any potential tangles, satisfying your needs for safety and convenience at the same time.",
      "Ergonomic Foam Handles: The ergonomic handles are well designed for your safety and convenience: they are covered with soft sponges, which makes the handles comfortable to hold. And the non-slip & moisture-wicking features also keep your palms dry, making your every exercise comfortable and safe!",
      "Get Fitness Anytime & Anywhere: No matter you’re women or men, kids or adults, beginner or an experienced person, you can start jumping ropes anytime and anywhere. It’s easy and efficient, and it helps to strengthen your body, lose weight, and increase stamina.",
      "Portable & Easy to Carry: You can easily carry jump ropes for fitness with you. Put it in your pocket and jump rope for workout with it when needed, it’s that convenient. We are also happy to serve you! If you have any questions, please contact us and we’ll give a satisfying solution."
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
        "rating": 5,
        "date": "October 2026",
        "title": "Arrived fast and exceeded expectations",
        "body": "Super pleased with the Speed Jump Rope with Foam Handles for Fitness & Workout. Build quality feels solid right out of the box and shipping from NY was quick.",
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
    "name": "4 Pack Cooling Towels (40\"x12\"), Microfiber Ice Towels for Sports & Gym",
    "shortName": "4-Pack Cooling Ice Towels (40\"x12\")",
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
    "summary": "Microfiber",
    "highlights": [
      "Microfiber",
      "Our Cooling towel is made of microfiber hyper-evaporative breathable material, it has a soft feel , is super absorbent and breathable. This towel is a physical cooling by the evaporation of water molecules.",
      "Cooling towel is different from simple towel, which makes you feel cool and comfortable for several hours and provides 50 UPF sunscreen protection",
      "Cooling towel quickly cools down by just soaking, wringing the water out .The magical cooling effect can last up to several hours and easy to reactivate it by repeating the same steps.",
      "Cooling towels is also perfect for hot flashes, fever or headache therapy, heatstroke prevention and for all who wants to keep cool during their outdoor adventures. It could be a great sports towel for running, cycling, workout, bowling, golf, yoga, gym, fitness, cold therapy for fever. Cooling towel will help to reduce a high temperature for all outdoor activities, such as gardening, golf, camping, climbing, fishing, hunting, hiking, Jogging, etc",
      "39\"x11\" Snap Cooling Towel perfect around your neck as a scarf, headband or bandana and it can fold into a small, portable pouch and very easy to carry. The package contains four different colors: Blue/dark blue/gray/green"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "body": "Super pleased with the 4 Pack Cooling Towels (40\"x12\"), Microfiber Ice Towels for Sports & Gym. Build quality feels solid right out of the box and shipping from NY was quick.",
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
    "shortName": "32oz Motivational Water Bottle",
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
    "summary": "Motivational Time Marker: QLUR 32 oz Water Bottles as your daily partner is designed with motivational quotes by the hour, it keeps your daily water intake on track. The inspirational water bottle helps you stay hydrated throughout the day",
    "highlights": [
      "Motivational Time Marker: QLUR 32 oz Water Bottles as your daily partner is designed with motivational quotes by the hour, it keeps your daily water intake on track. The inspirational water bottle helps you stay hydrated throughout the day",
      "BPA Free & Non-toxic: The reusable water bottles is made of food grade Tritan material-100% BPA free and non-toxic. The high quality tritan water bottles can keep your safty. Sports water bottle does not generate odour, chemical or unpleasant taste",
      "Easily Open & Leakproof: Our motivational water bottles flip-top lid is designed with a secure lock, which effectively preventing dust and leak-proof. It can be easily opened with one hand. Our sports water bottles for school has a silicone nozzle with a straw inside to prevent turbulent water flow",
      "Portable Fashion Design: Our 32 oz water bottles is equipped with straw and a carry strap. And you also have a variety of colors to choose from. The wide mouth is easy to fit ice cubes and easy to clean . The clean brush coming with the water bottle is also a great cleaning partner",
      "Idea Gifts: As a BPA-Free water bottles with time marker, we come with a cleaning brush and nice packaging. It's really a great gift for your families and friends as an excellent choice for fitness, gym, running, hiking, cycling, camping, and any other indoor or outdoor sports activities",
      "Warm Tips: We recommend that you read the instructions carefully before use, if you have any questions, please contact us. we will respond the first time"
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Pull Up & Resistance Bands Set for Training and Exercise",
    "shortName": "Pull Up & Resistance Bands Set",
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
    "summary": "100% Natural Latex",
    "highlights": [
      "100% Natural Latex",
      "Natural and Durable: Our pull up assistance bands are made of 100% natural latex from Malaysia, which makes WSAKOUE resistance bands soft and odorless. The resistance bands can remain high elastic after years of training and exercising",
      "Multifunctional for Workout: Adding resistance and weight to your workout with the workout bands makes exercise more effective. These exercise bands is ideal for pull up assistance, adding resistances to press-up, speed training, bench press, squat, shoulder press etc",
      "For All Strength Level: With different strength levels, these exercise bands will help you upgrade your fitness training from a newbie to a veteran. These fitness bands can be used alone or combined multiple workout bands to increase the challenge. Start now and build your dream body",
      "A Set Train Different Parts of Body: The gym bands is perfect for men and women tone their arms, back, legs, and butt, chest, core, ABS and increase your body flexibility. Our stretch bands also show their excellent performance in physical therapy, weight loss, injury rehabilitation, speed training and more",
      "Your Movable Gym: You can wrap up the fitness resistance bands kit in the drawstring bag or put the pull up assist weight bands in your handbag and exercise everywhere. These training bands are your good partner in pilates, Mobility, Powerlifting, Chin ups, Yoga, Stretching and calisthenics"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "body": "Super pleased with the Pull Up & Resistance Bands Set for Training and Exercise. Build quality feels solid right out of the box and shipping from NY was quick.",
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
    "name": "iPhone 16 Pro Max MagSafe Case - 13ft Drop Protection (Hot Pink)",
    "shortName": "iPhone 16 Pro Max MagSafe Case",
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
    "summary": "ATTENTION:Only Compatible with iPhone 16 Pro Max 6.9 inch\"",
    "highlights": [
      "ATTENTION:Only Compatible with iPhone 16 Pro Max 6.9 inch\"",
      "Powerful & Upgrade MagnetWith 38 pieces of upgraded N52 magnets, the phone case for iPhone 16 Pro Max magnetic strength is 2X stronger than others. It allows for fast charging speed and provides strong and secure connections with magnetic accessories such as wallets, chargers, car mounts, etc. Meanwhile, it won't damage and decrease the phone's longevity",
      "Inside & Outside Double Shields DesignFor the outside, we remain 1.5mm raised screen lips and a 1.5mm raised camera bezel to prevent scratches. For the inside, Newfuture goes the extra mile the inside of edges and a 360°air cushion inside of the camera bumpers. Based on 5000+ extreme 13ft drop resistance tests, It protects your phone sufficiently from all drops, collisions, and shocks without any damage",
      "Anti-Scratch & Anti-FingerprintReferring to the ergonomic design, the aesthetic case is compatible with iPhone 16 Pro Max, it wraps seamlessly around your phone, at the same time stop dust from entering and scratching the body of your phone.effectively prevents fingerprints and stains, In addition, to help you to hold it reliably and to keep it comfortable and grippy enough for confident one-handed use",
      "Metal Camera Frame & ButtonsThis magnetic case for iPhone 16 Pro Max adopts frosted translucent back panel and TPU frame, skin-friendly material and comfortable grip. What's more, the camera frame is made of high quality metal material, and the buttons are designed in metal frosted. It not only provides a stylish look, but also is durable",
      "Perfect Fit & Lifetime ReplacementNewfuture regards every customer as the treasure of our brand Please keep us informed timely by messaging us through the Ecommerce Better Buys Support for any issues. Please keep talking with us until we solve your problems instead of leaving us alone. You have a lifetime replacement or refund for any quality problems and don't hesitate to contact us"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "iPhone 14 Hybrid Case (Seashell Jellyfish Design)",
    "shortName": "iPhone 14 Hybrid Seashell Case",
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
    "summary": "hybrid 2-layer phone case is made of scratch resistant material, with a TPU silicone inner layer and a sturdy military grade PC shell providing unparalleled shock absorption, durability, and strong defense against scratches, breakage, and damage.",
    "highlights": [
      "hybrid 2-layer phone case is made of scratch resistant material, with a TPU silicone inner layer and a sturdy military grade PC shell providing unparalleled shock absorption, durability, and strong defense against scratches, breakage, and damage.",
      "hybrid 2-layer phone case can make your phone look brand new, and come with customized high-quality high-definition prints that won't fade.",
      "You will definitely like to show off our phone case because it is not only beautiful, but also very comfortable, with a non slip grip.",
      "You choose your favorite from our numerous designs, matching your unique personality and taste.",
      "Exquisite phone cases are the perfect gift for holidays and can bring you a great life experience."
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
        "value": "Ships within 24h from Catskill, NY"
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
        "body": "Super pleased with the iPhone 14 Hybrid Case (Seashell Jellyfish Design). Build quality feels solid right out of the box and shipping from NY was quick.",
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
    "name": "RoyalHouse 6-Pack 5.5 oz Plastic Spice Jars with Shaker Lids (BPA Free)",
    "shortName": "RoyalHouse 6-Pack Spice Jars",
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
    "summary": "Premium Quality: Our plastic spice containers are made of high-quality plastic, durable and lightweight, and not easily broken.",
    "highlights": [
      "Premium Quality: Our plastic spice containers are made of high-quality plastic, durable and lightweight, and not easily broken.",
      "Multi-Purpose: Our clear plastic jars are perfect for storing dried spices, salt, peppers, seasonings, herb blends, powder, glitter, bath salts, crafts, etc.",
      "Good Design: Clear and transparent containers allow you to see the inside clearly and easily identify what it is.",
      "Easy to Use: The lids of our spice jars are two-sided flip tops for shaking or pouring spices. There is a removable internal seal under the lid of the jar to keep the product fresh and delicious.",
      "Value Set: The package includes 6 pieces of 5.5oz plastic spice jars with black screw lids to meet your daily needs."
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "Fox Run Glass Spice Jar with Shaker Lid, 6 oz (1 Pack)",
    "shortName": "Fox Run 6oz Glass Spice Jar",
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
    "summary": "CLASSIC CLEAR GLASS JAR DESIGN: This classic style seasoning shaker is made of durable clear glass with a stainless steel lid to allow easy identification of kitchen spices and seasoning blends for cooking",
    "highlights": [
      "CLASSIC CLEAR GLASS JAR DESIGN: This classic style seasoning shaker is made of durable clear glass with a stainless steel lid to allow easy identification of kitchen spices and seasoning blends for cooking",
      "GLASS SPICE JAR WITH STAINLESS STEEL LID: Includes rotating shaker feature to allow easy open and close action for dispensing spices through shaker holes; screw-on lid for tight seal then rotate top for easy dispensing",
      "LARGE 6-OUNCE CAPACITY SPICE SHAKER stores ample portions of salt, pepper, cinnamon, sugar, garlic or onion powder, as well homemade seasoning blends and BBQ rub, making it the perfect shaker for seasonings",
      "SHAKE OR POUR WITH EASE! This glass shaker for spices will keep moisture out for longer lasting freshness; fill empty seasoning jar with BBQ rub, steak seasoning, seafood spice or other spice blends",
      "EASY CARE: Top rack dishwasher safe, or hand wash and towel dry - Individual shaker jar with lid measures: 2 x 2 x 5 inches and holds approximately 6 oz or 180 ml"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "body": "Super pleased with the Fox Run Glass Spice Jar with Shaker Lid, 6 oz (1 Pack). Build quality feels solid right out of the box and shipping from NY was quick.",
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
    "name": "Depets Self-Cleaning Slicker Brush for Dogs & Cats - Deshedding Tool",
    "shortName": "Depets Self-Cleaning Slicker Brush",
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
    "summary": "Clean Pets, Clean House: Depets cat & dog brush for shedding can easily remove loose hair, shedding mats, dander and dirt of your pet, which not only keep your pet clean, but also provide you with a clean and hygienic home environment",
    "highlights": [
      "Clean Pets, Clean House: Depets cat & dog brush for shedding can easily remove loose hair, shedding mats, dander and dirt of your pet, which not only keep your pet clean, but also provide you with a clean and hygienic home environment",
      "Great Brush, Healthy Pets: The cat grooming brush with round beads can do massage for pets and prevent scratching. The stainless steel needles of dog brush are designed with a 60 degree bend to better reach pet's skin and promote blood circulation",
      "One-click Cleaning Button: Cat brush with release button, you just have to simply push the button and the hair will be super simple removed from the cat hair brush. And our dog grooming brush is washable, which can be kept in clean",
      "Comfortable and Nonslip Handle: Our cat shedding brush is designed with a comfort-grip and nonslip handle, and this self cleaning cat brush also has a massage function for your hand and you won't get tired easily when you brush your pet",
      "Enjoyable Brushing Experience: Grooming your pet can promote bonding with your pet. Our pet brush is suitable for long-haired or short-haired pets (non-applicable types: curly-haired, wire-haired, hairless pets). With Depets dog and cat shedding brush, your beloved pet will enjoy the time of grooming"
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Luciphia 3-Pack Soft Fleece Pet Blankets for Dogs & Cats (Small)",
    "shortName": "Luciphia 3-Pack Fleece Pet Blankets",
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
    "summary": "Multiple Size OptionEach small/medium/large pack includes 3 identical covers. Small (23\"x16\") for cats/kittens/tiny pups; Medium (30\"x20\") for medium dogs/adult cats; Large (41\"x31\") for larger breeds.",
    "highlights": [
      "Multiple Size OptionEach small/medium/large pack includes 3 identical covers. Small (23\"x16\") for cats/kittens/tiny pups; Medium (30\"x20\") for medium dogs/adult cats; Large (41\"x31\") for larger breeds. Stock up for home, crate, and travel-3 blankets mean you always have a clean, cozy option handy. This value pack of pet essentials beats single-blanket buys by far!",
      "Double-Sided Coral Velvet Warm Material100% premium polyester coral velvet textures, plush, fluffy, and soft as a baby blanket. Gentle on sensitive skin (no irritation), stays silky-smooth with daily use-no shedding or pilling. Delivers long-lasting warmth, making it a top pick among puppy supplies for discerning pet parents.",
      "Durable & Easy to Clean100% machine washable (toss with like colors!) & dryer safe, quick-drying. Resists chewing, minor spills, and heavy shedding-holds up wash after wash without shrinking, fading, or loss of softness. Tough enough for pets, easy enough for busy pet parents to keep clean!",
      "Furniture ProtectionAdorable paw print design adds a playful touch to any room. Shields couches, sofas, beds, and pet carriers from scratching and pet hair-puppy essentials for new fur babies. Keeps your furniture looking sharp while giving your pet a dedicated cozy spot. Skin-friendly and pet-approved-win-win for you and your furry companion!",
      "Portable & Outdoor-FriendlyLightweight and compact, these 3 identical blankets fold up small for easy storage in your bag or car. Ideal for outdoor activities like traveling, camping, picnics, or vet visits. Keeps your pet warm, snug, and secure outdoors. This 3-pack also makes a thoughtful gift for fellow pet lovers!"
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Ameritex Waterproof Dog Bed Cover for Sofa & Furniture (Reversible)",
    "shortName": "Ameritex Waterproof Dog Sofa Cover",
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
    "summary": "Reversible quilted sofa protector shield with waterproof inner membrane to guard couches and sectionals from spills, muddy paws, and pet hair.",
    "highlights": [
      "Reversible quilted sofa protector shield with waterproof inner membrane to guard couches and sectionals from spills, muddy paws, and pet hair.",
      "Machine-washable microfiber fabric stays soft for pets while keeping upholstery crisp and dry.",
      "Non-slip stitched texture drapes cleanly over loveseats, recliners, and standard sofas."
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
        "value": "Ships within 24h from Catskill, NY"
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
        "body": "Super pleased with the Ameritex Waterproof Dog Bed Cover for Sofa & Furniture (Reversible). Build quality feels solid right out of the box and shipping from NY was quick.",
        "verified": true
      },
      {
        "id": "rev-1557-2",
        "author": "Hannah M.",
        "location": "Hudson Valley, NY",
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
    "name": "Self-Cleaning Pet Brush for Dogs & Cats (Black)",
    "shortName": "Self-Cleaning Pet Grooming Brush",
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
    "summary": "Easy Desheding Brush: THe self cleaning dog brush for long haired dogs and short haired dogs with release bottom helps effortlessly reduce shedding. It's the one cat brush for indoor cats you must have, cat brush for shedding, slicker brush for dogs and horses.",
    "highlights": [
      "Easy Desheding Brush: THe self cleaning dog brush for long haired dogs and short haired dogs with release bottom helps effortlessly reduce shedding. It's the one cat brush for indoor cats you must have, cat brush for shedding, slicker brush for dogs and horses.",
      "Skin Friendly: Soft and protective plastic round head bristles won't scratch you lovely pet while deshedding. No irrataion puppy brush for small dogs, dog brush for shedding and grooming.",
      "Sturdy & Durable: Made of premium stainless steel metal and comfortable rubber, this dog brush cat brush ensure the sturdiness and durability for long term use.",
      "Ergonomic Design: Easy cleaning press button and high-quality & lightweight TPR handle make your deshedding job done a breeze.",
      "Efficient to Remove Loose Fur: This Pet grooming brush is efficient to remove loose fur, suitable for dogs, cat with long and short hair, perfect for your lovely pet like horses, golden retriever, rabbit, kitten, bunny, yokie and more."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "summary": "Widely Use:2 Types Reusable Pet Hair Remover for Different Materials - Copper pet hair remover be used for heavy duty and thick piled items, such as carpet, rug, couch, furniture, blanket, cat tree, car interiors, winter coats and etc. Plastic fabric shaver can be used for soft and thin fabrics, like upholstery, ottoman, velvet, bed sheet, sweatshirt and etc",
    "highlights": [
      "Widely Use:2 Types Reusable Pet Hair Remover for Different Materials - Copper pet hair remover be used for heavy duty and thick piled items, such as carpet, rug, couch, furniture, blanket, cat tree, car interiors, winter coats and etc. Plastic fabric shaver can be used for soft and thin fabrics, like upholstery, ottoman, velvet, bed sheet, sweatshirt and etc",
      "Easy to use: This Pet Hair Remover can quickly shave and refresh old fabrics. Will not damage the fabric, this Pet Hair Remover remove pilling and fluff from sweaters, curtains, carpets, upholstery, etc",
      "Keep Elegant:This lint shaver Restores your clothes and fabrics to a fresh new look. The Lint Cleaner Pro Easily remove fabric fluff, fuzz, pill, lint and bobbles from all types of clothes and fabric, Such as sweaters, sofa, curtain, blankets, bedsheets, furniture and so on",
      "Superior Quality:The fabric shaver easily removes pet hair, bread crumbs, lint, etc., The Lint Remover is very suitable for washing clothes, bedding, furniture and car interiors. Plastic Lint Shaver with 3 Lines of Brushes and Flat Edge - Smooth plastic teeth, won't snag fabrics or clothes. All together, this lint cleaner can safely and efficiently remove dog & cat hair, furs, fuzz, pills, and hairball from the sweater, blankets, curtains, jackets and more",
      "Environmental protection:Unlike battery-powered electric hair removal machines, this sweater shaver no longer wastes batteries because this lint roller for pet hair cannot provide strong power continuously and can be operated manually, which is simple and convenient"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "Silvervine Catnip Toy Set (2Pcs) for Cats",
    "shortName": "Silvervine Catnip Chew Toy Set",
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
    "summary": "100%Natural Silvervine (also known as Mtatabi) plant, harvested from the jungles of Southeast Asia, combined with wild catnip and hand-woven. 100% natural, no additives and preservatives, safe for pets.",
    "highlights": [
      "100%Natural Silvervine (also known as Mtatabi) plant, harvested from the jungles of Southeast Asia, combined with wild catnip and hand-woven. 100% natural, no additives and preservatives, safe for pets.",
      "For dental healthSilvervine sticks lead cats healthy chewing behavior, help cats grow permanent teeth, and effectively eliminate plaque and tartar during chewing, fresh breath, protect oral health, make you and your pet closer.",
      "Correcting bad habits, regulate moodThe combination of silvervine stick, catnip ball and bell ball will make cats more interest compared to other cat toys. So that the cat will no longer be lazy and sullen since then, and helps redirect destructive behavior to keep your furniture from being destroy.",
      "Promote digestion, recyclingBoth silvervine stick and catnip can improve cat’s digestive system, thus increase cat’s appetite. The skin on the silvervine stick will fall off and deteriorate after chewing, just use a knife to peel off the skin after a period of time to turn It into a brand new silvervine catnip ball, which can be recycled without wasting.",
      "100%PET CRAFT PROMISEGochanmon is committed to creating healthy pet toys .The product test result shown that 80% of cats, kittens and adult dogs love this SilverVine Catnip Ball toy. If your pet happens to be uninterested in the SilverVine Catnip Ball or contact us if you have any questions and we will do our best to help you！"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "body": "Super pleased with the Silvervine Catnip Toy Set (2Pcs) for Cats. Build quality feels solid right out of the box and shipping from NY was quick.",
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
    "name": "Squeaky Parrot Dog Toy - Rope Plush for Tug & Chew",
    "shortName": "Squeaky Parrot Rope Dog Toy",
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
    "summary": "ENTERTAINING SQUEAKER: The built-in squeaker inside the parrot's body captures your dog's attention instantly and satisfies their natural curiosity, keeping them engaged and entertained for hours of interactive fun.",
    "highlights": [
      "ENTERTAINING SQUEAKER: The built-in squeaker inside the parrot's body captures your dog's attention instantly and satisfies their natural curiosity, keeping them engaged and entertained for hours of interactive fun.",
      "INTERACTIVE ROPE WINGS: Features unique, durable rope wings instead of standard plush, creating perfect handles for an exciting game of tug-of-war. Perfect for strengthening the bond between you and your furry friend.",
      "DUAL STIMULATION: This toy brilliantly combines the enticing sound of a squeaker with the physical engagement of a tug toy, providing both mental and physical exercise to help combat boredom and reduce destructive behavior.",
      "SOFT & DURABLE CONSTRUCTION: Crafted from gentle, pet-safe plush material with strong stitching. It's soft on your dog's mouth yet designed to withstand regular play, making it an ideal and safe indoor toy.",
      "THE BEST KIND OF GIFT: The joy of watching your pup pounce and play is worth everything. We make that unforgettable experience surprisingly affordable."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "QDAN Dog Soccer Ball Toy with Straps (6-Inch)",
    "shortName": "QDAN Dog Soccer Ball with Straps",
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
    "summary": "New Chicken Dog Toys: Unlike regular soccer balls for dogs, our new-design dog ball toy is more colorful, your dog will love this ball at first sight, let your dog interact with our ball in a natural way, as if playing with a new \"friend\", inspire your dog's enthusiasm. Choose the right size for your dog for a better experience: 20-40LBS choose medium dog ball toys, 40-90LBS choose large soccer ball toys",
    "highlights": [
      "New Chicken Dog Toys: Unlike regular soccer balls for dogs, our new-design dog ball toy is more colorful, your dog will love this ball at first sight, let your dog interact with our ball in a natural way, as if playing with a new \"friend\", inspire your dog's enthusiasm. Choose the right size for your dog for a better experience: 20-40LBS choose medium dog ball toys, 40-90LBS choose large soccer ball toys",
      "Why Choose Our Dog Balls: Outdoor dog toys can help your dog release energy, enhance intelligence, and relieve loneliness. Watching your dog chasing, running, playing, reduce boredom, improve your dog's physical fitness, thereby improving their physical fitness and endurance",
      "Interactive Dog Ball with Straps: Dog soccer ball with straps sewn evenly into the seams not only create an erratic bounce that your dogs love to chase, but also make it easier for your dogs to fetch, toss, tug and retrieve. There's a longer strap for you to hold the ball, making it a great interactive dog toy to train your dogs",
      "QDAN Dog Christmas Gifts: the balls for dogs can be played in the living room, pool, lake and beach, because it is also Water Toys Ball, no water absorption, no seepage, no deformation, lightweight, easy to float in water.",
      "ATTENTION: This is a pet toy and not a chew toy. Always supervise your pet during use. Remove and discard any damaged or loose pieces to prevent choking or accidental ingestion. Please contact us if you happen to have any questions. A team of experts to solve any dog ball problem for you"
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "JEETEE 8\" Nonstick Stone Frying Pan - Heat-Resistant Handle",
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
    "summary": "Health & Safe Nonstick CoatingOur Marble stone non-stick coating outperforms traditional nonstick pots and pans surfaces. Independently certified 100% free from PFOA/PFOS/lead/cadmium and other harmful chemicals, ensuring your daily cooking is always safer and healthier",
    "highlights": [
      "Health & Safe Nonstick CoatingOur Marble stone non-stick coating outperforms traditional nonstick pots and pans surfaces. Independently certified 100% free from PFOA/PFOS/lead/cadmium and other harmful chemicals, ensuring your daily cooking is always safer and healthier",
      "Super Easy To CleanOur non-stick frying pan cleans up in seconds, the eco-friendly coating makes cleaning a breeze, wipe it with a paper towel or rinse it with a little water. Hand washing is recommended to maintain coating longevity",
      "Professional Grade PerformanceEngineered with a reinforced aluminum core, our frying pan delivers restaurant-quality results. Seamless mold technology for even heat distribution, can withstand 464°F, and prevents food trapping",
      "Compatible For All StovesHigh magnetic conductive reinforced base allows our nonstick skillet to work on all cooktops, including induction. The pan's bottom is flat and thick, heats up quickly and evenly",
      "Stay-Cool Heat-resistant HandleThe light wood grain color bakelite handle is soft and comfortable to hold, remains cool while cooking. The sturdy handle also provides a hole for hanging when not in use",
      "Cook on medium or low heat to make your pan last longer"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "Y2K Phone Charms 1-4PCS - Cute Strawberry & Star",
    "shortName": "Y2K Strawberry & Star Phone Charms",
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
    "summary": "Excellent Y2K design phone charms straps, easy to install and super cut",
    "highlights": [
      "Excellent Y2K design phone charms straps, easy to install and super cut",
      "High Quality Material, these decorative phone charm straps are made of quality alloy and acrylic, durable and firm, shiny and pretty. Can be easily fixed on.",
      "The cute cellphone charms are also fit for iPad, airpods, purse, keychain, cameras, handbags, USB disk, work card, car key ring, wallet, tag, backpack, daily pendant, ID card, tablet computer, bike pendant, bookmarks, bracelets, jewelry accessories, etc.",
      "Very special and practical lovely phone charms gifts for your family members, friends and loved ones. It is a great daily accessory for matching with aesthetic to highlight the youthful atmosphere."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Newfuture iPhone 16 Pro Max Case - MagSafe, Shockproof, Hot Pink",
    "shortName": "Newfuture iPhone 16 Pro Max Case",
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
    "summary": "ATTENTION:Only Compatible with iPhone 16 Pro Max 6.9 inch\"",
    "highlights": [
      "ATTENTION:Only Compatible with iPhone 16 Pro Max 6.9 inch\"",
      "Powerful & Upgrade MagnetWith 38 pieces of upgraded N52 magnets, the phone case for iPhone 16 Pro Max magnetic strength is 2X stronger than others. It allows for fast charging speed and provides strong and secure connections with magnetic accessories such as wallets, chargers, car mounts, etc. Meanwhile, it won't damage and decrease the phone's longevity",
      "Inside & Outside Double Shields DesignFor the outside, we remain 1.5mm raised screen lips and a 1.5mm raised camera bezel to prevent scratches. For the inside, Newfuture goes the extra mile the inside of edges and a 360°air cushion inside of the camera bumpers. Based on 5000+ extreme 13ft drop resistance tests, It protects your phone sufficiently from all drops, collisions, and shocks without any damage",
      "Anti-Scratch & Anti-FingerprintReferring to the ergonomic design, the aesthetic case is compatible with iPhone 16 Pro Max, it wraps seamlessly around your phone, at the same time stop dust from entering and scratching the body of your phone.effectively prevents fingerprints and stains, In addition, to help you to hold it reliably and to keep it comfortable and grippy enough for confident one-handed use",
      "Metal Camera Frame & ButtonsThis magnetic case for iPhone 16 Pro Max adopts frosted translucent back panel and TPU frame, skin-friendly material and comfortable grip. What's more, the camera frame is made of high quality metal material, and the buttons are designed in metal frosted. It not only provides a stylish look, but also is durable",
      "Perfect Fit & Lifetime ReplacementNewfuture regards every customer as the treasure of our brand Please keep us informed timely by messaging us through the Ecommerce Better Buys Support for any issues. Please keep talking with us until we solve your problems instead of leaving us alone. You have a lifetime replacement or refund for any quality problems and don't hesitate to contact us"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "SunStory Samsung S24/S25 Case - Red with Screen Protector & Kickstand",
    "shortName": "SunStory S24/S25 Armor Case",
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
    "summary": "Only Compatible with Samsung Galaxy S24 / S25 PhoneNot for Galaxy S25 Plus Phone or Galaxy S25 ultra PhoneProvide free soft screen protectors and install them according to the instructions. Note thatwireless charging is not supported!",
    "highlights": [
      "Only Compatible with Samsung Galaxy S24 / S25 PhoneNot for Galaxy S25 Plus Phone or Galaxy S25 ultra PhoneProvide free soft screen protectors and install them according to the instructions. Note thatwireless charging is not supported!",
      "Camera Lens ProtectionThis phone case use lens slide design, it easy to slide and not to loose, and enhance protective of your phone camera from scratches, collision, scuffs and impact, not only improve safety, protect your privacy but also has a sense of fashion.",
      "360° Rotable Magnetic KickstandAdvanced Ring Metal kickstand can rotate 360°, easy to rotate and sturdy on the phone case. Built in kickstand gives you the convenience to watch videos and movies hands-free with desired comfort and stability.",
      "Full Body ProtectionThe phone case is made of anti-scratch hard rigid PC bumper and shock resistance soft TPU, with Air-Cushion Technology for all corners and the raised TPU bezel design, provide all around double protection of your phone from drops, scratches and bumps.",
      "High Quality after Sales ServiceWe are committed to producing high-quality products, If you come across any issues while using the product, please feel free to reach out to us.we will provide you with the most reasonable solution."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "DilaBee 12oz Spray Bottles (3 Pack) - Multi-Purpose",
    "shortName": "DilaBee 12oz Misting Bottles (3-Pack)",
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
    "summary": "Vibrant Multicolor Bottle Spray This 3-pack of stylish 12 oz (355ml) hair water spray bottles comes in three vibrant colors: blue, pink, and purple. Designed to add a cheerful touch while offering practicality, each bottle measures 3.2 inches wide and 7.5 inches tall, fitting comfortably in your hand.",
    "highlights": [
      "Vibrant Multicolor Bottle Spray This 3-pack of stylish 12 oz (355ml) hair water spray bottles comes in three vibrant colors: blue, pink, and purple. Designed to add a cheerful touch while offering practicality, each bottle measures 3.2 inches wide and 7.5 inches tall, fitting comfortably in your hand. Stay organized and brighten your routine with these functional and fun spray bottles!",
      "Built to Last Our BPA-free PET plastic spray bottle are your ultimate, long-lasting solution! Designed to be chemical-resistant and leak-proof, these robust spray bottles for cleaning feature an adjustable nozzle that seamlessly transitions from a fine mist to a powerful stream. Perfect sprayer bottle for all your spraying needs!",
      "Versatile Empty Spray Bottle The perfect companion for every task! These bottle sprayer handle cleaning solutions, watering plants, hair care, liquid cleaners, alcohol, bleach, fertilizers, and more. Plus, they're food grade spray bottle, making them ideal for BBQ smoking, cooking, and beyond!",
      "Conserve with Ease Discover the ultimate tool for efficiency and organization with these versatile mini spray bottles. This water bottle spray is ideal for even dispensing, helping you breeze through chores more quickly and efficiently.. Whether you're cleaning, watering plants, or managing household tasks, these hair spray bottles ensure precise application, saving you time and effort.",
      "Easy to Clean Spray Water Bottle Keep your water spray bottles for plants in top shape with simple handwashing! Although they are not dishwasher safe, a quick rinse before reuse, followed by a thorough wash with soap, will ensure they're spotless and ready for action. This easy cleaning routine washes away any residue, leaving your heavy duty spray bottles fresh and clean for your next use. Enjoy the convenience of always having clean, ready-to-use refillable spray bottle for all your needs!"
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Weed Puller Tool - 4-Tooth Steel Hand Weeder",
    "shortName": "4-Tooth Steel Hand Weed Puller",
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
    "summary": "Uprooting Weeding Tool: Handle weeding and digging tasks with ease. This hollow designed lightweight uprooting weeding tool is labor-saving and much convenient.",
    "highlights": [
      "Uprooting Weeding Tool: Handle weeding and digging tasks with ease. This hollow designed lightweight uprooting weeding tool is labor-saving and much convenient. Perfect helper for agricultural work such as weeding, digging, shoveling grass for orchards and gardens. No need to pull those pesky weeds by hands!",
      "Practical Weed Pulling Tool: 16 inches lengthen weeder tool. It is the perfect length for a weed puller. Use electroplated and polished craftsmanship, the durable handle is more comfortable to hold, which is better than other weeder in the market.",
      "4-Tine Weeder: The 4 tines can easily loosen the soil to the bottom of the grass、plant vegetables 、 fruits and flower pots. At the same time, you do not have to squat or get your hands dirty, just let the weed puller help with the daily basic home gardening work.",
      "Durable Material: The four-tooth uprooting weeding tool is made of high-quality anti-rust manganese steel, with high hardness and durability. The 8 mm steel bars has high impact resistance and tensile strength, not easy to deform or break. The polished surface is non-stick.",
      "Multi-Functional: Great for prying thistles, dandelions, crabgrass, chickweed and common garden weeds. Also suitable for growing flowers and vegetables to make your garden beautiful. Package including 2 Pcs of weed puller tools"
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "LESES Solar Turtle Garden Statue - 7 LED Lights Outdoor Decor",
    "shortName": "LESES Solar Turtle Garden Statue",
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
    "summary": "Turtle Garden Statue - This turtle resin statue with solar-powered lights and is beautifully adorned with succulent plant ornaments, it feels like a really cute smile turtle living in the garden. It adds more energy and color to your house and garden",
    "highlights": [
      "Turtle Garden Statue - This turtle resin statue with solar-powered lights and is beautifully adorned with succulent plant ornaments, it feels like a really cute smile turtle living in the garden. It adds more energy and color to your house and garden",
      "Solar Powered - No wires required! This decorative outdoor figurines is equipped with 7 warm - white LED lights and is powered by the sun. If fully charged during the day, it can work for about 5-10 hours at night. Auto turns on at dusk and off at dawn",
      "Weather Resistance - This turtle figurines made of resin material, hand-painted and finished with a UV resistant coating. This construction enables it to withstand all kinds of weather conditions. Product Size: 8.7 \"L x 5 \"W x 6 \"H",
      "Easy To Use - Always keep the turtle solar statue's switch \"ON\" during charging, remove the protective film from the solar panel, make sure the solar panel can receive at least 8 hours full and direct sunshine each day for optimal performance",
      "Great Garden Decor - Add charm to your outdoor space with our solar lawn ornament, perfect for patio accents, or a delightful turtle collection. Brighten everyday moments or share heartfelt appreciation with its effortless solar-powered beauty, day or night. A thoughtful way to enhance any home or garden"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "Clear Soap Dispenser 2-Pack (16oz) - Rustproof Pump",
    "shortName": "Clear Pump Soap Dispenser (2-Pack)",
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
    "summary": "Elegant Bathroom Soap Dispenser with Waterproof Labels: Stylish gorgeous looking hand soap dispenser, functional and aesthetically pleasing. This soap dispenser features easy pressing, durable and practical, Use this as Kitchen Soap Dispenser Or Fill It With Lotion as a Farmhouse Style and Practical Bathroom Decor.",
    "highlights": [
      "Elegant Bathroom Soap Dispenser with Waterproof Labels: Stylish gorgeous looking hand soap dispenser, functional and aesthetically pleasing. This soap dispenser features easy pressing, durable and practical, Use this as Kitchen Soap Dispenser Or Fill It With Lotion as a Farmhouse Style and Practical Bathroom Decor. Beautiful accessory of your home, make your house neat, organized and stylish. Two elegant high-end labels included, Hand Soap, Dish Soap, durable and waterproof for daily use.",
      "Superior Quality: Made of High-Quality Thick PET plastic, Heavy Duty and Durable, Won't break, natural and safe to fill with all kinds of daily use liquids. Reusable and recyclable clear pump bottles lets you see the content clearly and reminds you to replenish. With BPA-free smooth pump head, the Sturdy Pump Can Kept Long Lasting Bright That Not Easy Corrode Or Rust. The Sleek design round bottle is dishwasher safe and reusable.",
      "No-Leaking Pump: The pump enables you to put out a good amount of soap with a single pump. No leaking or dripping. Sturdy enough not easy corrode or rust. Dish Soap Dispenser Size: 8.7\"x3.0\". Volume: 16.9 OZ.",
      "MULTI-PURPOSE: Use the beautiful soap dispenser for hand soap, dish soap, lotion, shampoo, body wash, mouthwash, hand sanitizer, massage oil, food ingredients and much more. It can be placed in any countertops, bathroom, kitchen, or office. Dispenser Pump Bottle holds 16.9 Ounce Of Liquid Soap. Reusable and refillable, Eco-friendly green, money-saving."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "14oz Glass Soap Dispenser - Stainless Steel Pump, Refillable",
    "shortName": "14oz Glass Pump Soap Dispenser",
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
    "summary": "Stylish Design : Simple and functional aesthetic of the Soap Dispenser makes your kitchen and bathroom countertop looks elegant and modern.",
    "highlights": [
      "Stylish Design : Simple and functional aesthetic of the Soap Dispenser makes your kitchen and bathroom countertop looks elegant and modern.",
      "Material：The soap dispenser bottle is made of high-quality glass, the pump head is made of high quality 304 stainless steel, Let you say goodbye to the trouble of rust.and use it with confidence.",
      "Versatile: This soap dispenser can hold hand soap, body wash, shampoo, lotion and many other liquids for kitchens, bathrooms and other places.",
      "Perfect Size : This soap dispenser measures 7” Height，2.8” IN Diameter and is capable of holding 14 ounces of liquid.",
      "Excellent service : In case of any unhappiness during your purchase, we offer you a satisfaction-guaranteed after-sale service. Please contact us through the order page, we'll reply to you within 12 hours and solve your problem with 48 hours!"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "2026 Kitchen Soap Dispenser 13oz with Sponge",
    "shortName": "13oz Kitchen Soap Pump & Caddy",
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
    "summary": "Effortless Dispensing with Large Quantity - Dispenses soap easily, holds up to 13 oz of fluid. Liquid soap dispenser for Kitchen sink.",
    "highlights": [
      "Effortless Dispensing with Large Quantity - Dispenses soap easily, holds up to 13 oz of fluid. Liquid soap dispenser for Kitchen sink.",
      "Spend Less Time Washing Up - Reduce the time you spend at the kitchen sink by using LIFEEZY Effortless soap dispenser which allows you to wash dishes faster.",
      "Eliminate Sink Clutter - No more messy spills, dripping, or trailing! Kitchen soap dispenser with attached caddy holds sponges, scrubbers, rags, scouring pads in one convenient place while keeping water off kitchen counters. We've included this beautiful Christmas tree for holding sponges and rags so that it gets dry quickly",
      "Save Time and Soap - Dispense the perfect amount of soap onto the sponge every time. Can help reduce wasted soap as you can always use a considered amount. Works with all kinds of liquid soaps",
      "Quality & Service Satisfaction: We always take quality and service as our business philosophy, we believe you will like our products, if you have any questions please contact us, we will give you a satisfactory compensation within 24 hours!"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "body": "Super pleased with the 2026 Kitchen Soap Dispenser 13oz with Sponge. Build quality feels solid right out of the box and shipping from NY was quick.",
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
    "name": "FRESHMINT Chenille Bath Mat 24\"x17\" - Non-Slip",
    "shortName": "FRESHMINT Chenille Bath Mat 24\"x17\"",
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
    "summary": "1.2-Inch Fluffy Chenille Pile - Experience unmatched softness and comfort with our bathroom rugs made of 1.2-inch ultra soft chenille pile. Thicker than other bath mats in the market, our chenille bath mat features the coziest, softest chenille fabric you have ever seen.",
    "highlights": [
      "1.2-Inch Fluffy Chenille Pile - Experience unmatched softness and comfort with our bathroom rugs made of 1.2-inch ultra soft chenille pile. Thicker than other bath mats in the market, our chenille bath mat features the coziest, softest chenille fabric you have ever seen.",
      "Soft & Comfortable - Indulge in unparalleled comfort with our luxurious bath mat. Made from high-pile chenille, it envelops your feet in soothing softness, providing a heavenly experience after every bath. No more stepping onto hard, cold floors-our bath rug pampers you with its plush and cozy feel.",
      "Ultra Absorbent & Quick Dry - Experience exceptional water absorption with our premium bath rugs. The thick chenille yarn efficiently wicks away moisture, leaving your feet dry and comfortable in a matter of seconds. Enjoy the convenience of a fast-drying bath rug that enhances your daily routine.",
      "Non-slip Backing - Safety is paramount, especially in the bathroom. Our chenille bathroom mat features a hot-glue anti-slip backing that ensures stability and prevents slips and falls. It provides secure footing on any surface, giving you peace of mind for your family's safety.",
      "Easycare & Built to Last - Made from top-quality materials and crafted with the utmost care, our bath mats for bathroom are built to last and provide unbeatable comfort and durability, even after repeated washing. Maintenance is a breeze with our bath mat, simply machine wash on gently in cold water, then tumble dry low."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Adjustable Metal Leaf Rake 8-17\" - Heavy Duty Garden Tool",
    "shortName": "Adjustable Heavy-Duty Leaf Rake",
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
    "summary": "Heavy duty 1\" diameter expandable metal rake for leaves painted black to prevent rusting and bending under heavy use.",
    "highlights": [
      "Heavy duty 1\" diameter expandable metal rake for leaves painted black to prevent rusting and bending under heavy use.",
      "8\" small rake head is designed for raking pine straw in tight spots and it does the trick to het leaves out from around small shrubs or flower beds.",
      "17\" wider rake head makes heavy raking in your backyard easier and will rake the tall grass in the orchard even on the uneven ground.",
      "30-58 inch Long Handle adjustable rake allows people of all heights to use comfortably. Handle comes in multiple pieces with center poles.",
      "1 mins to assemble collapsible rake by screwing poles together with no extra tools required and easy to carry for camping."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Ecally 3-Pcs Cute Phone & Camera Charms",
    "shortName": "Ecally Cute Phone & Camera Charms",
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
    "summary": "Trendy Styles: with these chic phone charms, no phone will ever look dull again; The charm comes in a beautiful white color, making it an elegant accessory that brings out its y2k aesthetic vintage; The ideal way to express your individuality and style, it's an enhancement every phone deserves",
    "highlights": [
      "Trendy Styles: with these chic phone charms, no phone will ever look dull again; The charm comes in a beautiful white color, making it an elegant accessory that brings out its y2k aesthetic vintage; The ideal way to express your individuality and style, it's an enhancement every phone deserves",
      "Wide Range of Use: the charms for phone case aren't just for phones; The universal compatibility and design of the beaded phone strap means you can use it on a plethora of items like shoulder bags, cameras, wallets, keychains, ID cards, U disks, car keys, and other lightweight electronic accessories in need of that distinct and glittering touch",
      "Quality Materials: you don't just get style, you also get durability with these phone accessories charms; Made with faux pearl, acrylic beads, polymer clay, and a robust nylon rope, your phone charms will not only look elegant but last the test of time and daily use",
      "Security and Decorative: to misplace or lose your phone can be a nightmare, but with our phone beaded wrist strap, you can help avert this disaster; Just attach it to your phone strap or case, and it becomes an easily identifiable part of your phone; And it's not only practical, its decorative design makes your device more elegant",
      "Ideal Gift Idea: if you are struggling with what to give on birthdays, anniversaries, graduations, or holidays such as Thanksgiving, Valentine's Day or Mother's Day, the cute phone charm is the solution; With its appealing look, practical use, and wide range of applications, it's a gift that won't be easily forgotten"
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
    "name": "Four-Cup Non-Stick Egg Pan - Divided Omelet Pan",
    "shortName": "Four-Cup Nonstick Divided Egg Pan",
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
    "summary": "Made of medical stone, which is non-stick and non-burnt, and has the abrasion resistance of 35W times. Fried eggs without oily smoke!",
    "highlights": [
      "Made of medical stone, which is non-stick and non-burnt, and has the abrasion resistance of 35W times. Fried eggs without oily smoke!",
      "Medical stone Egg Pan got the certifications of FDA, SGS and LFGB, so you can safely cook healthy food.",
      "The egg pan can work well on gas stove, electric stove or induction stove. Dishwasher safe!",
      "The egg pan is 7.5 inches in length and width, 1 inch in height, and each cup is 3.6 inches. Including the handle, the total length is 14 inches.",
      "note: Our screws are included in the product. Please check carefully. If the screws are damaged, please contact us at any time."
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
        "value": "Ships within 24h from Catskill, NY"
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
    "name": "Potaroma 3-Pack Catnip Fish Toys",
    "shortName": "Potaroma 3-Pack Catnip Fish Toys",
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
    "summary": "Cozy Companion: Our catnip fish kicker toys are all made of soft plush material and baby-level cotton, soft and comfortable enough for your feline friends to snuggle and chew.",
    "highlights": [
      "Cozy Companion: Our catnip fish kicker toys are all made of soft plush material and baby-level cotton, soft and comfortable enough for your feline friends to snuggle and chew.",
      "Organic Catnip Filled: Stuffed with 100% pure, potent and organic catnip. Catnip, the favorite natural herb of most cats, will maximize the chance to make cats excited and make interactive playtime irresistible.",
      "Boredom Relief: Cats have a natural instinct to pat and pounce. Kitten kicker sticks toy can help cats chase and chew training and stimulate their hunting instincts, help cats grow up better and healthier, and strengthen the interaction between you and cats.",
      "Perfect Gift: In 3 different colors, green, yellow, and orange, which are bright in colors, attracting the attention of your feline friends. Perfect for kittens to hold or scratch",
      "We stand behind each product we sell. If any issue, please contact our customer service and we'll do anything possible to fix it."
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
        "value": "Ships within 24h from Catskill, NY"
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
        "location": "Hudson Valley, NY",
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
