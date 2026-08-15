import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const navigate = useNavigate();
  const [activeCollection, setActiveCollection] = useState("everyday");

  const seaBackground =
    "https://img.freepik.com/premium-photo/banner-summer-background-with-white-sand-seashell-starfish-beach_756748-104227.jpg?w=2000";

  const collections = [
    {
      id: 1,
      name: "Everyday",
      subtitle: "Little pieces for every day",
      type: "everyday",
      placeholder: "EVERYDAY",
      quote: "Little treasures for the moments that quietly matter.",
      description:
        "Delicate pearls, graceful chains and effortless pieces designed to become part of your everyday story.",
      imagePosition: "center",
      accent: "ocean",
    },
    {
      id: 2,
      name: "Festive",
      subtitle: "Made for moments worth celebrating",
      type: "festive",
      placeholder: "FESTIVE",
      quote: "Some moments deserve a little more sparkle.",
      description:
        "Statement pieces inspired by moonlit shores, golden sunsets and celebrations that stay with you.",
      imagePosition: "center right",
      accent: "gold",
    },
    {
      id: 3,
      name: "Minimal",
      subtitle: "Simple. Elegant. You.",
      type: "minimal",
      placeholder: "MINIMAL",
      quote: "Elegance lives in the details left untouched.",
      description:
        "Clean silhouettes, subtle shine and timeless forms for those who believe less can say more.",
      imagePosition: "left center",
      accent: "sand",
    },
    {
      id: 4,
      name: "For Her",
      subtitle: "She'll love this",
      type: "for-her",
      placeholder: "FOR HER",
      quote: "Give a girl the right jewellery and she can conquer the world.",
      description:
        "Soft pearls, feminine curves and ocean-inspired details chosen for the women who make every day beautiful.",
      imagePosition: "center",
      accent: "rose",
      romantic: true,
    },
    {
      id: 5,
      name: "For Him",
      subtitle: "Just for him",
      type: "for-him",
      placeholder: "FOR HIM",
      quote: "Crafted for kings of the modern world.",
      description:
        "Refined pieces with natural textures, sculpted metals and understated character for modern masculinity.",
      imagePosition: "center",
      accent: "deepSea",
      romantic: true,
    },
    {
      id: 6,
      name: "New Arrivals",
      subtitle: "Something new to love",
      type: "new-arrivals",
      placeholder: "NEW",
      quote: "A new tide brings something beautiful.",
      description:
        "Fresh silhouettes and newly discovered treasures inspired by the colours, textures and calm of the coast.",
      imagePosition: "center left",
      accent: "turquoise",
    },
  ];

  const activeData = collections.find(
    (collection) => collection.type === activeCollection
  );

  const handleCollectionClick = (collection) => {
    setActiveCollection(collection.type);

    // For Her / For Him remain on this page and reveal
    // their special story/quote section.
    if (collection.type === "for-her" || collection.type === "for-him") {
      setTimeout(() => {
        document
          .getElementById("collection-story")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 80);
    } else {
      setTimeout(() => {
        document
          .getElementById("collection-story")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 80);
    }
  };

  const goToProducts = () => {
    navigate(`/products/${activeCollection}`);
  };

  return (
    <>
      <div
        className="paara-page"
        style={{
          "--sea-bg": `url("${seaBackground}")`,
        }}
      >
        {/* =====================================================
            NAVBAR
        ====================================================== */}
        <header className="paara-navbar">
          <div className="brand-block">
            <div className="brand-script">Paara</div>
            <span className="brand-subtitle">JEWELLERY</span>
          </div>

          <nav className="desktop-nav">
            <button
              className="nav-link"
              onClick={() => navigate("/")}
            >
              Home
            </button>

            <button
              className="nav-link active"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Collections
            </button>

            <button
              className="nav-link"
              onClick={() => navigate("/products/all")}
            >
              Shop
            </button>

            <button className="nav-link">Our Story</button>

            <button className="nav-link">Journal</button>
          </nav>

          <div className="nav-actions">
            <button className="nav-icon" aria-label="Wishlist">
              ♡
            </button>

            <button className="nav-icon" aria-label="Bag">
              ♧
            </button>

            <button className="nav-icon" aria-label="Account">
              ◯
            </button>

            <button className="nav-icon menu-icon" aria-label="Menu">
              ☰
            </button>
          </div>
        </header>

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="collections-hero">
          <div className="hero-shell shell-one">🐚</div>
          <div className="hero-shell shell-two">🐚</div>
          <div className="hero-star">✦</div>

          <div className="hero-overlay" />

          <div className="hero-content">
            <span className="hero-kicker">
              INSPIRED BY THE OCEAN
            </span>

            <h1>
              JEWELLERY
              <br />
              MADE TO BE LOVED
            </h1>

            <p>
              Discover pieces shaped by the beauty of the sea,
              the softness of pearls and the quiet elegance of
              nature.
            </p>

            <div className="hero-divider">
              <span />
              <small>✦</small>
              <span />
            </div>
          </div>
        </section>

        {/* =====================================================
            COLLECTION INTRO
        ====================================================== */}
        <section className="collection-intro">
          <span className="section-mini-title">
            EXPLORE THE TIDE
          </span>

          <h2>Find Your Collection</h2>

          <p>
            From delicate everyday treasures to pieces made for
            unforgettable moments, every Paara collection carries
            a little piece of the ocean.
          </p>
        </section>

        {/* =====================================================
            COLLECTION GRID
        ====================================================== */}
        <section className="collection-grid-section">
          <div className="collection-grid">
            {collections.map((collection) => {
              const isActive =
                collection.type === activeCollection;

              return (
                <button
                  key={collection.id}
                  className={`collection-card ${
                    isActive ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleCollectionClick(collection)
                  }
                  type="button"
                >
                  <div
                    className="collection-card-image"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          rgba(255,255,255,0.03),
                          rgba(255,255,255,0.28)
                        ),
                        var(--sea-bg)
                      `,
                      backgroundPosition:
                        collection.imagePosition,
                    }}
                  >
                    <div className="image-water-glow" />

                    <div className="shell-decoration">
                      {collection.type === "for-her"
                        ? "♡"
                        : collection.type === "for-him"
                        ? "✦"
                        : "🐚"}
                    </div>

                    <span className="card-number">
                      0{collection.id}
                    </span>

                    <div className="card-bottom-gradient" />
                  </div>

                  <div className="collection-card-content">
                    <span className="collection-card-small">
                      {collection.type === "for-her"
                        ? "A GIFT FROM THE HEART"
                        : collection.type === "for-him"
                        ? "QUIETLY REFINED"
                        : "PAARA COLLECTION"}
                    </span>

                    <h3>{collection.name}</h3>

                    <p>{collection.subtitle}</p>

                    <span className="collection-arrow">
                      EXPLORE <span>→</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            ACTIVE COLLECTION STORY
        ====================================================== */}
        <section
          className={`collection-story-section accent-${activeData.accent}`}
          id="collection-story"
        >
          <div className="story-watermark">
            {activeData.placeholder}
          </div>

          <div className="story-shell-left">🐚</div>
          <div className="story-shell-right">✦ 🐚</div>

          <div className="story-content">
            <div className="story-label">
              SELECTED COLLECTION
            </div>

            <div className="story-main">
              <div className="story-copy">
                <span className="story-eyebrow">
                  {activeData.name.toUpperCase()}
                </span>

                <h2>
                  {activeData.quote}
                </h2>

                <p>
                  {activeData.description}
                </p>

                {/* SPECIAL QUOTE FOR HER */}
                {activeData.type === "for-her" && (
                  <div className="special-love-quote">
                    <span className="quote-mark">“</span>

                    <p>
                      She deserves jewellery that feels like
                      sunlight on the sea — soft, warm and
                      impossible to forget.
                    </p>

                    <small>
                      — PAARA, FOR HER
                    </small>
                  </div>
                )}

                {/* SPECIAL QUOTE FOR HIM */}
                {activeData.type === "for-him" && (
                  <div className="special-love-quote male-quote">
                    <span className="quote-mark">“</span>

                    <p>
                      For the one whose presence feels like
                      standing beside the ocean — calm,
                      grounded and timeless.
                    </p>

                    <small>
                      — PAARA, FOR HIM
                    </small>
                  </div>
                )}

                <button
                  className="explore-button"
                  onClick={goToProducts}
                >
                  EXPLORE {activeData.name.toUpperCase()}
                  <span>→</span>
                </button>
              </div>

              <div className="story-visual">
                <div className="visual-frame">
                  <div className="visual-image">
                    <div className="visual-overlay" />

                    <div className="visual-shell shell-a">
                      🐚
                    </div>

                    <div className="visual-shell shell-b">
                      🐚
                    </div>

                    <div className="visual-pearl pearl-a" />
                    <div className="visual-pearl pearl-b" />
                    <div className="visual-pearl pearl-c" />

                    <div className="visual-caption">
                      <span>PAARA</span>
                      <small>
                        Shaped by the sea
                      </small>
                    </div>
                  </div>
                </div>

                <div className="visual-side-note">
                  <span>01</span>
                  <div />
                  <span>OCEAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOVE / OCEAN STATEMENT
        ====================================================== */}
        <section className="ocean-love-section">
          <div className="ocean-love-bg" />

          <div className="ocean-content">
            <span>THE PAARA PHILOSOPHY</span>

            <h2>
              Made by the sea.
              <br />
              Meant for love.
            </h2>

            <p>
              Every piece begins with a feeling — the calm of
              ocean waves, the glow of sunlight over water and
              the little moments we wish could last forever.
            </p>

            <div className="wave-divider">
              <span />
              <span>🐚</span>
              <span />
            </div>
          </div>
        </section>

      </div>
      <>
  <Navbar />

  {/* Product page content */}

  <Footer />
</>

      {/* =====================================================
          ALL CSS IS INSIDE THIS JSX FILE
      ====================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #f6f2eb;
          color: #302a24;
          font-family: "DM Sans", sans-serif;
        }

        button,
        input {
          font: inherit;
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
        }

        .paara-page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(214, 231, 225, 0.27),
              transparent 28%
            ),
            radial-gradient(
              circle at 86% 75%,
              rgba(215, 187, 137, 0.12),
              transparent 28%
            ),
            #f8f4ed;
        }

        /* =====================================================
           NAVBAR
        ====================================================== */

        .paara-navbar {
          height: 78px;
          padding: 0 4.8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(251, 248, 242, 0.95);
          border-bottom: 1px solid rgba(135, 112, 75, 0.14);
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
        }

        .brand-block {
          min-width: 170px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }

        .brand-script {
          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-size: 39px;
          line-height: 28px;
          color: #886633;
          letter-spacing: -1.5px;
        }

        .brand-subtitle {
          margin-left: 18px;
          margin-top: 9px;
          font-size: 8px;
          letter-spacing: 3px;
          color: #6d6256;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .nav-link {
          font-size: 12px;
          color: #574e45;
          position: relative;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #a47b3f;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          width: 18px;
          height: 1px;
          margin: auto;
          background: #b79257;
        }

        .nav-actions {
          min-width: 170px;
          display: flex;
          justify-content: flex-end;
          gap: 19px;
        }

        .nav-icon {
          width: 28px;
          height: 28px;
          color: #655b50;
          font-size: 20px;
          transition:
            transform 0.25s ease,
            color 0.25s ease;
        }

        .nav-icon:hover {
          color: #ac8245;
          transform: translateY(-2px);
        }

        .menu-icon {
          font-size: 18px;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .collections-hero {
          min-height: 510px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 75px 8%;
          background:
            linear-gradient(
              90deg,
              rgba(248, 243, 235, 0.95) 0%,
              rgba(248, 243, 235, 0.77) 39%,
              rgba(248, 243, 235, 0.15) 75%,
              rgba(248, 243, 235, 0.06) 100%
            ),
            var(--sea-bg);
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 70% 30%,
              rgba(255,255,255,0.15),
              transparent 30%
            ),
            linear-gradient(
              to bottom,
              transparent,
              rgba(240, 231, 217, 0.16)
            );
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
        }

        .hero-kicker {
          font-size: 11px;
          letter-spacing: 5px;
          color: #997544;
          display: inline-block;
          margin-bottom: 19px;
        }

        .hero-content h1 {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-size: clamp(56px, 6vw, 88px);
          line-height: 0.88;
          letter-spacing: -2.5px;
          color: #2f2923;
        }

        .hero-content p {
          max-width: 475px;
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          line-height: 1.55;
          color: #5f5448;
          margin: 28px 0 24px;
        }

        .hero-divider {
          display: flex;
          width: 180px;
          align-items: center;
          gap: 11px;
        }

        .hero-divider span {
          flex: 1;
          height: 1px;
          background: rgba(170, 136, 81, 0.45);
        }

        .hero-divider small {
          color: #aa7d42;
        }

        .hero-shell {
          position: absolute;
          z-index: 1;
          opacity: 0.62;
          font-size: 55px;
          filter: blur(0.15px);
          animation: shellFloat 7s ease-in-out infinite;
        }

        .shell-one {
          right: 10%;
          bottom: 24px;
          font-size: 94px;
          transform: rotate(-12deg);
        }

        .shell-two {
          right: 29%;
          top: 45px;
          font-size: 42px;
          animation-delay: 1.4s;
        }

        .hero-star {
          position: absolute;
          right: 17%;
          top: 30%;
          color: rgba(255,255,255,0.75);
          font-size: 25px;
          animation: sparkle 3s ease-in-out infinite;
        }

        /* =====================================================
           INTRO
        ====================================================== */

        .collection-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 92px 22px 48px;
        }

        .section-mini-title {
          color: #aa8249;
          letter-spacing: 4px;
          font-size: 10px;
        }

        .collection-intro h2 {
          margin: 13px 0 10px;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(42px, 4.5vw, 60px);
          font-weight: 500;
          color: #332c24;
        }

        .collection-intro p {
          margin: auto;
          max-width: 650px;
          color: #71665b;
          font-size: 14px;
          line-height: 1.8;
        }

        /* =====================================================
           COLLECTION GRID
        ====================================================== */

        .collection-grid-section {
          padding: 10px 5% 85px;
        }

        .collection-grid {
          max-width: 1420px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .collection-card {
          position: relative;
          text-align: left;
          background: #f4eee5;
          border: 1px solid rgba(141, 117, 78, 0.14);
          overflow: hidden;
          padding: 0;
          box-shadow: 0 12px 35px rgba(82, 61, 36, 0.07);
          transition:
            transform 0.45s cubic-bezier(.22,.61,.36,1),
            box-shadow 0.45s ease,
            border-color 0.45s ease;
        }

        .collection-card:hover {
          transform: translateY(-7px);
          box-shadow:
            0 24px 50px rgba(82, 61, 36, 0.13);
          border-color: rgba(160, 123, 66, 0.3);
        }

        .collection-card.selected {
          border-color: rgba(165, 127, 67, 0.48);
          box-shadow:
            0 24px 55px rgba(83, 61, 36, 0.15);
        }

        .collection-card-image {
          position: relative;
          height: 295px;
          background-size: cover;
          overflow: hidden;
          transition: transform 0.7s ease;
        }

        .collection-card:hover
        .collection-card-image {
          transform: scale(1.025);
        }

        .image-water-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 75% 20%,
              rgba(118, 196, 199, 0.34),
              transparent 25%
            ),
            radial-gradient(
              circle at 25% 88%,
              rgba(255,255,255,0.82),
              transparent 28%
            );
          mix-blend-mode: screen;
        }

        .shell-decoration {
          position: absolute;
          top: 18px;
          right: 21px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 252, 246, 0.84);
          border: 1px solid rgba(152, 115, 61, 0.15);
          color: #9d763d;
          font-size: 19px;
          backdrop-filter: blur(8px);
        }

        .card-number {
          position: absolute;
          left: 20px;
          top: 19px;
          color: rgba(255,255,255,0.88);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .card-bottom-gradient {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 45%;
          background:
            linear-gradient(
              to top,
              rgba(40, 38, 32, 0.22),
              transparent
            );
        }

        .collection-card-content {
          background:
            linear-gradient(
              to bottom,
              #fbf7f0,
              #f4eee6
            );
          padding: 24px 25px 28px;
        }

        .collection-card-small {
          display: block;
          color: #9b7744;
          font-size: 8px;
          letter-spacing: 2.7px;
          margin-bottom: 8px;
        }

        .collection-card-content h3 {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          color: #322b23;
          font-size: 32px;
          font-weight: 600;
        }

        .collection-card-content p {
          margin: 3px 0 19px;
          color: #6d6459;
          font-size: 12px;
        }

        .collection-arrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #8c6838;
          font-size: 9px;
          letter-spacing: 2px;
          transition: gap 0.3s ease;
        }

        .collection-card:hover
        .collection-arrow {
          gap: 18px;
        }

        .collection-arrow span {
          font-size: 15px;
        }

        /* =====================================================
           STORY
        ====================================================== */

        .collection-story-section {
          position: relative;
          overflow: hidden;
          padding: 115px 7%;
          border-top: 1px solid rgba(122, 103, 77, 0.13);
          border-bottom: 1px solid rgba(122, 103, 77, 0.13);
          background:
            linear-gradient(
              90deg,
              rgba(246, 241, 233, 0.94),
              rgba(238, 244, 240, 0.84)
            ),
            var(--sea-bg);
          background-size: cover;
          background-position: center;
        }

        .collection-story-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 15% 60%,
              rgba(92, 172, 179, 0.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 20%,
              rgba(218, 181, 125, 0.12),
              transparent 26%
            );
        }

        .story-content {
          position: relative;
          z-index: 2;
          max-width: 1340px;
          margin: auto;
        }

        .story-label {
          color: #a27b42;
          letter-spacing: 4px;
          font-size: 9px;
          margin-bottom: 43px;
        }

        .story-main {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 90px;
        }

        .story-copy {
          max-width: 620px;
        }

        .story-eyebrow {
          color: #836a4d;
          font-size: 10px;
          letter-spacing: 4px;
        }

        .story-copy h2 {
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-size: clamp(42px, 4.5vw, 69px);
          line-height: 0.97;
          color: #342e27;
          margin: 18px 0 24px;
          max-width: 590px;
        }

        .story-copy > p {
          color: #6b6257;
          font-size: 14px;
          line-height: 1.9;
          max-width: 540px;
        }

        .special-love-quote {
          position: relative;
          margin-top: 32px;
          padding: 25px 28px 24px 32px;
          background: rgba(255,255,255,0.45);
          border-left: 1px solid #bf9152;
          max-width: 530px;
        }

        .quote-mark {
          position: absolute;
          left: 8px;
          top: 7px;
          color: rgba(188, 147, 85, 0.42);
          font-family: "Cormorant Garamond", serif;
          font-size: 52px;
        }

        .special-love-quote p {
          margin: 0 0 9px;
          color: #5a5147;
          font-family: "Cormorant Garamond", serif;
          font-size: 21px;
          line-height: 1.4;
          font-style: italic;
        }

        .special-love-quote small {
          color: #9a7748;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .male-quote {
          border-left-color: #6d675f;
          background: rgba(62, 61, 57, 0.04);
        }

        .male-quote p {
          color: #57534e;
        }

        .explore-button {
          margin-top: 34px;
          padding: 15px 25px;
          min-width: 205px;
          color: #fffdf9;
          background:
            linear-gradient(
              105deg,
              #aa7e40,
              #c0985e
            );
          letter-spacing: 1.7px;
          font-size: 9px;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .explore-button span {
          margin-left: 16px;
          font-size: 14px;
        }

        .explore-button:hover {
          transform: translateY(-2px);
          box-shadow:
            0 13px 30px rgba(139, 98, 44, 0.2);
        }

        .story-visual {
          position: relative;
        }

        .visual-frame {
          position: relative;
          padding: 12px;
          background: rgba(252, 248, 241, 0.82);
          border: 1px solid rgba(147, 122, 84, 0.25);
          box-shadow:
            0 30px 70px rgba(78, 62, 43, 0.12);
        }

        .visual-image {
          height: 470px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.38),
              transparent 45%
            ),
            var(--sea-bg);
          background-size: cover;
          background-position: center;
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to bottom,
              rgba(243, 246, 239, 0.09),
              rgba(235, 227, 211, 0.3)
            );
        }

        .visual-shell {
          position: absolute;
          font-size: 90px;
          opacity: 0.72;
          animation: shellFloat 6.7s ease-in-out infinite;
        }

        .shell-a {
          left: 25px;
          bottom: 15px;
        }

        .shell-b {
          right: 27px;
          top: 19px;
          font-size: 52px;
          animation-delay: 1.1s;
        }

        .visual-pearl {
          position: absolute;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 30% 28%,
              #fff,
              #eee6d9 45%,
              #d0b99a
            );
          box-shadow:
            0 2px 10px rgba(67, 63, 54, 0.14);
        }

        .pearl-a {
          left: 46%;
          top: 34%;
        }

        .pearl-b {
          left: 53%;
          top: 43%;
          width: 23px;
          height: 23px;
        }

        .pearl-c {
          left: 58%;
          top: 51%;
          width: 14px;
          height: 14px;
        }

        .visual-caption {
          position: absolute;
          bottom: 28px;
          left: 29px;
          display: flex;
          flex-direction: column;
          color: white;
          text-shadow: 0 2px 9px rgba(0,0,0,0.25);
        }

        .visual-caption span {
          font-family: "Cormorant Garamond", serif;
          font-size: 27px;
          font-style: italic;
        }

        .visual-caption small {
          margin-top: 4px;
          letter-spacing: 2px;
          font-size: 8px;
        }

        .visual-side-note {
          position: absolute;
          right: -37px;
          bottom: 38px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #967246;
          transform: rotate(90deg);
          font-size: 8px;
          letter-spacing: 2px;
        }

        .visual-side-note div {
          width: 32px;
          height: 1px;
          background: #b79865;
        }

        .story-watermark {
          position: absolute;
          right: 4%;
          bottom: -36px;
          font-family: "Cormorant Garamond", serif;
          font-size: 185px;
          line-height: 1;
          color: rgba(111, 161, 160, 0.04);
          letter-spacing: 3px;
          pointer-events: none;
        }

        .story-shell-left {
          position: absolute;
          left: -13px;
          bottom: 45px;
          font-size: 105px;
          opacity: 0.34;
        }

        .story-shell-right {
          position: absolute;
          right: 35px;
          top: 28px;
          font-size: 39px;
          opacity: 0.28;
        }

        /* =====================================================
           OCEAN LOVE
        ====================================================== */

        .ocean-love-section {
          min-height: 470px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            linear-gradient(
              rgba(32, 89, 94, 0.74),
              rgba(26, 66, 70, 0.78)
            ),
            var(--sea-bg);
          background-size: cover;
          background-position: center;
        }

        .ocean-love-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(255,255,255,0.17),
              transparent 23%
            );
        }

        .ocean-content {
          position: relative;
          z-index: 2;
          max-width: 740px;
          padding: 70px 24px;
          text-align: center;
          color: white;
        }

        .ocean-content > span {
          font-size: 9px;
          letter-spacing: 4px;
          opacity: 0.82;
        }

        .ocean-content h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(50px, 5vw, 75px);
          line-height: 0.9;
          font-weight: 500;
          margin: 18px 0 24px;
        }

        .ocean-content p {
          max-width: 600px;
          margin: auto;
          font-family: "Cormorant Garamond", serif;
          font-size: 19px;
          line-height: 1.65;
          opacity: 0.92;
        }

        .wave-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
        }

        .wave-divider span:first-child,
        .wave-divider span:last-child {
          width: 80px;
          height: 1px;
          background: rgba(255,255,255,0.35);
        }

        /* =====================================================
           FOOTER
        ====================================================== */

        .paara-footer {
          position: relative;
          background: #f4eee5;
          padding: 95px 6% 25px;
          overflow: hidden;
        }

        .footer-wave {
          position: absolute;
          top: -30px;
          left: -5%;
          width: 110%;
          height: 65px;
          border-radius: 50%;
          background: #f8f4ed;
        }

        .footer-top {
          position: relative;
          z-index: 2;
          max-width: 1420px;
          margin: auto;
          display: grid;
          grid-template-columns:
            1.5fr 1fr 1fr 1.15fr 1.55fr;
          gap: 42px;
        }

        .footer-brand p {
          color: #71665b;
          font-size: 11px;
          line-height: 1.8;
          margin-top: 22px;
        }

        .footer-logo {
          font-size: 46px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-column h4 {
          margin: 4px 0 17px;
          color: #796447;
          font-size: 9px;
          letter-spacing: 2.6px;
          font-weight: 500;
        }

        .footer-column button {
          padding: 4px 0;
          color: #6c6358;
          font-size: 11px;
          transition: color 0.25s ease;
        }

        .footer-column button:hover {
          color: #ae7e3d;
        }

        .newsletter p {
          margin: 0 0 12px;
          color: #71665b;
          font-size: 11px;
        }

        .newsletter-input {
          width: 100%;
          max-width: 255px;
          display: flex;
          border-bottom: 1px solid #c4ab84;
        }

        .newsletter-input input {
          min-width: 0;
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          color: #4a4239;
          padding: 10px 4px;
          font-size: 10px;
        }

        .newsletter-input button {
          color: #9f753e;
          padding: 0 5px;
        }

        .social-icons {
          display: flex;
          gap: 13px;
          margin-top: 18px;
          color: #766b60;
          font-size: 16px;
        }

        .footer-bottom {
          position: relative;
          z-index: 2;
          max-width: 1420px;
          margin: 48px auto 0;
          padding-top: 18px;
          border-top: 1px solid rgba(125,105,75,0.14);
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #827668;
          font-size: 9px;
          letter-spacing: 0.5px;
        }

        /* =====================================================
           ACCENTS
        ====================================================== */

        .accent-ocean {
          --story-accent: #79aaa8;
        }

        .accent-gold {
          --story-accent: #b99458;
        }

        .accent-sand {
          --story-accent: #bd9c70;
        }

        .accent-rose {
          --story-accent: #b28b82;
        }

        .accent-deepSea {
          --story-accent: #747776;
        }

        .accent-turquoise {
          --story-accent: #5da8ac;
        }

        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes shellFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-5deg);
          }

          50% {
            transform: translate3d(0, -10px, 0) rotate(3deg);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.95);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.15);
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1050px) {
          .desktop-nav {
            gap: 20px;
          }

          .collection-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .story-main {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .story-copy {
            max-width: 800px;
          }

          .story-copy h2 {
            max-width: 700px;
          }

          .story-visual {
            max-width: 650px;
          }

          .footer-top {
            grid-template-columns:
              repeat(3, 1fr);
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 760px) {
          .paara-navbar {
            height: 70px;
            padding: 0 20px;
          }

          .brand-block {
            min-width: auto;
          }

          .brand-script {
            font-size: 32px;
          }

          .brand-subtitle {
            font-size: 7px;
            margin-left: 12px;
          }

          .desktop-nav {
            display: none;
          }

          .nav-actions {
            min-width: auto;
            gap: 8px;
          }

          .nav-icon {
            font-size: 18px;
          }

          .collections-hero {
            min-height: 600px;
            padding:
              70px 25px
              140px;
            background-position: 65% center;
          }

          .hero-content h1 {
            font-size: 53px;
          }

          .hero-content p {
            font-size: 17px;
          }

          .hero-shell {
            opacity: 0.42;
          }

          .shell-one {
            right: 1%;
            bottom: 5px;
          }

          .shell-two {
            right: 21%;
          }

          .collection-intro {
            padding:
              68px 22px
              35px;
          }

          .collection-intro h2 {
            font-size: 44px;
          }

          .collection-grid-section {
            padding: 8px 18px 70px;
          }

          .collection-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .collection-card-image {
            height: 280px;
          }

          .collection-story-section {
            padding:
              80px 22px
              85px;
          }

          .story-main {
            gap: 42px;
          }

          .story-copy h2 {
            font-size: 45px;
          }

          .story-copy > p {
            font-size: 13px;
          }

          .special-love-quote {
            padding-right: 19px;
          }

          .special-love-quote p {
            font-size: 19px;
          }

          .visual-image {
            height: 370px;
          }

          .visual-side-note {
            display: none;
          }

          .story-watermark {
            font-size: 76px;
            bottom: 20px;
          }

          .ocean-love-section {
            min-height: 420px;
          }

          .ocean-content h2 {
            font-size: 51px;
          }

          .ocean-content p {
            font-size: 17px;
          }

          .paara-footer {
            padding:
              80px 24px
              25px;
          }

          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px 25px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            line-height: 1.6;
          }
        }

        @media (max-width: 430px) {
          .nav-actions .nav-icon:nth-child(2),
          .nav-actions .nav-icon:nth-child(3) {
            display: none;
          }

          .collections-hero {
            min-height: 570px;
            padding:
              64px 20px
              120px;
          }

          .hero-content h1 {
            font-size: 46px;
          }

          .hero-content p {
            font-size: 16px;
          }

          .collection-card-image {
            height: 245px;
          }

          .collection-card-content h3 {
            font-size: 29px;
          }

          .story-copy h2 {
            font-size: 40px;
          }

          .visual-image {
            height: 320px;
          }

          .footer-top {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Collections;