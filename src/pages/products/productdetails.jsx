import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();

  const [selectedImage, setSelectedImage] =
    useState(0);
  const [selectedSize, setSelectedSize] =
    useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] =
    useState(false);
  const [addedToCart, setAddedToCart] =
    useState(false);
  const [buyMessage, setBuyMessage] =
    useState("");

  const seaBackground =
    "https://img.freepik.com/premium-photo/banner-summer-background-with-white-sand-seashell-starfish-beach_756748-104227.jpg?w=2000";

  /* ==========================================================
     START FROM TOP WHEN OPENING / CHANGING PRODUCT
  ========================================================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [productId]);

  /* ==========================================================
     PRODUCT DATA
  ========================================================== */

  const products = [
    {
      id: 1,
      slug: "ocean-pearl-necklace",
      name: "Ocean Pearl Necklace",
      category: "everyday",
      price: 2499,
      oldPrice: 2999,
      rating: 4.9,
      reviews: 128,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "BESTSELLER",
      images: [
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1617038260897-41a31f74343d?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A delicate pearl necklace inspired by the calm beauty of the ocean. Finished with a warm golden chain and a luminous central pearl.",
      details:
        "Every pearl is selected for its soft natural glow and subtle character. Designed to sit beautifully against the neckline, this piece brings a quiet coastal elegance to everyday styling.",
    },

    {
      id: 2,
      slug: "shell-drop-earrings",
      name: "Shell Drop Earrings",
      category: "everyday",
      price: 1899,
      oldPrice: 2299,
      rating: 4.8,
      reviews: 96,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium"],
      badge: "LOVED",
      images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1588444650733-d876b1f2d4c4?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "Elegant drop earrings shaped by the softness of seashells and finished with freshwater pearls for an effortless coastal glow.",
      details:
        "Inspired by shells found along quiet beaches, these earrings combine an organic silhouette with soft pearl detailing.",
    },

    {
      id: 3,
      slug: "pearl-tide-ring",
      name: "Pearl Tide Ring",
      category: "everyday",
      price: 1699,
      oldPrice: 1999,
      rating: 4.8,
      reviews: 112,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "POPULAR",
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1627293509201-cd1e10e8a2e1?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A graceful open ring accented with luminous pearls, inspired by shells resting along the shoreline.",
      details:
        "The gently curved silhouette mirrors the movement of ocean waves and gives the pearl a floating appearance.",
    },

    {
      id: 4,
      slug: "coastal-charm-bracelet",
      name: "Coastal Charm Bracelet",
      category: "everyday",
      price: 2299,
      oldPrice: 2699,
      rating: 4.7,
      reviews: 88,
      material: "Stainless Steel",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "",
      images: [
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A fine bracelet carrying subtle ocean-inspired charms, designed to layer beautifully with your everyday pieces.",
      details:
        "Small coastal charms create movement and texture while the polished chain keeps the piece refined.",
    },

    {
      id: 5,
      slug: "moonlight-pearl-set",
      name: "Moonlight Pearl Set",
      category: "festive",
      price: 4499,
      oldPrice: 5499,
      rating: 4.9,
      reviews: 74,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Medium"],
      badge: "NEW",
      images: [
        "https://images.unsplash.com/photo-1617038260897-41a31f74343d?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A luminous pearl set designed for festive evenings, inspired by moonlight shimmering over the sea.",
      details:
        "A coordinated set created to bring a soft luminous finish to special occasions.",
    },

    {
      id: 6,
      slug: "golden-shell-choker",
      name: "Golden Shell Choker",
      category: "festive",
      price: 3899,
      oldPrice: 4599,
      rating: 4.8,
      reviews: 63,
      material: "Brass",
      finish: "22K Gold Plated",
      availability: true,
      sizes: ["Medium"],
      badge: "TRENDING",
      images: [
        "https://images.unsplash.com/photo-1596944924616-7b3848851e2b?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A statement choker combining organic shell forms with warm gold tones for an elegant festive silhouette.",
      details:
        "The sculpted shell-inspired details create a statement look while maintaining the natural character of the collection.",
    },

    {
      id: 7,
      slug: "sunset-pearl-earrings",
      name: "Sunset Pearl Earrings",
      category: "festive",
      price: 3199,
      oldPrice: 3799,
      rating: 4.9,
      reviews: 57,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Medium"],
      badge: "BESTSELLER",
      images: [
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1588444650733-d876b1f2d4c4?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "Statement pearl drops that capture the soft golden hues of an ocean sunset.",
      details:
        "Designed to move beautifully with you, these earrings combine pearl glow with a warm sunset-inspired finish.",
    },

    {
      id: 8,
      slug: "seafoam-layer-necklace",
      name: "Seafoam Layer Necklace",
      category: "festive",
      price: 3599,
      oldPrice: 4199,
      rating: 4.7,
      reviews: 48,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Medium"],
      badge: "",
      images: [
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1617038260897-41a31f74343d?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A graceful layered necklace with pearl accents designed to add depth and glow to your festive look.",
      details:
        "Fine layers create a soft cascading effect inspired by foam drifting across the ocean surface.",
    },

    {
      id: 9,
      slug: "quiet-tide-chain",
      name: "Quiet Tide Chain",
      category: "minimal",
      price: 1799,
      oldPrice: 2099,
      rating: 4.7,
      reviews: 84,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium"],
      badge: "MINIMAL",
      images: [
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A fine chain inspired by the quiet rhythm of the shoreline, perfect for everyday layering.",
      details:
        "The clean chain profile makes this an easy foundation for layered jewellery styling.",
    },

    {
      id: 10,
      slug: "single-pearl-stud",
      name: "Single Pearl Studs",
      category: "minimal",
      price: 1299,
      oldPrice: 1599,
      rating: 4.8,
      reviews: 104,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small"],
      badge: "ESSENTIAL",
      images: [
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A beautifully simple pair of pearl studs designed for those who believe in understated elegance.",
      details:
        "Classic pearl studs that sit close to the ear and add just the right amount of light.",
    },

    {
      id: 11,
      slug: "sand-bar-ring",
      name: "Sand Bar Ring",
      category: "minimal",
      price: 1499,
      oldPrice: 1799,
      rating: 4.6,
      reviews: 61,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "",
      images: [
        "https://images.unsplash.com/photo-1627293509201-cd1e10e8a2e1?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A clean sculpted ring inspired by the soft curves formed by waves across the sand.",
      details:
        "A simple sculptural ring designed to feel polished without looking overworked.",
    },

    {
      id: 12,
      slug: "shoreline-bracelet",
      name: "Shoreline Bracelet",
      category: "minimal",
      price: 1999,
      oldPrice: 2299,
      rating: 4.7,
      reviews: 55,
      material: "Stainless Steel",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "",
      images: [
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A fine bracelet with a clean silhouette inspired by the meeting point of water and sand.",
      details:
        "An understated bracelet that can be worn alone or paired with other fine pieces.",
    },

    {
      id: 13,
      slug: "her-ocean-pearl-pendant",
      name: "Her Ocean Pearl Pendant",
      category: "for-her",
      price: 2899,
      oldPrice: 3499,
      rating: 5.0,
      reviews: 141,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium"],
      badge: "FOR HER",
      images: [
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A romantic pearl pendant designed to feel like a tiny piece of moonlight captured from the ocean.",
      details:
        "A feminine pendant with a soft pearl centre and delicate golden chain. Created for birthdays, anniversaries and quiet moments of appreciation.",
    },

    {
      id: 14,
      slug: "her-shell-earrings",
      name: "Her Shell Earrings",
      category: "for-her",
      price: 2399,
      oldPrice: 2899,
      rating: 4.9,
      reviews: 91,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Medium"],
      badge: "GIFT FAVOURITE",
      images: [
        "https://images.unsplash.com/photo-1588444650733-d876b1f2d4c4?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "Delicate shell-inspired earrings with luminous pearls, made for the woman who carries her own light.",
      details:
        "Organic shell shapes and soft pearls create an elegant feminine statement.",
    },

    {
      id: 15,
      slug: "her-pearl-bloom-ring",
      name: "Pearl Bloom Ring",
      category: "for-her",
      price: 2199,
      oldPrice: 2599,
      rating: 4.8,
      reviews: 72,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "",
      images: [
        "https://images.unsplash.com/photo-1603561596112-db5d3f3d5e0c?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A delicate ring inspired by flowers, pearls and the soft elegance of a coastal morning.",
      details:
        "A floral-inspired setting allows the pearl to remain the centre of attention.",
    },

    {
      id: 16,
      slug: "her-love-charm-bracelet",
      name: "Her Love Charm Bracelet",
      category: "for-her",
      price: 2699,
      oldPrice: 3199,
      rating: 4.9,
      reviews: 83,
      material: "Stainless Steel",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium"],
      badge: "ROMANTIC",
      images: [
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A meaningful charm bracelet carrying tiny symbols of love and the calm beauty of the ocean.",
      details:
        "The charms are designed to represent affection, connection and little memories worth carrying.",
    },

    {
      id: 17,
      slug: "him-ocean-chain",
      name: "Him Ocean Chain",
      category: "for-him",
      price: 2999,
      oldPrice: 3499,
      rating: 4.8,
      reviews: 69,
      material: "Stainless Steel",
      finish: "Brushed Gold",
      availability: true,
      sizes: ["Medium", "Large"],
      badge: "FOR HIM",
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A bold yet refined chain inspired by the strength and stillness of the open sea.",
      details:
        "A structured chain built for everyday wear with a modern masculine finish.",
    },

    {
      id: 18,
      slug: "him-coastal-band",
      name: "Coastal Band",
      category: "for-him",
      price: 2199,
      oldPrice: 2599,
      rating: 4.7,
      reviews: 56,
      material: "Titanium Steel",
      finish: "Matte Silver",
      availability: true,
      sizes: ["Medium", "Large"],
      badge: "",
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1627293509201-cd1e10e8a2e1?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A minimal masculine band with a clean finish and coastal-inspired character.",
      details:
        "A low-profile ring with a tactile matte surface that feels modern and refined.",
    },

    {
      id: 19,
      slug: "him-tide-bracelet",
      name: "Tide Bracelet",
      category: "for-him",
      price: 2499,
      oldPrice: 2999,
      rating: 4.8,
      reviews: 63,
      material: "Stainless Steel",
      finish: "Brushed Steel",
      availability: true,
      sizes: ["Medium", "Large"],
      badge: "POPULAR",
      images: [
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A structured bracelet inspired by the movement of waves and the strength of coastal stone.",
      details:
        "Designed with clean lines and a substantial feel without looking heavy.",
    },

    {
      id: 20,
      slug: "him-shell-tag-necklace",
      name: "Shell Tag Necklace",
      category: "for-him",
      price: 2799,
      oldPrice: 3199,
      rating: 4.7,
      reviews: 42,
      material: "Stainless Steel",
      finish: "Matte Black",
      availability: true,
      sizes: ["Medium"],
      badge: "",
      images: [
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A masculine pendant necklace with an organic shell-inspired tag and understated finish.",
      details:
        "The shell-inspired tag gives this piece a natural connection to Paara's coastal identity.",
    },

    {
      id: 21,
      slug: "new-pearl-cascade",
      name: "Pearl Cascade",
      category: "new-arrivals",
      price: 3299,
      oldPrice: 3899,
      rating: 5.0,
      reviews: 31,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Medium"],
      badge: "NEW",
      images: [
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1617038260897-41a31f74343d?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A new pearl silhouette designed to move softly like a cascade of ocean foam.",
      details:
        "A contemporary pearl design made to bring fluid movement and coastal softness to your look.",
    },

    {
      id: 22,
      slug: "new-tidal-loop",
      name: "Tidal Loop Earrings",
      category: "new-arrivals",
      price: 2499,
      oldPrice: 2999,
      rating: 4.9,
      reviews: 29,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Medium"],
      badge: "JUST IN",
      images: [
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1588444650733-d876b1f2d4c4?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "Sculpted earrings inspired by the circular movement of waves around the shore.",
      details:
        "A soft sculptural form creates movement while keeping the overall look elegant and lightweight.",
    },

    {
      id: 23,
      slug: "new-shore-pearl-ring",
      name: "Shore Pearl Ring",
      category: "new-arrivals",
      price: 1999,
      oldPrice: 2399,
      rating: 4.8,
      reviews: 38,
      material: "925 Sterling Silver",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "NEW",
      images: [
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1627293509201-cd1e10e8a2e1?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A fresh interpretation of a classic pearl ring with a refined coastal silhouette.",
      details:
        "A modern pearl ring that combines a delicate structure with a soft organic centre.",
    },

    {
      id: 24,
      slug: "new-sea-glow-bracelet",
      name: "Sea Glow Bracelet",
      category: "new-arrivals",
      price: 2799,
      oldPrice: 3299,
      rating: 4.9,
      reviews: 27,
      material: "Stainless Steel",
      finish: "18K Gold Plated",
      availability: true,
      sizes: ["Small", "Medium", "Large"],
      badge: "NEW",
      images: [
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=90",
      ],
      description:
        "A delicate new bracelet designed around the warm glow of sunlight touching the sea.",
      details:
        "The polished finish reflects light softly and complements layered styling.",
    },
  ];

  /* ==========================================================
     EXACT PRODUCT
  ========================================================== */

  const product = products.find(
    (item) =>
      item.id === Number(productId)
  );

  /* ==========================================================
     DEFAULT SIZE
  ========================================================== */

  useEffect(() => {
    if (product?.sizes?.length) {
      setSelectedSize(
        product.sizes[0]
      );
    }
  }, [productId, product]);

  /* ==========================================================
     DISCOUNT
  ========================================================== */

  const discount = product
    ? Math.round(
        ((product.oldPrice -
          product.price) /
          product.oldPrice) *
          100
      )
    : 0;

  /* ==========================================================
     BACK COLLECTION
  ========================================================== */

  const backCollection =
    location.state?.collectionType ||
    product?.category ||
    "everyday";

  /* ==========================================================
     RELATED PRODUCTS
  ========================================================== */

  const relatedProducts = useMemo(() => {
    if (!product) {
      return [];
    }

    return products
      .filter(
        (item) =>
          item.category ===
            product.category &&
          item.id !== product.id
      )
      .slice(0, 4);
  }, [product]);

  /* ==========================================================
     QUANTITY
  ========================================================== */

  const increaseQuantity = () => {
    setQuantity(
      (previous) =>
        previous + 1
    );
  };

  const decreaseQuantity = () => {
    setQuantity(
      (previous) =>
        previous > 1
          ? previous - 1
          : 1
    );
  };

  /* ==========================================================
     ADD TO CART
  ========================================================== */

  const handleAddToCart = () => {
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2400);
  };

  /* ==========================================================
     BUY NOW
  ========================================================== */

  const handleBuyNow = () => {
    setBuyMessage(
      `Preparing ${product.name} for checkout...`
    );

    setTimeout(() => {
      setBuyMessage("");
    }, 2500);
  };

  /* ==========================================================
     PRODUCT NOT FOUND
  ========================================================== */

  if (!product) {
    return (
      <>
        <div className="not-found-page">
          <div className="not-found-shell">
            🐚
          </div>

          <span>
            PAARA JEWELLERY
          </span>

          <h1>
            Treasure not found
          </h1>

          <p>
            This piece may have drifted
            away from the collection.
          </p>

          <button
            onClick={() =>
              navigate(
                "/collections"
              )
            }
          >
            BACK TO COLLECTIONS
          </button>
        </div>

        <style>{`
          @font-face {
            font-family: "Brilliant Cut";
            src: url("/fonts/BrilliantCutPro-Light.woff2")
              format("woff2");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          .not-found-page {
            min-height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px;
            text-align: center;
            background:
              linear-gradient(
                rgba(248,244,237,.84),
                rgba(248,244,237,.94)
              ),
              url("https://img.freepik.com/premium-photo/banner-summer-background-with-white-sand-seashell-starfish-beach_756748-104227.jpg?w=2000");
            background-size: cover;
            background-position: center;
            color: #453b31;
            font-family: "Brilliant Cut", serif;
            font-weight: 300;
          }

          .not-found-shell {
            font-size: 64px;
            margin-bottom: 20px;
          }

          .not-found-page > span {
            color: #9c7742;
            font-size: 8px;
            letter-spacing: 4px;
          }

          .not-found-page h1 {
            margin: 13px 0 8px;
            font-size: clamp(
              46px,
              7vw,
              70px
            );
            line-height: .95;
            font-weight: 300;
          }

          .not-found-page p {
            color: #756b60;
            font-size: 12px;
          }

          .not-found-page button {
            margin-top: 20px;
            padding: 13px 23px;
            border: 1px solid #b9935e;
            background: transparent;
            color: #8f6838;
            letter-spacing: 1.5px;
            font-size: 8px;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <div
        className="product-details-page"
        style={{
          "--sea-bg": `url("${seaBackground}")`,
        }}
      >
        {/* ====================================================
            BACK / BREADCRUMB
        ===================================================== */}

        <div className="details-breadcrumb">
          <button
            onClick={() =>
              navigate(
                `/products/${backCollection}`
              )
            }
          >
            ← BACK TO PRODUCTS
          </button>

          <div>
            HOME
            <span>/</span>
            COLLECTIONS
            <span>/</span>
            {product.category
              .replace(
                "-",
                " "
              )
              .toUpperCase()}
            <span>/</span>
            {product.name.toUpperCase()}
          </div>
        </div>

        {/* ====================================================
            PRODUCT MAIN
        ===================================================== */}

        <main className="details-main page-enter">
          {/* IMAGE SIDE */}

          <section className="gallery-section">
            <div className="gallery-layout">

              {/* THUMBNAILS */}

              <div className="thumbnail-column">
                {product.images.map(
                  (
                    image,
                    index
                  ) => (
                    <button
                      key={image}
                      className={
                        selectedImage ===
                        index
                          ? "thumbnail active"
                          : "thumbnail"
                      }
                      onClick={() =>
                        setSelectedImage(
                          index
                        )
                      }
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${
                          index + 1
                        }`}
                      />
                    </button>
                  )
                )}
              </div>

              {/* MAIN IMAGE */}

              <div className="main-image-container">
                <div className="main-image">

                  <img
                    src={
                      product.images[
                        selectedImage
                      ]
                    }
                    alt={product.name}
                  />

                  <div className="image-shine" />

                  {product.badge && (
                    <span className="detail-badge">
                      {
                        product.badge
                      }
                    </span>
                  )}

                  <button
                    className={`large-wishlist ${
                      isWishlisted
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setIsWishlisted(
                        !isWishlisted
                      )
                    }
                    aria-label={
                      isWishlisted
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                  >
                    {isWishlisted
                      ? "♥"
                      : "♡"}
                  </button>

                  <div className="zoom-hint">
                    MOVE TO EXPLORE
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================
              INFORMATION
          =================================================== */}

          <section className="product-information">

            <span className="detail-category">
              {product.category
                .replace(
                  "-",
                  " "
                )
                .toUpperCase()}
            </span>

            <h1>
              {product.name}
            </h1>

            {/* RATING */}

            <div className="detail-rating">
              <span className="stars">
                ★★★★★
              </span>

              <strong>
                {product.rating}
              </strong>

              <span>
                {product.reviews}
                {" "}
                reviews
              </span>
            </div>

            {/* PRICE */}

            <div className="detail-price-row">
              <span className="detail-price">
                ₹
                {product.price.toLocaleString(
                  "en-IN"
                )}
              </span>

              <span className="detail-old-price">
                ₹
                {product.oldPrice.toLocaleString(
                  "en-IN"
                )}
              </span>

              {discount > 0 && (
                <span className="discount">
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* DESCRIPTION */}

            <p className="main-description">
              {
                product.description
              }
            </p>

            <div className="gold-divider">
              <span />
              <small>
                🐚
              </small>
              <span />
            </div>

            {/* SPECIFICATIONS */}

            <div className="specifications">

              <div className="spec-row">
                <span>
                  MATERIAL
                </span>

                <strong>
                  {
                    product.material
                  }
                </strong>
              </div>

              <div className="spec-row">
                <span>
                  FINISH
                </span>

                <strong>
                  {
                    product.finish
                  }
                </strong>
              </div>

              <div className="spec-row">
                <span>
                  AVAILABILITY
                </span>

                <strong className="stock">
                  <i />
                  {product.availability
                    ? "In Stock"
                    : "Out of Stock"}
                </strong>
              </div>
            </div>

            {/* SIZE */}

            {product.sizes?.length >
              0 && (
              <div className="size-section">

                <div className="selection-header">
                  <span>
                    SELECT SIZE
                  </span>

                  <button
                    type="button"
                  >
                    Size Guide
                  </button>
                </div>

                <div className="size-options">
                  {product.sizes.map(
                    (size) => (
                      <button
                        key={size}
                        className={
                          selectedSize ===
                          size
                            ? "size active"
                            : "size"
                        }
                        onClick={() =>
                          setSelectedSize(
                            size
                          )
                        }
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>

              </div>
            )}

            {/* QUANTITY */}

            <div className="quantity-section">
              <span>
                QUANTITY
              </span>

              <div className="quantity-control">

                <button
                  onClick={
                    decreaseQuantity
                  }
                >
                  −
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  onClick={
                    increaseQuantity
                  }
                >
                  +
                </button>

              </div>
            </div>

            {/* ACTION BUTTONS */}

            <div className="detail-buttons">

              <button
                className={`add-to-cart ${
                  addedToCart
                    ? "added"
                    : ""
                }`}
                onClick={
                  handleAddToCart
                }
              >
                {addedToCart
                  ? "✓ ADDED TO CART"
                  : "ADD TO CART"}
              </button>

              <button
                className="buy-now"
                onClick={
                  handleBuyNow
                }
              >
                BUY NOW
                <span>
                  →
                </span>
              </button>

            </div>

            {/* WISHLIST */}

            <button
              className={`wishlist-line ${
                isWishlisted
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setIsWishlisted(
                  !isWishlisted
                )
              }
            >
              <span>
                {isWishlisted
                  ? "♥"
                  : "♡"}
              </span>

              {isWishlisted
                ? "ADDED TO WISHLIST"
                : "ADD TO WISHLIST"}
            </button>

            {/* FEATURES */}

            <div className="product-features">

              <div>
                <span>
                  ◇
                </span>

                <p>
                  BIS Hallmarked
                  <small>
                    Made with care
                  </small>
                </p>
              </div>

              <div>
                <span>
                  ↻
                </span>

                <p>
                  Easy Returns
                  <small>
                    7-day return policy
                  </small>
                </p>
              </div>

              <div>
                <span>
                  ▱
                </span>

                <p>
                  Secure Shipping
                  <small>
                    Packed with love
                  </small>
                </p>
              </div>

            </div>
          </section>
        </main>

        {/* ====================================================
            PRODUCT STORY
        ===================================================== */}

        <section className="product-story-section">

          <div className="story-shell">
            🐚
          </div>

          <div className="product-story-inner">

            <div className="story-image">
              <div className="story-image-inner" />

              <div className="story-image-label">
                PAARA
              </div>
            </div>

            <div className="story-copy">

              <span>
                THE STORY BEHIND THE PIECE
              </span>

              <h2>
                A little piece
                <br />
                of the sea.
              </h2>

              <p>
                {product.details}
              </p>

              <blockquote>
                “Jewellery should feel like
                a memory you can wear.”
              </blockquote>

              <small>
                — PAARA
              </small>

            </div>
          </div>
        </section>

        {/* ====================================================
            DELIVERY
        ===================================================== */}

        <section className="delivery-section">

          <div className="delivery-item">

            <span>
              01
            </span>

            <div>
              <h3>
                SHIPPING
              </h3>

              <p>
                Complimentary shipping on
                orders above ₹999.
              </p>
            </div>

          </div>

          <div className="delivery-item">

            <span>
              02
            </span>

            <div>
              <h3>
                RETURNS
              </h3>

              <p>
                Easy returns within 7 days
                of delivery.
              </p>
            </div>

          </div>

          <div className="delivery-item">

            <span>
              03
            </span>

            <div>
              <h3>
                JEWELLERY CARE
              </h3>

              <p>
                Keep your piece away from
                harsh chemicals and moisture.
              </p>
            </div>

          </div>

        </section>

        {/* ====================================================
            RELATED PRODUCTS
        ===================================================== */}

        {relatedProducts.length >
          0 && (
          <section className="related-section">

            <div className="related-heading">

              <span>
                FROM THE SAME TIDE
              </span>

              <h2>
                You May Also Like
              </h2>

              <div className="related-divider">
                <span />
                <small>
                  ✦
                </small>
                <span />
              </div>

            </div>

            <div className="related-grid">

              {relatedProducts.map(
                (related) => (
                  <article
                    key={
                      related.id
                    }
                    className="related-card"
                  >

                    <button
                      className="related-image"
                      onClick={() => {
                        navigate(
                          `/product/${related.id}`,
                          {
                            state: {
                              collectionType:
                                related.category,
                            },
                          }
                        );

                        window.scrollTo(
                          {
                            top: 0,
                            left: 0,
                            behavior:
                              "auto",
                          }
                        );
                      }}
                    >

                      <img
                        src={
                          related
                            .images[0]
                        }
                        alt={
                          related.name
                        }
                      />

                      <span>
                        VIEW PIECE →
                      </span>

                    </button>

                    <div>

                      <small>
                        {related.category
                          .replace(
                            "-",
                            " "
                          )
                          .toUpperCase()}
                      </small>

                      <h3>
                        {
                          related.name
                        }
                      </h3>

                      <p>
                        ₹
                        {related.price.toLocaleString(
                          "en-IN"
                        )}
                      </p>

                    </div>

                  </article>
                )
              )}

            </div>
          </section>
        )}

        {/* ====================================================
            EXPLORE COLLECTION
        ===================================================== */}

        <section className="explore-collection">

          <div className="explore-shell-left">
            🐚
          </div>

          <div className="explore-shell-right">
            🐚
          </div>

          <div className="explore-content">

            <span>
              MORE TREASURES AWAIT
            </span>

            <h2>
              Continue exploring
            </h2>

            <p>
              Discover more pieces from the{" "}
              {product.category.replace(
                "-",
                " "
              )}{" "}
              collection.
            </p>

            <button
              onClick={() =>
                navigate(
                  "/collections"
                )
              }
            >
              EXPLORE COLLECTION

              <span>
                →
              </span>
            </button>

          </div>

        </section>

        {/* ====================================================
            CART FEEDBACK
        ===================================================== */}

        {addedToCart && (
          <div className="notification">

            <div className="notification-icon">
              ✓
            </div>

            <div>
              <strong>
                Added to Cart
              </strong>

              <span>
                {product.name}
              </span>
            </div>

          </div>
        )}

        {/* ====================================================
            BUY NOW FEEDBACK
        ===================================================== */}

        {buyMessage && (
          <div className="buy-notification">

            <span>
              ✓
            </span>

            {buyMessage}

          </div>
        )}

      </div>

      {/* ========================================================
          ALL CSS INSIDE THIS JSX FILE
      ======================================================== */}

      <style>{`

        /* =====================================================
           FONT
        ====================================================== */

        @font-face {
          font-family: "Brilliant Cut";
          src: url("/fonts/BrilliantCutPro-Light.woff2")
            format("woff2");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        :root {
          --paara-cream: #f8f4ed;
          --paara-ivory: #fbf8f2;
          --paara-sand: #eee6d9;
          --paara-brown: #554b41;
          --paara-soft: #756a60;
          --paara-gold: #a77d45;
          --paara-line: rgba(
            130,
            107,
            74,
            .16
          );
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: var(--paara-cream);
          color: var(--paara-brown);
        }

        button,
        input,
        select {
          font-family: "Brilliant Cut", serif;
          font-weight: 300;
        }

        button {
          cursor: pointer;
        }

        .product-details-page {
          width: 100%;
          min-width: 0;
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 8% 30%,
              rgba(
                92,
                171,
                174,
                .055
              ),
              transparent 25%
            ),
            radial-gradient(
              circle at 91% 70%,
              rgba(
                196,
                161,
                109,
                .075
              ),
              transparent 27%
            ),
            var(--paara-cream);
          color: var(--paara-brown);
          font-family: "Brilliant Cut", serif;
          font-weight: 300;
        }

        /* =====================================================
           PAGE ENTER
        ====================================================== */

        .page-enter {
          animation:
            detailsPageEnter
            .75s
            cubic-bezier(
              .22,
              .61,
              .36,
              1
            )
            both;
        }

        @keyframes detailsPageEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           BREADCRUMB
        ====================================================== */

        .details-breadcrumb {
          width: min(
            90vw,
            1450px
          );
          min-height: 58px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0;
          color: #95897b;
          font-size: 7px;
          letter-spacing: .16em;
        }

        .details-breadcrumb button {
          border: 0;
          background: transparent;
          padding: 0;
          color: #916c3d;
          font-size: 8px;
          letter-spacing: .16em;
        }

        .details-breadcrumb div {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 9px;
          text-align: right;
        }

        .details-breadcrumb span {
          color: #c4b7a5;
        }

        /* =====================================================
           MAIN PRODUCT
        ====================================================== */

        .details-main {
          width: min(
            90vw,
            1450px
          );
          margin: auto;
          padding:
            28px 0
            clamp(
              70px,
              8vw,
              120px
            );

          display: grid;

          grid-template-columns:
            minmax(0, 1.08fr)
            minmax(350px, .92fr);

          gap: clamp(
            35px,
            5vw,
            90px
          );

          align-items: start;
        }

        /* =====================================================
           GALLERY
        ====================================================== */

        .gallery-section {
          min-width: 0;
        }

        .gallery-layout {
          width: 100%;
          display: grid;
          grid-template-columns:
            clamp(66px, 6vw, 92px)
            minmax(0, 1fr);
          gap: clamp(
            10px,
            1.3vw,
            18px
          );
        }

        .thumbnail-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .thumbnail {
          width: 100%;
          aspect-ratio: 1 / 1.08;
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(
            133,
            107,
            72,
            .16
          );
          background: var(--paara-sand);
          opacity: .68;
          transition:
            opacity .3s ease,
            border-color .3s ease,
            transform .3s ease;
        }

        .thumbnail:hover {
          opacity: .95;
          transform: translateY(-2px);
        }

        .thumbnail.active {
          opacity: 1;
          border-color: #b58c55;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .main-image-container {
          width: 100%;
          min-width: 0;
        }

        .main-image {
          width: 100%;
          position: relative;
          overflow: hidden;
          aspect-ratio: 1 / 1.08;
          background:
            radial-gradient(
              circle at 50% 45%,
              #fffdf8,
              #eee5d8 70%
            );
          border: 1px solid rgba(
            135,
            109,
            76,
            .13
          );
        }

        .main-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition:
            transform
            .9s
            cubic-bezier(
              .22,
              .61,
              .36,
              1
            );
        }

        .main-image:hover img {
          transform: scale(1.045);
        }

        .image-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              135deg,
              rgba(
                255,
                255,
                255,
                .22
              ),
              transparent 27%,
              transparent 72%,
              rgba(
                75,
                173,
                179,
                .07
              )
            );
        }

        .detail-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 7px 11px;
          background:
            rgba(
              252,
              249,
              243,
              .91
            );
          border: 1px solid rgba(
            153,
            121,
            76,
            .14
          );
          color: #8e683d;
          font-size: 7px;
          letter-spacing: .18em;
          backdrop-filter: blur(7px);
        }

        .large-wishlist {
          position: absolute;
          top: 17px;
          right: 17px;
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(
            147,
            116,
            75,
            .18
          );
          background:
            rgba(
              251,
              248,
              242,
              .91
            );
          color: #71665c;
          font-size: 23px;
          transition:
            transform .3s ease,
            color .3s ease;
        }

        .large-wishlist:hover {
          transform: scale(1.08);
        }

        .large-wishlist.active {
          color: #a35c51;
          animation:
            heartBeat
            .35s
            ease;
        }

        .zoom-hint {
          position: absolute;
          left: 50%;
          bottom: 19px;
          transform:
            translateX(-50%);
          padding: 7px 13px;
          background:
            rgba(
              46,
              44,
              40,
              .28
            );
          color: white;
          font-size: 7px;
          letter-spacing: .18em;
          opacity: 0;
          transition: opacity .3s ease;
        }

        .main-image:hover
        .zoom-hint {
          opacity: 1;
        }

        /* =====================================================
           PRODUCT INFORMATION
        ====================================================== */

        .product-information {
          min-width: 0;
          padding-top: 10px;
          animation:
            informationIn
            .75s
            ease
            both;
        }

        .detail-category {
          color: #a17842;
          font-size: 8px;
          letter-spacing: .27em;
        }

        .product-information h1 {
          margin:
            13px 0
            14px;
          color: #352e27;
          font-size: clamp(
            44px,
            5vw,
            76px
          );
          line-height: .91;
          letter-spacing: -.03em;
          font-weight: 300;
        }

        .detail-rating {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          color: #756b60;
          font-size: 10px;
        }

        .detail-rating .stars {
          color: #ac7d3c;
          letter-spacing: 2px;
        }

        .detail-rating strong {
          color: #4d443b;
          font-weight: 300;
        }

        .detail-price-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 19px;
        }

        .detail-price {
          color: #3e362e;
          font-size: clamp(
            20px,
            2vw,
            28px
          );
        }

        .detail-old-price {
          color: #9d9287;
          text-decoration: line-through;
          font-size: 12px;
        }

        .discount {
          padding: 5px 8px;
          background: #e9dfd0;
          color: #946d3b;
          font-size: 8px;
          letter-spacing: .1em;
        }

        .main-description {
          max-width: 620px;
          margin-top: 21px;
          color: #70665b;
          font-size: 13px;
          line-height: 1.85;
        }

        .gold-divider {
          width: min(
            180px,
            45%
          );
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 25px 0;
        }

        .gold-divider span {
          flex: 1;
          height: 1px;
          background: rgba(
            166,
            129,
            76,
            .36
          );
        }

        .gold-divider small {
          color: #a2773c;
        }

        /* =====================================================
           SPECIFICATIONS
        ====================================================== */

        .specifications {
          border-top: 1px solid rgba(
            124,
            102,
            74,
            .13
          );
          border-bottom: 1px solid rgba(
            124,
            102,
            74,
            .13
          );
        }

        .spec-row {
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid rgba(
            124,
            102,
            74,
            .10
          );
        }

        .spec-row:last-child {
          border-bottom: 0;
        }

        .spec-row > span {
          color: #928579;
          font-size: 8px;
          letter-spacing: .18em;
        }

        .spec-row strong {
          color: #544b42;
          font-weight: 300;
          font-size: 11px;
          text-align: right;
        }

        .stock {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #4f7c68 !important;
        }

        .stock i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
          background: #5e9879;
        }

        /* =====================================================
           SIZE
        ====================================================== */

        .size-section {
          margin-top: 27px;
        }

        .selection-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 12px;
        }

        .selection-header > span {
          color: #6d6257;
          font-size: 8px;
          letter-spacing: .18em;
        }

        .selection-header button {
          padding: 0;
          border: 0;
          background: transparent;
          color: #9d7645;
          text-decoration: underline;
          font-size: 8px;
        }

        .size-options {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .size {
          min-width: 56px;
          min-height: 38px;
          padding: 6px 15px;
          border: 1px solid rgba(
            136,
            110,
            76,
            .27
          );
          background: transparent;
          color: #655c52;
          font-size: 10px;
          transition:
            background .25s ease,
            border-color .25s ease,
            color .25s ease;
        }

        .size:hover {
          border-color: #ad8148;
        }

        .size.active {
          border-color: #a8793e;
          background: #a8793e;
          color: white;
        }

        /* =====================================================
           QUANTITY
        ====================================================== */

        .quantity-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 24px;
        }

        .quantity-section > span {
          color: #6d6257;
          font-size: 8px;
          letter-spacing: .18em;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          border: 1px solid rgba(
            135,
            108,
            73,
            .25
          );
          background: #fbf8f2;
        }

        .quantity-control button,
        .quantity-control span {
          width: 39px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 0;
          background: transparent;
          color: #665d53;
        }

        .quantity-control button {
          font-size: 16px;
          transition: color .2s ease;
        }

        .quantity-control button:hover {
          color: #a87941;
        }

        .quantity-control span {
          border-left: 1px solid rgba(
            135,
            108,
            73,
            .16
          );
          border-right: 1px solid rgba(
            135,
            108,
            73,
            .16
          );
          font-size: 11px;
        }

        /* =====================================================
           BUTTONS
        ====================================================== */

        .detail-buttons {
          display: grid;
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );
          gap: 10px;
          margin-top: 25px;
        }

        .add-to-cart,
        .buy-now {
          min-height: 52px;
          border: 1px solid #af8248;
          font-size: 9px;
          letter-spacing: .18em;
          transition:
            background .3s ease,
            color .3s ease,
            transform .25s ease,
            box-shadow .3s ease;
        }

        .add-to-cart {
          background: #ad8145;
          color: white;
        }

        .add-to-cart:hover {
          background: #97703d;
          transform: translateY(-1px);
          box-shadow:
            0
            9px
            22px
            rgba(
              145,
              104,
              52,
              .15
            );
        }

        .add-to-cart.added {
          background: #5c806d;
          border-color: #5c806d;
        }

        .buy-now {
          background: transparent;
          color: #956c37;
        }

        .buy-now span {
          margin-left: 13px;
          font-size: 15px;
        }

        .buy-now:hover {
          background: #ad8145;
          color: white;
          transform: translateY(-1px);
        }

        .wishlist-line {
          width: 100%;
          margin-top: 14px;
          padding: 11px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          background: transparent;
          color: #796f64;
          font-size: 8px;
          letter-spacing: .18em;
        }

        .wishlist-line span {
          font-size: 18px;
        }

        .wishlist-line.active {
          color: #a15c51;
        }

        /* =====================================================
           FEATURES
        ====================================================== */

        .product-features {
          margin-top: 27px;
          padding-top: 21px;
          display: grid;
          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );
          gap: 12px;
          border-top: 1px solid rgba(
            124,
            102,
            74,
            .13
          );
        }

        .product-features > div {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          min-width: 0;
        }

        .product-features > div > span {
          color: #a67b42;
          font-size: 15px;
        }

        .product-features p {
          margin: 0;
          color: #675d53;
          font-size: 8px;
          line-height: 1.3;
        }

        .product-features small {
          display: block;
          margin-top: 4px;
          color: #978b7e;
          font-size: 7px;
        }

        /* =====================================================
           STORY
        ====================================================== */

        .product-story-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding:
            clamp(
              75px,
              9vw,
              120px
            )
            5%;
          background:
            linear-gradient(
              90deg,
              rgba(
                245,
                241,
                234,
                .90
              ),
              rgba(
                237,
                242,
                238,
                .91
              )
            ),
            var(--sea-bg);
          background-size: cover;
          background-position: center;
          border-top: 1px solid rgba(
            119,
            100,
            76,
            .13
          );
          border-bottom: 1px solid rgba(
            119,
            100,
            76,
            .13
          );
        }

        .product-story-inner {
          width: min(
            90vw,
            1250px
          );
          margin: auto;
          display: grid;
          grid-template-columns:
            minmax(0,1fr)
            minmax(0,1fr);
          gap: clamp(
            40px,
            6vw,
            90px
          );
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .story-image {
          position: relative;
          min-width: 0;
          padding: 11px;
          background:
            rgba(
              255,
              251,
              245,
              .78
            );
          border: 1px solid rgba(
            140,
            113,
            76,
            .24
          );
          box-shadow:
            0
            25px
            55px
            rgba(
              71,
              57,
              40,
              .12
            );
        }

        .story-image-inner {
          width: 100%;
          aspect-ratio: 1 / 1.06;
          background:
            linear-gradient(
              rgba(
                255,
                255,
                255,
                .08
              ),
              rgba(
                33,
                98,
                101,
                .12
              )
            ),
            var(--sea-bg);
          background-size: cover;
          background-position: center;
        }

        .story-image-label {
          position: absolute;
          left: 32px;
          bottom: 28px;
          color: white;
          font-size: 28px;
          text-shadow:
            0
            2px
            10px
            rgba(
              0,
              0,
              0,
              .25
            );
        }

        .story-copy {
          min-width: 0;
        }

        .story-copy > span {
          color: #9d7641;
          font-size: 8px;
          letter-spacing: .3em;
        }

        .story-copy h2 {
          margin:
            16px 0
            22px;
          color: #352e27;
          font-size: clamp(
            46px,
            5vw,
            72px
          );
          line-height: .91;
          font-weight: 300;
        }

        .story-copy p {
          max-width: 560px;
          color: #6f655b;
          font-size: 13px;
          line-height: 1.9;
        }

        .story-copy blockquote {
          max-width: 530px;
          margin:
            28px 0
            5px;
          padding-left: 23px;
          border-left: 1px solid #b58a51;
          font-size: clamp(
            17px,
            1.5vw,
            24px
          );
          font-style: italic;
          line-height: 1.4;
          color: #564c42;
        }

        .story-copy > small {
          margin-left: 23px;
          color: #9a7544;
          font-size: 8px;
          letter-spacing: .18em;
        }

        .story-shell {
          position: absolute;
          right: 3%;
          bottom: -20px;
          font-size: clamp(
            80px,
            11vw,
            160px
          );
          opacity: .16;
          z-index: 1;
        }

        /* =====================================================
           DELIVERY
        ====================================================== */

        .delivery-section {
          width: min(
            90vw,
            1250px
          );
          margin: auto;
          padding:
            42px 0;
          display: grid;
          grid-template-columns:
            repeat(
              3,
              minmax(0,1fr)
            );
          gap: 30px;
        }

        .delivery-item {
          display: flex;
          gap: 15px;
          min-width: 0;
        }

        .delivery-item > span {
          color: #a98149;
          font-size: 22px;
          flex: 0 0 auto;
        }

        .delivery-item h3 {
          margin: 0;
          color: #675d53;
          font-size: 8px;
          letter-spacing: .18em;
          font-weight: 300;
        }

        .delivery-item p {
          margin: 7px 0 0;
          color: #867b70;
          font-size: 10px;
          line-height: 1.6;
        }

        /* =====================================================
           RELATED PRODUCTS
        ====================================================== */

        .related-section {
          width: min(
            90vw,
            1450px
          );
          margin: auto;
          padding:
            85px 0
            110px;
        }

        .related-heading {
          text-align: center;
        }

        .related-heading > span {
          color: #a27a45;
          font-size: 8px;
          letter-spacing: .3em;
        }

        .related-heading h2 {
          margin:
            9px 0
            13px;
          color: #342e27;
          font-size: clamp(
            42px,
            5vw,
            62px
          );
          font-weight: 300;
        }

        .related-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .related-divider span {
          width: 65px;
          height: 1px;
          background: rgba(
            157,
            123,
            73,
            .35
          );
        }

        .related-divider small {
          color: #a4773f;
        }

        .related-grid {
          margin-top: 42px;
          display: grid;
          grid-template-columns:
            repeat(
              4,
              minmax(0,1fr)
            );
          gap: clamp(
            14px,
            1.8vw,
            26px
          );
        }

        .related-card {
          min-width: 0;
          text-align: center;
        }

        .related-image {
          width: 100%;
          aspect-ratio: 1 / 1.18;
          position: relative;
          display: block;
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(
            133,
            107,
            72,
            .13
          );
          background: #f1eadf;
        }

        .related-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition:
            transform .7s ease;
        }

        .related-image:hover img {
          transform: scale(1.045);
        }

        .related-image > span {
          position: absolute;
          left: 50%;
          bottom: 15px;
          transform:
            translateX(-50%);
          white-space: nowrap;
          padding: 8px 12px;
          background:
            rgba(
              43,
              42,
              39,
              .48
            );
          color: white;
          font-size: 7px;
          letter-spacing: .17em;
          opacity: 0;
          transition:
            opacity .3s ease;
        }

        .related-image:hover
        > span {
          opacity: 1;
        }

        .related-card > div {
          padding-top: 14px;
        }

        .related-card > div small {
          color: #a27a43;
          font-size: 7px;
          letter-spacing: .18em;
        }

        .related-card h3 {
          margin:
            5px 0;
          color: #3b332b;
          font-size: clamp(
            18px,
            1.5vw,
            25px
          );
          font-weight: 300;
        }

        .related-card p {
          margin: 0;
          color: #51483e;
          font-size: 11px;
        }

        /* =====================================================
           EXPLORE COLLECTION
        ====================================================== */

        .explore-collection {
          position: relative;
          width: 100%;
          min-height: clamp(
            350px,
            46vh,
            500px
          );
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          background:
            linear-gradient(
              rgba(
                23,
                82,
                84,
                .75
              ),
              rgba(
                31,
                95,
                96,
                .80
              )
            ),
            var(--sea-bg);
          background-size: cover;
          background-position: center;
          color: white;
        }

        .explore-content {
          position: relative;
          z-index: 2;
          width: min(
            90vw,
            700px
          );
          padding:
            70px
            20px;
        }

        .explore-content > span {
          font-size: 8px;
          letter-spacing: .35em;
          opacity: .85;
        }

        .explore-content h2 {
          margin:
            14px 0
            9px;
          font-size: clamp(
            46px,
            6vw,
            74px
          );
          font-weight: 300;
          line-height: .95;
        }

        .explore-content p {
          width: min(
            100%,
            500px
          );
          margin: auto;
          font-size: 17px;
          line-height: 1.5;
          opacity: .9;
        }

        .explore-content button {
          margin-top: 24px;
          padding: 14px 22px;
          border: 1px solid rgba(
            255,
            255,
            255,
            .7
          );
          background:
            rgba(
              255,
              255,
              255,
              .08
            );
          color: white;
          font-size: 8px;
          letter-spacing: .18em;
          backdrop-filter: blur(8px);
          transition:
            background .3s ease,
            transform .3s ease;
        }

        .explore-content button
        span {
          margin-left: 15px;
          font-size: 14px;
        }

        .explore-content button:hover {
          background:
            rgba(
              255,
              255,
              255,
              .18
            );
          transform:
            translateY(-2px);
        }

        .explore-shell-left,
        .explore-shell-right {
          position: absolute;
          font-size: clamp(
            70px,
            9vw,
            120px
          );
          opacity: .25;
          pointer-events: none;
        }

        .explore-shell-left {
          left: 5%;
          bottom: -12px;
          transform: rotate(-15deg);
        }

        .explore-shell-right {
          right: 5%;
          top: 22px;
          transform: rotate(12deg);
        }

        /* =====================================================
           NOTIFICATIONS
        ====================================================== */

        .notification,
        .buy-notification {
          position: fixed;
          z-index: 500;
          right: 24px;
          bottom: 24px;
          background:
            rgba(
              252,
              249,
              244,
              .97
            );
          border: 1px solid rgba(
            149,
            117,
            72,
            .18
          );
          box-shadow:
            0
            20px
            50px
            rgba(
              48,
              40,
              32,
              .15
            );
          backdrop-filter: blur(18px);
          animation:
            toastIn
            .4s
            ease
            both;
        }

        .notification {
          min-width: 270px;
          padding:
            14px
            17px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .notification-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #658571;
          color: white;
        }

        .notification strong {
          display: block;
          color: #51483e;
          font-size: 10px;
        }

        .notification span {
          display: block;
          margin-top: 3px;
          color: #8b8074;
          font-size: 8px;
        }

        .buy-notification {
          padding:
            14px
            20px;
          color: #665c51;
          font-size: 10px;
        }

        .buy-notification span {
          margin-right: 8px;
          color: #5d866e;
        }

        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes informationIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heartBeat {
          0% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.18);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           LARGE PC
        ====================================================== */

        @media (min-width: 1440px) {

          .details-main {
            width: min(
              92vw,
              1600px
            );
          }

          .product-story-inner {
            width: min(
              90vw,
              1400px
            );
          }

          .related-section {
            width: min(
              92vw,
              1600px
            );
          }
        }

        /* =====================================================
           TABLET / LAPTOP
        ====================================================== */

        @media (
          min-width: 761px
        ) and (
          max-width: 1100px
        ) {

          .details-main {
            grid-template-columns:
              minmax(0,1fr)
              minmax(0,1fr);
            gap: 35px;
          }

          .product-information h1 {
            font-size: 48px;
          }

          .product-features {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .related-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0,1fr)
              );
          }

          .delivery-section {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 760px) {

          .details-breadcrumb {
            width: calc(100% - 32px);
            min-height: auto;
            padding:
              17px 0;
            align-items: flex-start;
            flex-direction: column;
          }

          .details-breadcrumb div {
            justify-content: flex-start;
            text-align: left;
            line-height: 1.7;
          }

          .details-main {
            width: calc(100% - 28px);
            padding:
              12px 0
              72px;
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .gallery-layout {
            grid-template-columns:
              58px
              minmax(0,1fr);
            gap: 9px;
          }

          .thumbnail-column {
            gap: 9px;
          }

          .product-information {
            padding: 0;
          }

          .product-information h1 {
            font-size: clamp(
              44px,
              12vw,
              60px
            );
          }

          .main-description {
            font-size: 12px;
          }

          .detail-buttons {
            grid-template-columns: 1fr;
          }

          .product-features {
            grid-template-columns:
              repeat(
                3,
                minmax(0,1fr)
              );
            gap: 5px;
          }

          .product-features > div {
            display: block;
            text-align: center;
          }

          .product-features
          > div
          > span {
            display: block;
            margin-bottom: 5px;
          }

          .product-features p {
            font-size: 7px;
          }

          .product-features small {
            font-size: 6px;
          }

          .product-story-section {
            padding:
              70px 0
              75px;
          }

          .product-story-inner {
            width: calc(100% - 30px);
            grid-template-columns: 1fr;
            gap: 43px;
          }

          .story-image-inner {
            aspect-ratio: 1 / 1.1;
          }

          .story-copy h2 {
            font-size: clamp(
              44px,
              11vw,
              57px
            );
          }

          .delivery-section {
            width: calc(100% - 30px);
            padding:
              35px 0;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .related-section {
            width: calc(100% - 30px);
            padding:
              70px 0
              80px;
          }

          .related-heading h2 {
            font-size: clamp(
              40px,
              11vw,
              52px
            );
          }

          .related-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
            gap: 13px;
          }

          .related-card h3 {
            font-size: 18px;
          }

          .related-card p {
            font-size: 9px;
          }

          .explore-content {
            width: calc(100% - 28px);
          }

          .explore-content h2 {
            font-size: clamp(
              44px,
              11vw,
              56px
            );
          }

          .explore-content p {
            font-size: 14px;
          }

          .notification,
          .buy-notification {
            left: 14px;
            right: 14px;
            bottom: 14px;
          }

          .notification {
            min-width: 0;
          }
        }

        /* =====================================================
           SMALL PHONES
        ====================================================== */

        @media (max-width: 390px) {

          .details-main {
            width: calc(100% - 22px);
          }

          .gallery-layout {
            grid-template-columns:
              51px
              minmax(0,1fr);
          }

          .product-information h1 {
            font-size: 42px;
          }

          .detail-price {
            font-size: 20px;
          }

          .product-features {
            gap: 3px;
          }

          .related-section {
            width: calc(100% - 22px);
          }

          .related-grid {
            gap: 9px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .page-enter,
          .product-information,
          .notification,
          .buy-notification {
            animation: none !important;
          }

          .main-image img,
          .thumbnail,
          .large-wishlist {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProductDetails;