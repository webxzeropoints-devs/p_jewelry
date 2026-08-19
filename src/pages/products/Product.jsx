import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const { collectionType } = useParams();

  /* ==========================================================
     STATES
  ========================================================== */

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] =
    useState("all");
  const [availabilityFilter, setAvailabilityFilter] =
    useState("all");
  const [showFilters, setShowFilters] =
    useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cartMessage, setCartMessage] =
    useState("");

  /* ==========================================================
     SEA BACKGROUND
  ========================================================== */

  const seaBackground =
    "https://img.freepik.com/premium-photo/banner-summer-background-with-white-sand-seashell-starfish-beach_756748-104227.jpg?w=2000";

  /* ==========================================================
     SCROLL TO TOP WHEN PAGE / COLLECTION CHANGES
  ========================================================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [collectionType]);

  /* ==========================================================
     COLLECTION INFORMATION
  ========================================================== */

  const collectionInfo = {
    everyday: {
      name: "Everyday",
      subtitle:
        "Little pieces for every day",
      eyebrow:
        "THE EVERYDAY COLLECTION",
      quote:
        "Little treasures for the moments that quietly matter.",
      description:
        "Delicate jewellery inspired by pearls, shells and the calm rhythm of the sea.",
    },

    festive: {
      name: "Festive",
      subtitle:
        "Made for moments worth celebrating",
      eyebrow:
        "THE FESTIVE COLLECTION",
      quote:
        "Some moments deserve a little more sparkle.",
      description:
        "Elegant pieces made for celebrations, golden evenings and memories worth keeping.",
    },

    minimal: {
      name: "Minimal",
      subtitle:
        "Simple. Elegant. You.",
      eyebrow:
        "THE MINIMAL COLLECTION",
      quote:
        "Elegance lives in the details left untouched.",
      description:
        "Quiet silhouettes, refined forms and timeless jewellery for everyday sophistication.",
    },

    "for-her": {
      name: "For Her",
      subtitle:
        "She'll love this",
      eyebrow: "FOR HER",
      quote:
        "For the woman who carries her own light.",
      description:
        "Soft pearls, delicate curves and romantic details inspired by sunlight over the ocean.",
    },

    "for-him": {
      name: "For Him",
      subtitle:
        "Just for him",
      eyebrow: "FOR HIM",
      quote:
        "Steady as the shore. Deep as the sea.",
      description:
        "Refined forms, natural textures and understated character for modern masculine elegance.",
    },

    "new-arrivals": {
      name: "New Arrivals",
      subtitle:
        "Something new to love",
      eyebrow:
        "NEW ARRIVALS",
      quote:
        "A new tide brings something beautiful.",
      description:
        "Fresh silhouettes and new treasures shaped by the beauty of the coastline.",
    },
  };

  const activeCollection =
    collectionInfo[collectionType] ||
    collectionInfo.everyday;

  /* ==========================================================
     PRODUCT DATA
  ========================================================== */

  const products = [
    /* ========================================================
       EVERYDAY
    ======================================================== */

    {
      id: 1,
      name: "Ocean Pearl Necklace",
      category: "everyday",
      price: 2499,
      oldPrice: 2999,
      rating: 4.9,
      reviews: 128,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "BESTSELLER",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
      description:
        "A delicate pearl necklace inspired by the calm beauty of the ocean.",
    },

    {
      id: 2,
      name: "Shell Drop Earrings",
      category: "everyday",
      price: 1899,
      oldPrice: 2299,
      rating: 4.8,
      reviews: 96,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "LOVED",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
      description:
        "Elegant drop earrings inspired by soft seashells and luminous pearls.",
    },

    {
      id: 3,
      name: "Pearl Tide Ring",
      category: "everyday",
      price: 1699,
      oldPrice: 1999,
      rating: 4.8,
      reviews: 112,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "POPULAR",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
      description:
        "A graceful pearl ring inspired by shells resting along the shoreline.",
    },

    {
      id: 4,
      name: "Coastal Charm Bracelet",
      category: "everyday",
      price: 2299,
      oldPrice: 2699,
      rating: 4.7,
      reviews: 88,
      material:
        "Stainless Steel",
      availability: true,
      badge: "",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
      description:
        "A delicate charm bracelet carrying subtle ocean-inspired details.",
    },

    /* ========================================================
       FESTIVE
    ======================================================== */

    {
      id: 5,
      name: "Moonlight Pearl Set",
      category: "festive",
      price: 4499,
      oldPrice: 5499,
      rating: 4.9,
      reviews: 74,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "NEW",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a31f74343d?auto=format&fit=crop&w=1200&q=85",
      description:
        "A luminous pearl set inspired by moonlight shimmering over the sea.",
    },

    {
      id: 6,
      name: "Golden Shell Choker",
      category: "festive",
      price: 3899,
      oldPrice: 4599,
      rating: 4.8,
      reviews: 63,
      material:
        "Gold Plated Brass",
      availability: true,
      badge: "TRENDING",
      image:
        "https://images.unsplash.com/photo-1596944924616-7b3848851e2b?auto=format&fit=crop&w=1200&q=85",
      description:
        "A statement choker combining organic shell forms with warm gold.",
    },

    {
      id: 7,
      name: "Sunset Pearl Earrings",
      category: "festive",
      price: 3199,
      oldPrice: 3799,
      rating: 4.9,
      reviews: 57,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "BESTSELLER",
      image:
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=85",
      description:
        "Statement pearl earrings inspired by the glow of an ocean sunset.",
    },

    {
      id: 8,
      name: "Seafoam Layer Necklace",
      category: "festive",
      price: 3599,
      oldPrice: 4199,
      rating: 4.7,
      reviews: 48,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "",
      image:
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=85",
      description:
        "A layered pearl necklace inspired by foam drifting across the ocean.",
    },

    /* ========================================================
       MINIMAL
    ======================================================== */

    {
      id: 9,
      name: "Quiet Tide Chain",
      category: "minimal",
      price: 1799,
      oldPrice: 2099,
      rating: 4.7,
      reviews: 84,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "MINIMAL",
      image:
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=85",
      description:
        "A fine chain inspired by the quiet rhythm of the shoreline.",
    },

    {
      id: 10,
      name: "Single Pearl Studs",
      category: "minimal",
      price: 1299,
      oldPrice: 1599,
      rating: 4.8,
      reviews: 104,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "ESSENTIAL",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Beautifully simple pearl studs designed for understated elegance.",
    },

    {
      id: 11,
      name: "Sand Bar Ring",
      category: "minimal",
      price: 1499,
      oldPrice: 1799,
      rating: 4.6,
      reviews: 61,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "",
      image:
        "https://images.unsplash.com/photo-1627293509201-cd1e10e8a2e1?auto=format&fit=crop&w=1200&q=85",
      description:
        "A sculpted ring inspired by soft curves formed by waves across sand.",
    },

    {
      id: 12,
      name: "Shoreline Bracelet",
      category: "minimal",
      price: 1999,
      oldPrice: 2299,
      rating: 4.7,
      reviews: 55,
      material:
        "Stainless Steel",
      availability: true,
      badge: "",
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85",
      description:
        "A clean bracelet inspired by the meeting point of water and sand.",
    },

    /* ========================================================
       FOR HER
    ======================================================== */

    {
      id: 13,
      name: "Her Ocean Pearl Pendant",
      category: "for-her",
      price: 2899,
      oldPrice: 3499,
      rating: 5.0,
      reviews: 141,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "FOR HER",
      image:
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=85",
      description:
        "A romantic pearl pendant designed to feel like a piece of moonlight captured from the ocean.",
    },

    {
      id: 14,
      name: "Her Shell Earrings",
      category: "for-her",
      price: 2399,
      oldPrice: 2899,
      rating: 4.9,
      reviews: 91,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "GIFT FAVOURITE",
      image:
        "https://images.unsplash.com/photo-1588444650733-d876b1f2d4c4?auto=format&fit=crop&w=1200&q=85",
      description:
        "Delicate shell-inspired earrings with soft pearl details.",
    },

    {
      id: 15,
      name: "Pearl Bloom Ring",
      category: "for-her",
      price: 2199,
      oldPrice: 2599,
      rating: 4.8,
      reviews: 72,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "",
      image:
        "https://images.unsplash.com/photo-1603561596112-db5d3f3d5e0c?auto=format&fit=crop&w=1200&q=85",
      description:
        "A delicate ring inspired by flowers, pearls and coastal mornings.",
    },

    {
      id: 16,
      name: "Her Love Charm Bracelet",
      category: "for-her",
      price: 2699,
      oldPrice: 3199,
      rating: 4.9,
      reviews: 83,
      material:
        "Stainless Steel",
      availability: true,
      badge: "ROMANTIC",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
      description:
        "A meaningful charm bracelet carrying tiny symbols of love and the ocean.",
    },

    /* ========================================================
       FOR HIM
    ======================================================== */

    {
      id: 17,
      name: "Him Ocean Chain",
      category: "for-him",
      price: 2999,
      oldPrice: 3499,
      rating: 4.8,
      reviews: 69,
      material:
        "Stainless Steel",
      availability: true,
      badge: "FOR HIM",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
      description:
        "A refined chain inspired by the strength and stillness of the open sea.",
    },

    {
      id: 18,
      name: "Coastal Band",
      category: "for-him",
      price: 2199,
      oldPrice: 2599,
      rating: 4.7,
      reviews: 56,
      material:
        "Titanium Steel",
      availability: true,
      badge: "",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
      description:
        "A minimal masculine band with a clean coastal character.",
    },

    {
      id: 19,
      name: "Tide Bracelet",
      category: "for-him",
      price: 2499,
      oldPrice: 2999,
      rating: 4.8,
      reviews: 63,
      material:
        "Stainless Steel",
      availability: true,
      badge: "POPULAR",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=85",
      description:
        "A structured bracelet inspired by waves and coastal stone.",
    },

    {
      id: 20,
      name: "Shell Tag Necklace",
      category: "for-him",
      price: 2799,
      oldPrice: 3199,
      rating: 4.7,
      reviews: 42,
      material:
        "Stainless Steel",
      availability: true,
      badge: "",
      image:
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=85",
      description:
        "A masculine pendant necklace with an organic shell-inspired form.",
    },

    /* ========================================================
       NEW ARRIVALS
    ======================================================== */

    {
      id: 21,
      name: "Pearl Cascade",
      category: "new-arrivals",
      price: 3299,
      oldPrice: 3899,
      rating: 5.0,
      reviews: 31,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "NEW",
      image:
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=85",
      description:
        "A new pearl silhouette designed to move softly like ocean foam.",
    },

    {
      id: 22,
      name: "Tidal Loop Earrings",
      category: "new-arrivals",
      price: 2499,
      oldPrice: 2999,
      rating: 4.9,
      reviews: 29,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "JUST IN",
      image:
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=85",
      description:
        "Sculpted earrings inspired by the circular movement of waves.",
    },

    {
      id: 23,
      name: "Shore Pearl Ring",
      category: "new-arrivals",
      price: 1999,
      oldPrice: 2399,
      rating: 4.8,
      reviews: 38,
      material:
        "925 Sterling Silver",
      availability: true,
      badge: "NEW",
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85",
      description:
        "A fresh interpretation of a classic pearl ring with a coastal silhouette.",
    },

    {
      id: 24,
      name: "Sea Glow Bracelet",
      category: "new-arrivals",
      price: 2799,
      oldPrice: 3299,
      rating: 4.9,
      reviews: 27,
      material:
        "Stainless Steel",
      availability: true,
      badge: "NEW",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
      description:
        "A delicate bracelet inspired by sunlight touching the sea.",
    },
  ];

  /* ==========================================================
     CURRENT COLLECTION
  ========================================================== */

  const collectionProducts = useMemo(() => {
    if (collectionType === "all") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === collectionType
    );
  }, [collectionType]);

  /* ==========================================================
     FILTER + SORT
  ========================================================== */

  const filteredProducts = useMemo(() => {
    let result = [...collectionProducts];

    /* SEARCH */
    if (search.trim()) {
      const searchValue =
        search.trim().toLowerCase();

      result = result.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(searchValue) ||
          product.material
            .toLowerCase()
            .includes(searchValue)
        );
      });
    }

    /* PRICE FILTER */
    if (priceFilter === "under-1500") {
      result = result.filter(
        (product) => product.price < 1500
      );
    }

    if (priceFilter === "1500-2500") {
      result = result.filter(
        (product) =>
          product.price >= 1500 &&
          product.price <= 2500
      );
    }

    if (priceFilter === "2500-4000") {
      result = result.filter(
        (product) =>
          product.price > 2500 &&
          product.price <= 4000
      );
    }

    if (priceFilter === "above-4000") {
      result = result.filter(
        (product) => product.price > 4000
      );
    }

    /* AVAILABILITY */
    if (
      availabilityFilter === "in-stock"
    ) {
      result = result.filter(
        (product) => product.availability
      );
    }

    /* SORT */
    if (sortBy === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "newest") {
      result.sort(
        (a, b) => b.id - a.id
      );
    }

    return result;
  }, [
    collectionProducts,
    search,
    sortBy,
    priceFilter,
    availabilityFilter,
  ]);

  /* ==========================================================
     WISHLIST
  ========================================================== */

  const toggleWishlist = (
    productId,
    event
  ) => {
    event.stopPropagation();

    setWishlist((previous) => {
      if (previous.includes(productId)) {
        return previous.filter(
          (id) => id !== productId
        );
      }

      return [
        ...previous,
        productId,
      ];
    });
  };

  /* ==========================================================
     ADD CART
  ========================================================== */

  const addToCart = (
    product,
    event
  ) => {
    event.stopPropagation();

    setCartMessage(
      product.name
    );

    setTimeout(() => {
      setCartMessage("");
    }, 2200);
  };

  /* ==========================================================
     OPEN PRODUCT DETAILS
  ========================================================== */

  const openProduct = (
    product
  ) => {
    navigate(
      `/product/${product.id}`,
      {
        state: {
          collectionType:
            product.category,
        },
      }
    );
  };

  /* ==========================================================
     CATEGORY SWITCH
  ========================================================== */

  const categories = [
    {
      name: "Everyday",
      type: "everyday",
    },
    {
      name: "Festive",
      type: "festive",
    },
    {
      name: "Minimal",
      type: "minimal",
    },
    {
      name: "For Her",
      type: "for-her",
    },
    {
      name: "For Him",
      type: "for-him",
    },
    {
      name: "New Arrivals",
      type: "new-arrivals",
    },
  ];

  /* ==========================================================
     CLEAR FILTERS
  ========================================================== */

  const clearFilters = () => {
    setSearch("");
    setSortBy("featured");
    setPriceFilter("all");
    setAvailabilityFilter("all");
  };

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <>
      <div
        className="paara-products-page"
        style={{
          "--sea-background": `url("${seaBackground}")`,
        }}
      >
        {/* ====================================================
            PAGE HERO
        ===================================================== */}

        <section className="products-hero page-enter">
          <div className="hero-image" />

          <div className="hero-overlay" />

          <div className="hero-shell hero-shell-one">
            🐚
          </div>

          <div className="hero-shell hero-shell-two">
            🐚
          </div>

          <div className="hero-content">
            <span>
              {activeCollection.eyebrow}
            </span>

            <h1>
              {activeCollection.name}
            </h1>

            <div className="hero-divider">
              <i />
              <b>✦</b>
              <i />
            </div>

            <p className="hero-quote">
              {activeCollection.quote}
            </p>

            <p className="hero-description">
              {activeCollection.description}
            </p>
          </div>
        </section>

        {/* ====================================================
            CATEGORY NAVIGATION
        ===================================================== */}

        <section className="category-strip">
          <div className="category-scroll">
            {categories.map(
              (category) => (
                <button
                  key={category.type}
                  className={
                    category.type ===
                    collectionType
                      ? "category active"
                      : "category"
                  }
                  onClick={() =>
                    navigate(
                      `/products/${category.type}`
                    )
                  }
                >
                  {category.name}
                </button>
              )
            )}
          </div>
        </section>

        {/* ====================================================
            PRODUCTS HEADING
        ===================================================== */}

        <section className="products-intro reveal">
          <span>
            {activeCollection.eyebrow}
          </span>

          <h2>
            {activeCollection.name}
          </h2>

          <p>
            {activeCollection.subtitle}
          </p>

          <div className="intro-divider">
            <i />
            <b>🐚</b>
            <i />
          </div>
        </section>

        {/* ====================================================
            TOOLBAR
        ===================================================== */}

        <section className="toolbar-wrapper">
          <div className="toolbar">
            <div className="result-count">
              {filteredProducts.length}{" "}
              {filteredProducts.length ===
              1
                ? "PIECE"
                : "PIECES"}
            </div>

            <div className="toolbar-controls">
              {/* SEARCH */}

              <div className="search-box">
                <span>⌕</span>

                <input
                  type="text"
                  value={search}
                  placeholder="Search jewellery..."
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                />
              </div>

              {/* FILTER */}

              <button
                className={`filter-button ${
                  showFilters
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setShowFilters(
                    (previous) =>
                      !previous
                  )
                }
              >
                FILTER
                <span>
                  {showFilters
                    ? "−"
                    : "+"}
                </span>
              </button>

              {/* SORT */}

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value
                  )
                }
                aria-label="Sort products"
              >
                <option value="featured">
                  Featured
                </option>

                <option value="newest">
                  Newest
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Top Rated
                </option>
              </select>
            </div>
          </div>

          {/* ==================================================
              FILTER PANEL
          =================================================== */}

          {showFilters && (
            <div className="filter-panel">
              <div className="filter-block">
                <span className="filter-title">
                  PRICE
                </span>

                <div className="filter-options">
                  <button
                    className={
                      priceFilter ===
                      "all"
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() =>
                      setPriceFilter(
                        "all"
                      )
                    }
                  >
                    ALL
                  </button>

                  <button
                    className={
                      priceFilter ===
                      "under-1500"
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() =>
                      setPriceFilter(
                        "under-1500"
                      )
                    }
                  >
                    UNDER ₹1,500
                  </button>

                  <button
                    className={
                      priceFilter ===
                      "1500-2500"
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() =>
                      setPriceFilter(
                        "1500-2500"
                      )
                    }
                  >
                    ₹1,500 – ₹2,500
                  </button>

                  <button
                    className={
                      priceFilter ===
                      "2500-4000"
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() =>
                      setPriceFilter(
                        "2500-4000"
                      )
                    }
                  >
                    ₹2,500 – ₹4,000
                  </button>

                  <button
                    className={
                      priceFilter ===
                      "above-4000"
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() =>
                      setPriceFilter(
                        "above-4000"
                      )
                    }
                  >
                    ABOVE ₹4,000
                  </button>
                </div>
              </div>

              <div className="filter-block">
                <span className="filter-title">
                  AVAILABILITY
                </span>

                <div className="filter-options">
                  <button
                    className={
                      availabilityFilter ===
                      "all"
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() =>
                      setAvailabilityFilter(
                        "all"
                      )
                    }
                  >
                    ALL
                  </button>

                  <button
                    className={
                      availabilityFilter ===
                      "in-stock"
                        ? "filter-option active"
                        : "filter-option"
                    }
                    onClick={() =>
                      setAvailabilityFilter(
                        "in-stock"
                      )
                    }
                  >
                    IN STOCK
                  </button>
                </div>
              </div>

              <button
                className="clear-filters"
                onClick={
                  clearFilters
                }
              >
                CLEAR ALL
              </button>
            </div>
          )}
        </section>

        {/* ====================================================
            PRODUCT GRID
        ===================================================== */}

        <main className="product-grid-section">
          {filteredProducts.length >
          0 ? (
            <div className="product-grid">
              {filteredProducts.map(
                (
                  product,
                  index
                ) => {
                  const liked =
                    wishlist.includes(
                      product.id
                    );

                  return (
                    <article
                      className="product-card"
                      key={product.id}
                      style={{
                        animationDelay: `${
                          index * 50
                        }ms`,
                      }}
                    >
                      {/* PRODUCT IMAGE */}

                      <div
                        className="product-image-wrapper"
                        onClick={() =>
                          openProduct(
                            product
                          )
                        }
                      >
                        <div className="product-image">
                          <img
                            src={
                              product.image
                            }
                            alt={
                              product.name
                            }
                            loading="lazy"
                          />
                        </div>

                        {product.badge && (
                          <span className="product-badge">
                            {
                              product.badge
                            }
                          </span>
                        )}

                        <button
                          className={`wishlist ${
                            liked
                              ? "liked"
                              : ""
                          }`}
                          onClick={(
                            event
                          ) =>
                            toggleWishlist(
                              product.id,
                              event
                            )
                          }
                          aria-label={
                            liked
                              ? "Remove from wishlist"
                              : "Add to wishlist"
                          }
                        >
                          {liked
                            ? "♥"
                            : "♡"}
                        </button>

                        <div className="image-hover">
                          VIEW PIECE
                          <span>
                            →
                          </span>
                        </div>
                      </div>

                      {/* PRODUCT INFORMATION */}

                      <div className="product-info">
                        <span className="product-category">
                          {product.category
                            .replace(
                              "-",
                              " "
                            )
                            .toUpperCase()}
                        </span>

                        <h3
                          onClick={() =>
                            openProduct(
                              product
                            )
                          }
                        >
                          {
                            product.name
                          }
                        </h3>

                        <div className="rating">
                          <span>
                            ★★★★★
                          </span>

                          <small>
                            {product.rating}
                            {" "}
                            (
                            {
                              product.reviews
                            }
                            )
                          </small>
                        </div>

                        <div className="price-row">
                          <strong>
                            ₹
                            {product.price.toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                          <del>
                            ₹
                            {product.oldPrice.toLocaleString(
                              "en-IN"
                            )}
                          </del>
                        </div>

                        <button
                          className={`cart-button ${
                            cartMessage ===
                            product.name
                              ? "added"
                              : ""
                          }`}
                          onClick={(
                            event
                          ) =>
                            addToCart(
                              product,
                              event
                            )
                          }
                        >
                          {cartMessage ===
                          product.name
                            ? "✓ ADDED"
                            : "ADD TO CART"}
                        </button>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-shell">
                🐚
              </div>

              <span>
                PAARA JEWELLERY
              </span>

              <h3>
                Nothing beneath this tide
              </h3>

              <p>
                Try another search or
                remove some filters.
              </p>

              <button
                onClick={
                  clearFilters
                }
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </main>

        {/* ====================================================
            OCEAN STORY
        ===================================================== */}

        <section className="ocean-story">
          <div className="ocean-story-image" />

          <div className="ocean-story-overlay" />

          <div className="ocean-story-content">
            <span>
              INSPIRED BY THE SEA
            </span>

            <h2>
              Every piece
              <br />
              carries a little ocean.
            </h2>

            <p>
              Pearls, shells, sunlight and
              saltwater — nature is the heart
              of Paara.
            </p>

            <div className="ocean-divider">
              <i />
              <b>🐚</b>
              <i />
            </div>
          </div>
        </section>

        {/* ====================================================
            CART FEEDBACK
        ===================================================== */}

        {cartMessage && (
          <div className="cart-toast">
            <span>✓</span>

            <div>
              <strong>
                Added to bag
              </strong>

              <small>
                {cartMessage}
              </small>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================
          ALL CSS IN SAME FILE
      ======================================================== */}

      <style>{`
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
          --paara-ivory: #fcf9f3;
          --paara-sand: #eee6d9;
          --paara-brown: #4f453b;
          --paara-soft: #756a5f;
          --paara-gold: #a67b42;
          --paara-line: rgba(128, 105, 73, .16);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .paara-products-page {
          width: 100%;
          min-width: 0;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 12% 15%,
              rgba(100, 181, 184, .055),
              transparent 22%
            ),
            radial-gradient(
              circle at 90% 70%,
              rgba(204, 168, 108, .07),
              transparent 25%
            ),
            var(--paara-cream);
          color: var(--paara-brown);
          font-family: "Brilliant Cut", serif;
          font-weight: 300;
        }

        .paara-products-page button,
        .paara-products-page input,
        .paara-products-page select {
          font-family: "Brilliant Cut", serif;
          font-weight: 300;
        }

        /* =====================================================
           PAGE ANIMATION
        ====================================================== */

        .page-enter {
          animation:
            pageEnter
            .75s
            cubic-bezier(.22,.61,.36,1)
            both;
        }

        .reveal {
          animation:
            revealIn
            .8s
            cubic-bezier(.22,.61,.36,1)
            both;
        }

        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           HERO
        ====================================================== */

        .products-hero {
          position: relative;
          width: 100%;
          min-height: clamp(
            450px,
            62vh,
            700px
          );
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(248,244,237,.94),
              rgba(248,244,237,.70) 37%,
              rgba(248,244,237,.20) 75%,
              rgba(248,244,237,.07)
            ),
            var(--sea-background);
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 72% 25%,
              rgba(255,255,255,.16),
              transparent 22%
            );
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: min(90vw, 1600px);
          margin: auto;
          padding:
            clamp(55px, 8vw, 110px)
            0;
        }

        .hero-content > span {
          display: inline-block;
          color: var(--paara-gold);
          font-size: 9px;
          letter-spacing: .34em;
          margin-bottom: 16px;
        }

        .hero-content h1 {
          margin: 0;
          color: #342d26;
          font-size: clamp(
            54px,
            8vw,
            110px
          );
          line-height: .86;
          font-weight: 300;
          letter-spacing: -.035em;
        }

        .hero-divider {
          width: min(180px, 42vw);
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 23px 0 20px;
        }

        .hero-divider i {
          flex: 1;
          height: 1px;
          background: rgba(163,126,73,.42);
        }

        .hero-divider b {
          color: var(--paara-gold);
          font-weight: 300;
        }

        .hero-quote {
          width: min(
            100%,
            720px
          );
          margin: 0 0 12px;
          font-size: clamp(
            16px,
            1.4vw,
            22px
          );
          line-height: 1.45;
          color: #5d5348;
        }

        .hero-description {
          width: min(
            100%,
            630px
          );
          margin: 0;
          color: #73685d;
          font-size: clamp(
            11px,
            .9vw,
            14px
          );
          line-height: 1.8;
        }

        .hero-shell {
          position: absolute;
          z-index: 2;
          pointer-events: none;
          opacity: .42;
          animation:
            shellFloat
            7s
            ease-in-out
            infinite;
        }

        .hero-shell-one {
          right: 8%;
          bottom: 3%;
          font-size: clamp(
            65px,
            8vw,
            150px
          );
        }

        .hero-shell-two {
          right: 27%;
          top: 10%;
          font-size: clamp(
            35px,
            3vw,
            60px
          );
          animation-delay: 1s;
        }

        /* =====================================================
           CATEGORY STRIP
        ====================================================== */

        .category-strip {
          position: sticky;
          top: 0;
          z-index: 20;
          width: 100%;
          background: rgba(251,248,242,.94);
          border-top: 1px solid var(--paara-line);
          border-bottom: 1px solid var(--paara-line);
          backdrop-filter: blur(17px);
        }

        .category-scroll {
          width: min(100%, 1300px);
          margin: auto;
          display: flex;
          justify-content: center;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .category-scroll::-webkit-scrollbar {
          display: none;
        }

        .category {
          flex: 0 0 auto;
          position: relative;
          padding: 18px 22px;
          border: 0;
          background: transparent;
          color: #71675d;
          font-size: 9px;
          letter-spacing: .14em;
          transition:
            color .25s ease,
            transform .25s ease;
        }

        .category:hover,
        .category.active {
          color: #9e733c;
        }

        .category.active::after {
          content: "";
          position: absolute;
          bottom: 7px;
          left: 50%;
          width: 23px;
          height: 1px;
          transform: translateX(-50%);
          background: #a77a42;
        }

        /* =====================================================
           INTRO
        ====================================================== */

        .products-intro {
          width: min(90vw, 950px);
          margin: auto;
          padding:
            clamp(65px, 8vw, 110px)
            0
            40px;
          text-align: center;
        }

        .products-intro > span {
          color: var(--paara-gold);
          font-size: 8px;
          letter-spacing: .34em;
        }

        .products-intro h2 {
          margin:
            11px 0
            8px;
          color: #342e27;
          font-size: clamp(
            45px,
            5.5vw,
            75px
          );
          line-height: .92;
          font-weight: 300;
          letter-spacing: -.03em;
        }

        .products-intro p {
          margin: 0;
          color: #786e63;
          font-size: clamp(
            10px,
            .9vw,
            13px
          );
        }

        .intro-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 19px;
        }

        .intro-divider i {
          width: 57px;
          height: 1px;
          background: rgba(164,127,76,.36);
        }

        .intro-divider b {
          color: #a37942;
          font-weight: 300;
        }

        /* =====================================================
           TOOLBAR
        ====================================================== */

        .toolbar-wrapper {
          width: min(94vw, 1750px);
          margin: auto;
          padding-bottom: 28px;
        }

        .toolbar {
          width: 100%;
          min-height: 57px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid var(--paara-line);
        }

        .result-count {
          color: #8b8074;
          font-size: 8px;
          letter-spacing: .18em;
          white-space: nowrap;
        }

        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .search-box {
          width: clamp(
            170px,
            18vw,
            280px
          );
          height: 36px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 4px;
          border-bottom: 1px solid #cbbba4;
        }

        .search-box span {
          color: #947047;
          font-size: 18px;
        }

        .search-box input {
          min-width: 0;
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #554b41;
          font-size: 9px;
        }

        .search-box input::placeholder {
          color: #9c9286;
        }

        .filter-button,
        .toolbar select {
          height: 36px;
          padding: 0 12px;
          border: 1px solid rgba(130,106,73,.22);
          background: #fcf9f3;
          color: #6e6359;
          font-size: 8px;
          letter-spacing: .1em;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .filter-button span {
          font-size: 12px;
        }

        .filter-button:hover,
        .filter-button.active {
          color: white;
          border-color: #a87b42;
          background: #a87b42;
        }

        .toolbar select {
          outline: 0;
        }

        /* =====================================================
           FILTER PANEL
        ====================================================== */

        .filter-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding:
            18px
            0
            7px;
          border-bottom: 1px solid var(--paara-line);
          animation:
            filterOpen
            .35s
            ease both;
        }

        .filter-block {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .filter-title {
          color: #81766a;
          font-size: 8px;
          letter-spacing: .18em;
        }

        .filter-options {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
        }

        .filter-option {
          padding: 8px 11px;
          border: 1px solid rgba(130,106,73,.18);
          background: transparent;
          color: #776c61;
          font-size: 7px;
          letter-spacing: .06em;
          transition:
            background .25s ease,
            color .25s ease,
            border-color .25s ease;
        }

        .filter-option:hover,
        .filter-option.active {
          color: white;
          background: #a97b43;
          border-color: #a97b43;
        }

        .clear-filters {
          border: 0;
          border-bottom: 1px solid #b38a54;
          background: transparent;
          color: #936b3a;
          padding: 6px 0;
          white-space: nowrap;
          font-size: 7px;
          letter-spacing: .13em;
        }

        @keyframes filterOpen {
          from {
            opacity: 0;
            transform: translateY(-7px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           PRODUCT GRID
        ====================================================== */

        .product-grid-section {
          width: min(94vw, 1750px);
          margin: auto;
          padding:
            0 0
            clamp(75px, 9vw, 135px);
        }

        .product-grid {
          display: grid;
          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );
          gap: clamp(
            14px,
            1.9vw,
            32px
          );
        }

        .product-card {
          min-width: 0;
          opacity: 0;
          transform: translateY(15px);
          animation:
            cardIn
            .65s
            cubic-bezier(.22,.61,.36,1)
            forwards;
        }

        @keyframes cardIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .product-image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          cursor: pointer;
          background: #eee6d9;
          border: 1px solid rgba(130,106,73,.13);
        }

        .product-image {
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition:
            transform
            .75s
            cubic-bezier(.22,.61,.36,1);
        }

        .product-image-wrapper:hover
        .product-image img {
          transform: scale(1.055);
        }

        .product-badge {
          position: absolute;
          top: 13px;
          left: 13px;
          padding: 6px 9px;
          background: rgba(252,249,243,.91);
          color: #936b3a;
          border: 1px solid rgba(151,117,69,.13);
          font-size: 6px;
          letter-spacing: .16em;
          backdrop-filter: blur(7px);
        }

        .wishlist {
          position: absolute;
          top: 11px;
          right: 11px;
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(139,113,76,.17);
          background: rgba(252,249,243,.9);
          color: #6d6257;
          font-size: 19px;
          transition:
            transform .25s ease,
            color .25s ease;
        }

        .wishlist:hover {
          transform: scale(1.08);
        }

        .wishlist.liked {
          color: #a15c51;
          animation:
            heartPop
            .3s
            ease;
        }

        .image-hover {
          position: absolute;
          left: 50%;
          bottom: 16px;
          transform: translateX(-50%)
            translateY(7px);
          padding: 8px 13px;
          border: 1px solid rgba(255,255,255,.58);
          background: rgba(35,35,32,.2);
          color: white;
          white-space: nowrap;
          font-size: 7px;
          letter-spacing: .17em;
          opacity: 0;
          transition:
            opacity .3s ease,
            transform .3s ease;
          backdrop-filter: blur(8px);
        }

        .image-hover span {
          margin-left: 9px;
          font-size: 11px;
        }

        .product-image-wrapper:hover
        .image-hover {
          opacity: 1;
          transform:
            translateX(-50%)
            translateY(0);
        }

        .product-info {
          padding:
            15px
            4px
            8px;
          text-align: center;
        }

        .product-category {
          display: block;
          color: #a07742;
          font-size: 6px;
          letter-spacing: .2em;
          margin-bottom: 6px;
        }

        .product-info h3 {
          margin: 0;
          color: #393229;
          font-size: clamp(
            18px,
            1.45vw,
            25px
          );
          line-height: 1.03;
          font-weight: 300;
          cursor: pointer;
        }

        .rating {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
        }

        .rating span {
          color: #ac7d3d;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .rating small {
          color: #91877c;
          font-size: 7px;
        }

        .price-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }

        .price-row strong {
          color: #463d34;
          font-size: 12px;
          font-weight: 300;
        }

        .price-row del {
          color: #9a9085;
          font-size: 9px;
        }

        .cart-button {
          width: 100%;
          max-width: 180px;
          height: 37px;
          margin-top: 12px;
          border: 1px solid #c3a77d;
          background: transparent;
          color: #936a37;
          font-size: 7px;
          letter-spacing: .16em;
          transition:
            background .3s ease,
            color .3s ease,
            border-color .3s ease;
        }

        .cart-button:hover {
          color: white;
          background: #a97b42;
          border-color: #a97b42;
        }

        .cart-button.added {
          color: white;
          background: #668674;
          border-color: #668674;
        }

        /* =====================================================
           EMPTY STATE
        ====================================================== */

        .empty-state {
          min-height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .empty-shell {
          font-size: 58px;
          opacity: .55;
        }

        .empty-state > span {
          margin-top: 14px;
          color: #9c7541;
          font-size: 8px;
          letter-spacing: .3em;
        }

        .empty-state h3 {
          margin:
            12px 0
            8px;
          color: #393229;
          font-size: 36px;
          font-weight: 300;
        }

        .empty-state p {
          margin: 0;
          color: #796f63;
          font-size: 11px;
        }

        .empty-state button {
          margin-top: 20px;
          padding: 11px 18px;
          border: 1px solid #b18a57;
          background: transparent;
          color: #946c3a;
          font-size: 7px;
          letter-spacing: .16em;
        }

        /* =====================================================
           OCEAN STORY
        ====================================================== */

        .ocean-story {
          position: relative;
          width: 100%;
          min-height: clamp(
            360px,
            47vh,
            540px
          );
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .ocean-story-image {
          position: absolute;
          inset: 0;
          background:
            var(--sea-background);
          background-size: cover;
          background-position: center;
        }

        .ocean-story-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              rgba(24,78,81,.71),
              rgba(27,88,90,.80)
            );
        }

        .ocean-story-content {
          position: relative;
          z-index: 2;
          width: min(90vw, 800px);
          padding: 70px 20px;
          color: white;
        }

        .ocean-story-content > span {
          font-size: 8px;
          letter-spacing: .34em;
          opacity: .88;
        }

        .ocean-story-content h2 {
          margin:
            18px 0
            19px;
          font-size: clamp(
            48px,
            6vw,
            82px
          );
          line-height: .91;
          font-weight: 300;
          letter-spacing: -.03em;
        }

        .ocean-story-content p {
          width: min(100%, 600px);
          margin: auto;
          font-size: clamp(
            12px,
            1vw,
            17px
          );
          line-height: 1.65;
          opacity: .92;
        }

        .ocean-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 27px;
        }

        .ocean-divider i {
          width: 70px;
          max-width: 15vw;
          height: 1px;
          background: rgba(255,255,255,.35);
        }

        .ocean-divider b {
          font-weight: 300;
        }

        /* =====================================================
           CART TOAST
        ====================================================== */

        .cart-toast {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 500;
          min-width: 255px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          background: rgba(252,249,243,.97);
          border: 1px solid rgba(145,115,72,.18);
          box-shadow:
            0
            18px
            45px
            rgba(56,45,33,.16);
          backdrop-filter: blur(15px);
          animation:
            toastIn
            .35s
            ease
            both;
        }

        .cart-toast > span {
          width: 31px;
          height: 31px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #698675;
          color: white;
          font-size: 13px;
        }

        .cart-toast strong {
          display: block;
          color: #564c42;
          font-size: 9px;
        }

        .cart-toast small {
          display: block;
          margin-top: 3px;
          color: #8d8276;
          font-size: 7px;
        }

        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes shellFloat {
          0%,
          100% {
            transform:
              translateY(0)
              rotate(-7deg);
          }

          50% {
            transform:
              translateY(-10px)
              rotate(4deg);
          }
        }

        @keyframes heartPop {
          0% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.24);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translateY(14px);
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
          .product-grid {
            gap: 30px;
          }

          .product-image {
            aspect-ratio: 4 / 4.85;
          }
        }

        /* =====================================================
           LAPTOP
        ====================================================== */

        @media (
          min-width: 1100px
        ) and (
          max-width: 1439px
        ) {
          .product-grid {
            grid-template-columns:
              repeat(
                4,
                minmax(0,1fr)
              );
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (
          min-width: 761px
        ) and (
          max-width: 1099px
        ) {
          .product-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0,1fr)
              );
          }

          .toolbar {
            flex-wrap: wrap;
            padding: 15px 0;
          }

          .filter-panel {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        /* =====================================================
           MOBILE FIRST
        ====================================================== */

        @media (max-width: 760px) {
          .products-hero {
            min-height: 590px;
          }

          .hero-content {
            width: calc(100% - 34px);
          }

          .hero-content h1 {
            font-size: clamp(
              47px,
              13vw,
              66px
            );
          }

          .hero-quote {
            font-size: 16px;
          }

          .hero-description {
            font-size: 10px;
          }

          .hero-shell-one {
            right: -4%;
            bottom: 1%;
            opacity: .28;
          }

          .hero-shell-two {
            right: 12%;
            top: 9%;
            opacity: .25;
          }

          .category-scroll {
            justify-content: flex-start;
          }

          .category {
            padding:
              17px
              15px;
            font-size: 8px;
          }

          .products-intro {
            width: calc(100% - 30px);
          }

          .toolbar-wrapper {
            width: calc(100% - 28px);
          }

          .toolbar {
            align-items: stretch;
            flex-direction: column;
            padding:
              0
              0
              15px;
          }

          .toolbar-controls {
            width: 100%;
            display: grid;
            grid-template-columns:
              1fr
              auto;
            gap: 8px;
          }

          .search-box {
            width: 100%;
            grid-column: 1 / -1;
          }

          .filter-button {
            justify-content: center;
          }

          .toolbar select {
            width: 100%;
          }

          .filter-panel {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .filter-block {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
            gap: 9px;
          }

          .filter-options {
            width: 100%;
          }

          .filter-option {
            flex: 1 1 auto;
          }

          .clear-filters {
            align-self: flex-end;
          }

          .product-grid-section {
            width: calc(100% - 28px);
          }

          .product-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0,1fr)
              );
            gap: 11px;
          }

          .product-image {
            aspect-ratio: 4 / 5;
          }

          .product-badge {
            top: 8px;
            left: 8px;
            padding:
              5px
              7px;
            font-size: 5px;
          }

          .wishlist {
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            font-size: 16px;
          }

          .image-hover {
            display: none;
          }

          .product-info {
            padding:
              12px
              2px
              6px;
          }

          .product-category {
            font-size: 5px;
          }

          .product-info h3 {
            font-size: clamp(
              17px,
              5.2vw,
              22px
            );
          }

          .rating span {
            font-size: 6px;
          }

          .rating small {
            font-size: 6px;
          }

          .price-row {
            gap: 5px;
          }

          .price-row strong {
            font-size: 10px;
          }

          .price-row del {
            font-size: 7px;
          }

          .cart-button {
            height: 34px;
            margin-top: 9px;
            font-size: 6px;
          }

          .empty-state {
            min-height: 350px;
          }

          .ocean-story-content {
            width: calc(100% - 26px);
          }

          .ocean-story-content h2 {
            font-size: clamp(
              45px,
              11vw,
              60px
            );
          }

          .ocean-story-content p {
            font-size: 13px;
          }

          .cart-toast {
            left: 14px;
            right: 14px;
            bottom: 14px;
            min-width: 0;
          }
        }

        /* =====================================================
           SMALL PHONES
        ====================================================== */

        @media (max-width: 390px) {
          .products-hero {
            min-height: 560px;
          }

          .product-grid {
            gap: 8px;
          }

          .product-info h3 {
            font-size: 16px;
          }

          .product-category {
            font-size: 4.5px;
          }

          .cart-button {
            font-size: 5.5px;
          }

          .filter-option {
            padding:
              7px
              8px;
          }
        }

        /* =====================================================
           REDUCE MOTION
        ====================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .page-enter,
          .reveal,
          .product-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .hero-shell {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Product;