import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Collections = () => {
  const navigate = useNavigate();

  const [activeCollection, setActiveCollection] =
    useState("everyday");

  const seaBackground =
    "https://img.freepik.com/premium-photo/banner-summer-background-with-white-sand-seashell-starfish-beach_756748-104227.jpg?w=2000";

  /* ==========================================================
     COLLECTION DATA
  ========================================================== */

  const collections = [
    {
      id: 1,
      name: "Everyday",
      subtitle: "Little pieces for every day",
      type: "everyday",
      placeholder: "EVERYDAY",
      eyebrow: "THE EVERYDAY COLLECTION",
      quote:
        "Little treasures for the moments that quietly matter.",
      description:
        "Delicate pieces inspired by pearls, shells and the calm rhythm of the sea.",
      accent: "ocean",
    },

    {
      id: 2,
      name: "Festive",
      subtitle: "Made for moments worth celebrating",
      type: "festive",
      placeholder: "FESTIVE",
      eyebrow: "THE FESTIVE COLLECTION",
      quote:
        "Some moments deserve a little more sparkle.",
      description:
        "Elegant pieces made for celebrations, golden evenings and memories worth keeping.",
      accent: "gold",
    },

    {
      id: 3,
      name: "Minimal",
      subtitle: "Simple. Elegant. You.",
      type: "minimal",
      placeholder: "MINIMAL",
      eyebrow: "THE MINIMAL COLLECTION",
      quote:
        "Elegance lives in the details left untouched.",
      description:
        "Quiet silhouettes, refined forms and timeless jewellery for everyday sophistication.",
      accent: "sand",
    },

    {
      id: 4,
      name: "For Her",
      subtitle: "She'll love this",
      type: "for-her",
      placeholder: "FOR HER",
      eyebrow: "FOR HER",
      quote:
        "For the woman who carries her own light.",
      description:
        "Soft pearls, delicate curves and romantic details inspired by sunlight over the ocean.",
      accent: "rose",
      romantic: true,
    },

    {
      id: 5,
      name: "For Him",
      subtitle: "Just for him",
      type: "for-him",
      placeholder: "FOR HIM",
      eyebrow: "FOR HIM",
      quote:
        "Steady as the shore. Deep as the sea.",
      description:
        "Refined forms, natural textures and understated character for modern masculine elegance.",
      accent: "deep-sea",
      romantic: true,
    },

    {
      id: 6,
      name: "New Arrivals",
      subtitle: "Something new to love",
      type: "new-arrivals",
      placeholder: "NEW",
      eyebrow: "NEW ARRIVALS",
      quote:
        "A new tide brings something beautiful.",
      description:
        "Fresh silhouettes and new treasures shaped by the beauty of the coastline.",
      accent: "turquoise",
    },
  ];

  /* ==========================================================
     TOP OF PAGE ON NAVIGATION
  ========================================================== */

 useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}, []);
  /* ==========================================================
     COLLECTION CLICK
  ========================================================== */

  const handleCollectionClick = (collection) => {
    setActiveCollection(collection.type);

    setTimeout(() => {
      const section =
        document.getElementById(
          "paara-collection-story"
        );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 60);
  };

  /* ==========================================================
     OPEN PRODUCTS
  ========================================================== */

  const openProducts = () => {
    navigate(
      `/products/${activeCollection}`
    );
  };

  const activeData =
    collections.find(
      (item) =>
        item.type === activeCollection
    ) || collections[0];

  return (
    <>
      <div
        className="paara-collections-page"
        style={{
          "--sea-background": `url("${seaBackground}")`,
        }}
      >
        {/* =====================================================
            EXISTING NAVBAR
        ====================================================== */}

       

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="collections-hero paara-page-enter">
          <div className="hero-image" />

          <div className="hero-overlay" />

          <div className="hero-shell hero-shell-left">
            🐚
          </div>

          <div className="hero-shell hero-shell-right">
            🐚
          </div>

          <div className="hero-star hero-star-one">
            ✦
          </div>

          <div className="hero-star hero-star-two">
            ✦
          </div>

          <div className="hero-content">
            <span className="hero-eyebrow">
              INSPIRED BY THE SEA
            </span>

            <h1>
              JEWELLERY
              <br />
              MADE TO BE LOVED
            </h1>

            <p>
              Discover pieces shaped by the beauty
              of the sea, the softness of pearls and
              the quiet elegance of nature.
            </p>

            <div className="hero-divider">
              <span />
              <small>✦</small>
              <span />
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="collections-intro paara-reveal">
          <span className="section-eyebrow">
            EXPLORE THE TIDE
          </span>

          <h2>
            Find Your Collection
          </h2>

          <p>
            Every Paara collection carries a little
            piece of the ocean — from everyday
            treasures to pieces made for moments
            that deserve to stay forever.
          </p>
        </section>

        {/* =====================================================
            COLLECTION GRID
        ====================================================== */}

        <section className="collection-grid-wrapper">
          <div className="collection-grid">
            {collections.map(
              (collection, index) => {
                const selected =
                  collection.type ===
                  activeCollection;

                return (
                  <button
                    key={collection.id}
                    type="button"
                    className={`collection-card ${
                      selected
                        ? "collection-selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleCollectionClick(
                        collection
                      )
                    }
                    style={{
                      animationDelay: `${
                        index * 80
                      }ms`,
                    }}
                  >
                    <div className="collection-visual">
                      <div
                        className="collection-photo"
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              rgba(255,255,255,.04),
                              rgba(255,255,255,.26)
                            ),
                            var(--sea-background)
                          `,
                        }}
                      />

                      <div className="collection-water" />

                      <div className="collection-top-label">
                        <span>
                          0
                          {collection.id}
                        </span>

                        <span>
                          {collection.romantic
                            ? "SPECIAL"
                            : "PAARA"}
                        </span>
                      </div>

                      <div className="collection-symbol">
                        {collection.type ===
                        "for-her"
                          ? "♡"
                          : collection.type ===
                            "for-him"
                          ? "✦"
                          : "🐚"}
                      </div>

                      <div className="collection-watermark">
                        {
                          collection.placeholder
                        }
                      </div>

                      <div className="visual-bottom-fade" />
                    </div>

                    <div className="collection-content">
                      <span className="collection-mini">
                        {
                          collection.eyebrow
                        }
                      </span>

                      <h3>
                        {collection.name}
                      </h3>

                      <p>
                        {collection.subtitle}
                      </p>

                      <span className="collection-explore">
                        EXPLORE
                        <span>→</span>
                      </span>
                    </div>
                  </button>
                );
              }
            )}
          </div>
        </section>

        {/* =====================================================
            ACTIVE COLLECTION STORY
        ====================================================== */}

        <section
          id="paara-collection-story"
          className={`collection-story collection-story-${activeData.accent}`}
        >
          <div className="story-background-image" />

          <div className="story-background-overlay" />

          <div className="story-shell story-shell-one">
            🐚
          </div>

          <div className="story-shell story-shell-two">
            🐚
          </div>

          <div className="story-watermark">
            {activeData.placeholder}
          </div>

          <div className="story-inner">
            <div className="story-content">
              <span className="story-eyebrow">
                {activeData.eyebrow}
              </span>

              <h2>
                {activeData.quote}
              </h2>

              <p>
                {activeData.description}
              </p>

              {/* ================= FOR HER ================= */}

              {activeData.type ===
                "for-her" && (
                <div className="special-quote special-quote-her">
                  <span className="quote-mark">
                    “
                  </span>

                  <p>
                    She deserves jewellery
                    that feels like sunlight
                    on the sea — soft, warm
                    and impossible to forget.
                  </p>

                  <small>
                    — PAARA, FOR HER
                  </small>
                </div>
              )}

              {/* ================= FOR HIM ================= */}

              {activeData.type ===
                "for-him" && (
                <div className="special-quote special-quote-him">
                  <span className="quote-mark">
                    “
                  </span>

                  <p>
                    For the one whose
                    presence feels like
                    standing beside the
                    ocean — calm, grounded
                    and timeless.
                  </p>

                  <small>
                    — PAARA, FOR HIM
                  </small>
                </div>
              )}

              <button
                type="button"
                className="story-button"
                onClick={openProducts}
              >
                EXPLORE{" "}
                {activeData.name.toUpperCase()}
                <span>→</span>
              </button>
            </div>

            <div className="story-visual-wrapper">
              <div className="story-frame">
                <div
                  className="story-visual"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        rgba(255,255,255,.07),
                        rgba(34,88,90,.16)
                      ),
                      var(--sea-background)
                    `,
                  }}
                >
                  <div className="story-shell-visual shell-a">
                    🐚
                  </div>

                  <div className="story-shell-visual shell-b">
                    🐚
                  </div>

                  <div className="visual-pearl pearl-one" />
                  <div className="visual-pearl pearl-two" />
                  <div className="visual-pearl pearl-three" />

                  <div className="story-visual-text">
                    <span>PAARA</span>
                    <small>
                      SHAPED BY THE SEA
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OCEAN STATEMENT
        ====================================================== */}

        <section className="ocean-statement">
          <div className="ocean-statement-image" />
          <div className="ocean-statement-overlay" />

          <div className="ocean-statement-content">
            <span>
              THE PAARA PHILOSOPHY
            </span>

            <h2>
              Made by the sea.
              <br />
              Meant for love.
            </h2>

            <p>
              Pearls, shells, sunlight and saltwater —
              nature is the heart of Paara.
            </p>

            <div className="statement-divider">
              <span />
              <b>🐚</b>
              <span />
            </div>
          </div>
        </section>

        
       
      </div>

      {/* ========================================================
          CSS — SAME FILE
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
          --paara-ivory: #fbf8f2;
          --paara-sand: #eee6d9;
          --paara-brown: #554a3f;
          --paara-soft-brown: #786d61;
          --paara-gold: #a57a41;
          --paara-line: rgba(130, 107, 74, 0.16);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .paara-collections-page {
          width: 100%;
          min-width: 0;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(105, 181, 185, 0.06),
              transparent 22%
            ),
            radial-gradient(
              circle at 90% 68%,
              rgba(206, 174, 124, 0.08),
              transparent 25%
            ),
            var(--paara-cream);
          color: var(--paara-brown);
          font-family: "Brilliant Cut", serif;
          font-weight: 300;
        }

        .paara-collections-page button,
        .paara-collections-page input,
        .paara-collections-page select {
          font-family: "Brilliant Cut", serif;
          font-weight: 300;
        }

        /* =====================================================
           PAGE ENTER
        ====================================================== */

        .paara-page-enter {
          animation:
            paaraPageEnter
            0.8s
            cubic-bezier(.22,.61,.36,1)
            both;
        }

        .paara-reveal {
          animation:
            paaraReveal
            .85s
            cubic-bezier(.22,.61,.36,1)
            both;
          animation-delay: .08s;
        }

        @keyframes paaraPageEnter {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes paaraReveal {
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
           HERO
        ====================================================== */

        .collections-hero {
          width: 100%;
          min-height: clamp(
            470px,
            68vh,
            720px
          );
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #e7ded1;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(248,244,237,.94) 0%,
              rgba(248,244,237,.72) 34%,
              rgba(248,244,237,.20) 72%,
              rgba(248,244,237,.08) 100%
            ),
            var(--sea-background);
          background-size: cover;
          background-position: center;
          transform: scale(1.015);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 78% 32%,
              rgba(255,255,255,.19),
              transparent 22%
            );
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: min(
            90vw,
            1600px
          );
          margin: 0 auto;
          padding:
            clamp(60px, 8vw, 120px)
            0;
        }

        .hero-eyebrow {
          display: inline-block;
          margin-bottom: 18px;
          color: var(--paara-gold);
          font-size: clamp(
            8px,
            .75vw,
            11px
          );
          letter-spacing: .34em;
        }

        .hero-content h1 {
          margin: 0;
          max-width: 850px;
          font-size: clamp(
            48px,
            7vw,
            104px
          );
          line-height: .88;
          letter-spacing: -.035em;
          font-weight: 300;
          color: #322b24;
        }

        .hero-content p {
          max-width: 560px;
          margin:
            clamp(22px, 2.5vw, 32px)
            0
            22px;
          color: #655b50;
          font-size: clamp(
            14px,
            1.15vw,
            19px
          );
          line-height: 1.65;
        }

        .hero-divider {
          width: min(180px, 45vw);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-divider span {
          flex: 1;
          height: 1px;
          background: rgba(167, 128, 74, .45);
        }

        .hero-divider small {
          color: var(--paara-gold);
        }

        .hero-shell {
          position: absolute;
          z-index: 2;
          opacity: .45;
          animation:
            shellFloat
            7s
            ease-in-out
            infinite;
          pointer-events: none;
        }

        .hero-shell-left {
          right: 7%;
          bottom: 5%;
          font-size: clamp(
            70px,
            8vw,
            145px
          );
          transform: rotate(-12deg);
        }

        .hero-shell-right {
          right: 30%;
          top: 12%;
          font-size: clamp(
            35px,
            3vw,
            60px
          );
          animation-delay: 1.2s;
        }

        .hero-star {
          position: absolute;
          color: rgba(255,255,255,.75);
          z-index: 2;
          animation:
            sparkle
            3s
            ease-in-out
            infinite;
        }

        .hero-star-one {
          right: 19%;
          top: 24%;
        }

        .hero-star-two {
          right: 35%;
          bottom: 18%;
          animation-delay: 1s;
        }

        /* =====================================================
           INTRO
        ====================================================== */

        .collections-intro {
          width: min(
            90vw,
            1000px
          );
          margin: 0 auto;
          padding:
            clamp(68px, 8vw, 120px)
            0
            clamp(38px, 4vw, 60px);
          text-align: center;
        }

        .section-eyebrow {
          color: var(--paara-gold);
          font-size: 9px;
          letter-spacing: .35em;
        }

        .collections-intro h2 {
          margin:
            12px 0
            8px;
          font-size: clamp(
            42px,
            5vw,
            72px
          );
          line-height: .95;
          font-weight: 300;
          letter-spacing: -.025em;
          color: #342d26;
        }

        .collections-intro p {
          width: min(100%, 700px);
          margin: 0 auto;
          color: #71675c;
          font-size: clamp(
            12px,
            1vw,
            15px
          );
          line-height: 1.8;
        }

        /* =====================================================
           COLLECTION GRID
        ====================================================== */

        .collection-grid-wrapper {
          width: min(
            94vw,
            1750px
          );
          margin: 0 auto;
          padding:
            0 0
            clamp(70px, 8vw, 120px);
        }

        .collection-grid {
          display: grid;
          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );
          gap: clamp(
            16px,
            2vw,
            30px
          );
        }

        .collection-card {
          padding: 0;
          margin: 0;
          min-width: 0;
          border: 1px solid var(--paara-line);
          background: var(--paara-ivory);
          text-align: left;
          overflow: hidden;
          box-shadow:
            0
            16px
            40px
            rgba(66,54,40,.06);
          transform: translateY(14px);
          opacity: 0;
          animation:
            collectionCardIn
            .7s
            cubic-bezier(.22,.61,.36,1)
            forwards;
          transition:
            transform .45s ease,
            box-shadow .45s ease,
            border-color .45s ease;
        }

        .collection-card:hover {
          transform: translateY(-7px);
          border-color:
            rgba(164,125,67,.28);
          box-shadow:
            0
            25px
            60px
            rgba(66,54,40,.12);
        }

        .collection-selected {
          border-color:
            rgba(164,125,67,.38);
        }

        @keyframes collectionCardIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .collection-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.06;
          overflow: hidden;
          background: #e9e0d2;
        }

        .collection-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition:
            transform .75s
            cubic-bezier(.22,.61,.36,1);
        }

        .collection-card:hover
        .collection-photo {
          transform: scale(1.035);
        }

        .collection-water {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 78% 25%,
              rgba(103,191,196,.22),
              transparent 25%
            ),
            radial-gradient(
              circle at 25% 80%,
              rgba(255,255,255,.65),
              transparent 27%
            );
          pointer-events: none;
        }

        .collection-top-label {
          position: absolute;
          top: 16px;
          left: 18px;
          right: 18px;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          color: rgba(255,255,255,.88);
          font-size: 8px;
          letter-spacing: .23em;
        }

        .collection-symbol {
          position: absolute;
          top: 16px;
          right: 18px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(252,249,243,.84);
          color: #a27a43;
          font-size: 18px;
          backdrop-filter: blur(8px);
        }

        .collection-top-label
        > span:last-child {
          padding-right: 54px;
        }

        .collection-watermark {
          position: absolute;
          left: 18px;
          bottom: 11px;
          color: rgba(255,255,255,.27);
          font-size: clamp(
            25px,
            3vw,
            50px
          );
          letter-spacing: .12em;
          line-height: 1;
        }

        .visual-bottom-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 42%;
          background:
            linear-gradient(
              to top,
              rgba(48,43,36,.28),
              transparent
            );
        }

        .collection-content {
          padding:
            clamp(19px, 2vw, 28px);
          background:
            linear-gradient(
              to bottom,
              #fcf9f3,
              #f4eee5
            );
        }

        .collection-mini {
          display: block;
          color: #9c7542;
          font-size: 7px;
          letter-spacing: .22em;
          margin-bottom: 8px;
        }

        .collection-content h3 {
          margin: 0;
          color: #352f28;
          font-size: clamp(
            28px,
            2.3vw,
            39px
          );
          line-height: .96;
          font-weight: 300;
        }

        .collection-content p {
          margin:
            6px 0
            17px;
          color: #766c61;
          font-size: clamp(
            10px,
            .9vw,
            13px
          );
        }

        .collection-explore {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: #986f39;
          font-size: 8px;
          letter-spacing: .17em;
          transition: gap .3s ease;
        }

        .collection-card:hover
        .collection-explore {
          gap: 17px;
        }

        .collection-explore span {
          font-size: 15px;
        }

        /* =====================================================
           COLLECTION STORY
        ====================================================== */

        .collection-story {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding:
            clamp(80px, 9vw, 140px)
            3vw;
          border-top: 1px solid var(--paara-line);
          border-bottom: 1px solid var(--paara-line);
        }

        .story-background-image {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(246,242,234,.93),
              rgba(239,243,239,.86)
            ),
            var(--sea-background);
          background-size: cover;
          background-position: center;
        }

        .story-background-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 15% 60%,
              rgba(85,164,168,.11),
              transparent 28%
            ),
            radial-gradient(
              circle at 84% 20%,
              rgba(208,168,107,.10),
              transparent 25%
            );
        }

        .story-inner {
          width: min(
            90vw,
            1650px
          );
          margin: 0 auto;
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, .9fr);
          gap: clamp(
            45px,
            7vw,
            120px
          );
          align-items: center;
        }

        .story-content {
          max-width: 760px;
        }

        .story-eyebrow {
          color: #9e7744;
          font-size: 9px;
          letter-spacing: .3em;
        }

        .story-content h2 {
          margin:
            16px 0
            22px;
          max-width: 760px;
          color: #342e27;
          font-size: clamp(
            45px,
            5.2vw,
            82px
          );
          line-height: .94;
          font-weight: 300;
          letter-spacing: -.03em;
        }

        .story-content > p {
          width: min(100%, 620px);
          margin: 0;
          color: #6f655b;
          font-size: clamp(
            12px,
            .95vw,
            15px
          );
          line-height: 1.9;
        }

        /* -----------------------------------------------------
           SPECIAL QUOTES
           Keep this styling isolated from the main site font
           decisions.
        ------------------------------------------------------ */

        .special-quote {
          position: relative;
          width: min(100%, 610px);
          margin-top: 30px;
          padding:
            23px
            25px
            22px
            34px;
          background: rgba(255,255,255,.41);
          border-left: 1px solid #bc9055;
        }

        .quote-mark {
          position: absolute;
          left: 8px;
          top: 3px;
          font-size: 48px;
          color: rgba(180,140,84,.38);
        }

        .special-quote p {
          margin: 0 0 8px;
          color: #5c5146;
          font-size: clamp(
            15px,
            1.25vw,
            20px
          );
          line-height: 1.45;
        }

        .special-quote small {
          color: #99703c;
          font-size: 8px;
          letter-spacing: .18em;
        }

        .special-quote-him {
          border-left-color: #78736c;
          background: rgba(78,77,73,.045);
        }

        .story-button {
          margin-top: 32px;
          min-height: 50px;
          padding:
            0
            24px;
          border: 1px solid #b1844a;
          background: #ae8147;
          color: white;
          font-size: 8px;
          letter-spacing: .18em;
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .story-button span {
          margin-left: 14px;
          font-size: 14px;
        }

        .story-button:hover {
          background: #966c3a;
          transform: translateY(-2px);
          box-shadow:
            0
            14px
            30px
            rgba(141,99,45,.17);
        }

        .story-visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 760px;
          margin-left: auto;
        }

        .story-frame {
          padding: 11px;
          background: rgba(255,251,245,.8);
          border: 1px solid rgba(135,108,75,.25);
          box-shadow:
            0
            30px
            70px
            rgba(70,56,40,.11);
        }

        .story-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.07;
          overflow: hidden;
          background-size: cover;
          background-position: center;
        }

        .story-shell-visual {
          position: absolute;
          z-index: 2;
          opacity: .68;
          animation:
            shellFloat
            6.5s
            ease-in-out
            infinite;
        }

        .shell-a {
          left: 5%;
          bottom: 4%;
          font-size: clamp(
            55px,
            6vw,
            100px
          );
        }

        .shell-b {
          right: 5%;
          top: 5%;
          font-size: clamp(
            35px,
            4vw,
            60px
          );
          animation-delay: 1s;
        }

        .visual-pearl {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 30% 28%,
              #fff,
              #ece3d5 45%,
              #cdb494
            );
          box-shadow:
            0
            2px
            11px
            rgba(56,52,46,.15);
        }

        .pearl-one {
          top: 31%;
          left: 47%;
        }

        .pearl-two {
          top: 42%;
          left: 53%;
          width: 22px;
          height: 22px;
        }

        .pearl-three {
          top: 51%;
          left: 58%;
          width: 13px;
          height: 13px;
        }

        .story-visual-text {
          position: absolute;
          z-index: 3;
          left: 28px;
          bottom: 27px;
          display: flex;
          flex-direction: column;
          color: white;
          text-shadow:
            0
            2px
            10px
            rgba(0,0,0,.24);
        }

        .story-visual-text span {
          font-size: clamp(
            25px,
            2.3vw,
            35px
          );
        }

        .story-visual-text small {
          margin-top: 3px;
          font-size: 7px;
          letter-spacing: .22em;
        }

        .story-watermark {
          position: absolute;
          right: 2%;
          bottom: -25px;
          z-index: 2;
          color: rgba(85,157,157,.04);
          font-size: clamp(
            90px,
            13vw,
            220px
          );
          line-height: 1;
          letter-spacing: .04em;
          pointer-events: none;
        }

        .story-shell {
          position: absolute;
          z-index: 2;
          opacity: .23;
          pointer-events: none;
        }

        .story-shell-one {
          left: -15px;
          bottom: 55px;
          font-size: clamp(
            70px,
            8vw,
            120px
          );
        }

        .story-shell-two {
          right: 15px;
          top: 30px;
          font-size: clamp(
            32px,
            3vw,
            50px
          );
        }

        /* =====================================================
           OCEAN STATEMENT
        ====================================================== */

        .ocean-statement {
          width: 100%;
          min-height: clamp(
            360px,
            48vh,
            540px
          );
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .ocean-statement-image {
          position: absolute;
          inset: 0;
          background:
            var(--sea-background);
          background-size: cover;
          background-position: center;
        }

        .ocean-statement-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              rgba(24,79,82,.70),
              rgba(28,87,89,.80)
            );
        }

        .ocean-statement-content {
          position: relative;
          z-index: 2;
          width: min(
            90vw,
            800px
          );
          padding:
            70px
            20px;
          color: white;
        }

        .ocean-statement-content > span {
          font-size: 8px;
          letter-spacing: .35em;
          opacity: .88;
        }

        .ocean-statement-content h2 {
          margin:
            18px 0
            20px;
          font-size: clamp(
            48px,
            6vw,
            82px
          );
          line-height: .91;
          font-weight: 300;
          letter-spacing: -.03em;
        }

        .ocean-statement-content p {
          width: min(
            100%,
            600px
          );
          margin: 0 auto;
          font-size: clamp(
            13px,
            1vw,
            18px
          );
          line-height: 1.65;
          opacity: .91;
        }

        .statement-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 27px;
        }

        .statement-divider span {
          width: 70px;
          max-width: 15vw;
          height: 1px;
          background: rgba(255,255,255,.35);
        }

        .statement-divider b {
          font-weight: 300;
        }

        /* =====================================================
           LARGE LAPTOP / PC
        ====================================================== */

        @media (min-width: 1440px) {
          .collection-grid-wrapper {
            width: min(
              94vw,
              1780px
            );
          }

          .collection-grid {
            gap: 32px;
          }

          .story-inner {
            width: min(
              90vw,
              1700px
            );
          }
        }

        /* =====================================================
           LAPTOP
        ====================================================== */

        @media (min-width: 1100px) and (max-width: 1439px) {
          .collection-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .story-inner {
            width: 90vw;
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
          .hero-content {
            width: 90vw;
          }

          .collection-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .story-inner {
            width: 92vw;
            grid-template-columns:
              minmax(0, 1fr);
            gap: 55px;
          }

          .story-visual-wrapper {
            width: min(
              78vw,
              650px
            );
            margin: 0 auto;
          }
        }

        /* =====================================================
           MOBILE — FIRST PRIORITY
        ====================================================== */

        @media (max-width: 760px) {
          .collections-hero {
            min-height: 620px;
          }

          .hero-content {
            width: calc(100% - 36px);
          }

          .hero-content h1 {
            font-size: clamp(
              46px,
              13vw,
              64px
            );
          }

          .hero-content p {
            max-width: 470px;
          }

          .hero-shell-left {
            right: -3%;
            bottom: 2%;
            opacity: .33;
          }

          .hero-shell-right {
            right: 13%;
            top: 11%;
            opacity: .28;
          }

          .collections-intro {
            width: calc(100% - 32px);
          }

          .collection-grid-wrapper {
            width: calc(100% - 28px);
          }

          .collection-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
            gap: 11px;
          }

          .collection-visual {
            aspect-ratio: 1 / 1.16;
          }

          .collection-symbol {
            top: 9px;
            right: 9px;
            width: 31px;
            height: 31px;
            font-size: 14px;
          }

          .collection-top-label {
            top: 10px;
            left: 10px;
            right: 10px;
            font-size: 6px;
          }

          .collection-top-label
          > span:last-child {
            padding-right: 38px;
          }

          .collection-watermark {
            left: 10px;
            bottom: 8px;
            font-size: 18px;
          }

          .collection-content {
            padding: 14px 13px 17px;
          }

          .collection-mini {
            font-size: 5px;
            letter-spacing: .13em;
          }

          .collection-content h3 {
            font-size: clamp(
              20px,
              6vw,
              26px
            );
          }

          .collection-content p {
            min-height: 29px;
            font-size: 8px;
            line-height: 1.45;
          }

          .collection-explore {
            font-size: 6px;
            letter-spacing: .11em;
          }

          .collection-explore span {
            font-size: 11px;
          }

          .collection-story {
            padding:
              72px
              0
              82px;
          }

          .story-inner {
            width: calc(100% - 32px);
            grid-template-columns: 1fr;
            gap: 43px;
          }

          .story-content h2 {
            font-size: clamp(
              43px,
              11vw,
              56px
            );
          }

          .story-content > p {
            font-size: 12px;
          }

          .special-quote {
            padding:
              21px
              18px
              19px
              28px;
          }

          .special-quote p {
            font-size: 15px;
          }

          .story-button {
            width: 100%;
          }

          .story-visual-wrapper {
            width: 100%;
          }

          .story-frame {
            padding: 8px;
          }

          .story-visual {
            aspect-ratio: 1 / 1.12;
          }

          .story-watermark {
            font-size: 80px;
          }

          .ocean-statement-content {
            width: calc(100% - 26px);
          }

          .ocean-statement-content h2 {
            font-size: clamp(
              44px,
              11vw,
              58px
            );
          }
        }

        /* =====================================================
           SMALL PHONES
        ====================================================== */

        @media (max-width: 390px) {
          .collection-grid {
            gap: 8px;
          }

          .collection-content {
            padding:
              12px
              10px
              15px;
          }

          .collection-content h3 {
            font-size: 19px;
          }

          .collection-content p {
            font-size: 7px;
          }

          .collection-watermark {
            font-size: 15px;
          }

          .story-inner {
            width: calc(100% - 26px);
          }
        }

        /* =====================================================
           MOTION PREFERENCE
        ====================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .paara-page-enter,
          .paara-reveal,
          .collection-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .hero-shell,
          .story-shell-visual,
          .hero-star {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Collections;