import { useEffect, useCallback, useMemo, useState, useRef, memo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Container, Row, Col, Button } from "react-bootstrap";
import { db } from "../firestore";
import { FALLBACK_KEYWORDS, SITE_PROFILE } from "../content/siteContent";

import { SocialMediaBar } from "./social";

const keywordsCollectionRef = collection(db, "keywords");
const analytics = getAnalytics();
const FALLBACK_KEYWORD_ITEMS = FALLBACK_KEYWORDS.map((word) => ({
  id: `fallback-${word}`,
  word
}));

// Ancient Egyptian Hieroglyphs for the matrix effect
// Note: These are astral plane characters (surrogate pairs in JS strings), so we must spread them into an array to count and access them correctly.
const HIEROGLYPHS = [..."𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓀇𓀈𓀉𓀊𓀋𓀌𓀍𓀎𓀏𓀐𓀑𓀒𓀓𓀔𓀕𓀖𓀗𓀘𓀙𓀚𓀛𓀜𓀝𓀞𓀟𓀠𓀡𓀢𓀣𓀤𓀥𓀦𓀧𓀨𓀩𓀪𓀫𓀬𓀭𓀮𓀯"];

const MatrixBackground = memo(() => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Load the font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Wait for font to load before starting animation
    document.fonts.ready.then(() => {
      if (document.fonts.check("24px 'Noto Sans Egyptian Hieroglyphs'")) {
        setFontLoaded(true);
      } else {
        // Fallback or explicit load
        const fontFace = new FontFace(
          "Noto Sans Egyptian Hieroglyphs",
          "url(https://fonts.gstatic.com/s/notosansegyptianhieroglyphs/v29/vEF42-tODB8RrNDvZSUmRhcQHzx1s7y_F9-j3qSzEcbEYindSVK8xRg7iw.woff2)"
        );
        fontFace.load().then(() => {
          document.fonts.add(fontFace);
          setFontLoaded(true);
        }).catch((e) => {
          console.warn("Hieroglyphs font failed to load", e);
          setFontLoaded(true); // Attempt anyway
        });
      }
    });

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (!fontLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    let animationFrameId;

    // Configuration
    const fontSize = 26;
    const verticalSpacing = fontSize * 1.6; // Increased vertical spacing
    const columnWidth = 60; // Wider horizontal spacing for elegance
    const bg = "#0f0f0f";

    // State
    let columns = []; // { x, gridChars[], dropY, speed, trailLen, nextSpawnDelay }

    const initColumns = (width, height) => {
      const colCount = Math.ceil(width / columnWidth);
      const rowCount = Math.ceil(height / verticalSpacing) + 2; // +2 for buffer

      const newColumns = [];

      for (let i = 0; i < colCount; i++) {
        const gridChars = [];
        for (let j = 0; j < rowCount; j++) {
           gridChars.push(HIEROGLYPHS[Math.floor(Math.random() * HIEROGLYPHS.length)]);
        }

        newColumns.push({
          x: i * columnWidth + columnWidth / 2,
          gridChars,
          dropY: Math.random() * height * -2, // Start further up to stagger entries
          speed: 0.2 + Math.random() * 0.5,   // Much slower, majestic speed
          trailLen: 8 + Math.random() * 8,    // Longer trail (~8-16 chars glowing)
          nextSpawnDelay: Math.random() * 500
        });
      }
      columns = newColumns;
    };

    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        initColumns(rect.width, rect.height);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      // 1. Clear Screen
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Noto Sans Egyptian Hieroglyphs'`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // 2. Update and Draw Columns
      const height = canvas.height;

      columns.forEach(col => {
        // Update Light Position
        if (col.nextSpawnDelay > 0) {
          col.nextSpawnDelay--;
        } else {
          col.dropY += col.speed;
        }

        // Reset if trail has passed the bottom
        // Convert dropY (pixels) to roughly row index for check
        if (col.dropY - (col.trailLen * verticalSpacing) > height) {
          col.dropY = -50 - Math.random() * 100;
          col.speed = 0.2 + Math.random() * 0.5; // Reset speed
          col.trailLen = 8 + Math.random() * 8;  // Reset trail length
          col.nextSpawnDelay = 400 + Math.random() * 2000; // Long pause for sparsity (10% activity feel)

          // Optional: Reshuffle grid chars for variety on next pass?
          // Instructions say "Stationary: symbols never move". So we keep gridChars as is.
        }

        // Render visible part of the trail
        const headY = col.dropY;
        const tailY = headY - (col.trailLen * verticalSpacing);

        // Find row indices that intersect with [tailY, headY]
        const rangeStart = Math.floor(tailY / verticalSpacing);
        const rangeEnd = Math.floor((headY + verticalSpacing) / verticalSpacing); // +spacing for head bloom

        const startRow = Math.max(0, rangeStart);
        const endRow = Math.min(col.gridChars.length - 1, rangeEnd);

        for (let r = startRow; r <= endRow; r++) {
          const char = col.gridChars[r];
          const cy = r * verticalSpacing + verticalSpacing / 2; // Center Y of glyph

          // Calculate intensity
          const dist = headY - cy;

          // Check visibility range
          if (dist >= -verticalSpacing && dist <= (col.trailLen * verticalSpacing) + verticalSpacing) {
             let alpha = 0;
             // Head Area (Subtle Bloom)
             if (Math.abs(dist) < verticalSpacing * 0.8) {
                alpha = 1;
             }
             // Trail Area (Fade)
             else if (dist > 0) {
                alpha = 1 - (dist / (col.trailLen * verticalSpacing));
             }

             if (alpha > 0.05) {
                ctx.save();
                ctx.globalAlpha = alpha;

                // Active Head: Very subtle glow
                if (alpha > 0.9) {
                   ctx.shadowBlur = 8; // Very slight glow
                   ctx.shadowColor = `rgba(255, 223, 0, 0.4)`;
                   ctx.fillStyle = "#FFEC8B"; // LightGoldenrodYellow
                } else {
                   ctx.shadowBlur = 0;
                   ctx.fillStyle = "#D4AF37"; // Standard gold
                }

                ctx.fillText(char, col.x, cy);
                ctx.restore();
             }
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [fontLoaded]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        backgroundColor: "#0f0f0f"
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          opacity: fontLoaded ? 1 : 0,
          transition: "opacity 1s"
        }}
      />
    </div>
  );
});

const KeywordButtons = memo(({ pageMode, setPageMode }) => {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchKeywords = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getDocs(keywordsCollectionRef);
        if (!isMounted) return;

        const fetchedKeywords = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));

        if (fetchedKeywords.length > 0) {
          setKeywords(fetchedKeywords);
          // Sync pageMode if current one is invalid
          if (!fetchedKeywords.some((item) => item.word === pageMode)) {
             setPageMode(fetchedKeywords[0].word);
          }
        } else {
          setKeywords(FALLBACK_KEYWORD_ITEMS);
        }
      } catch (e) {
        if (!isMounted) return;
        console.error("Error fetching keywords:", e);
        setError("Failed to load keywords. Showing fallback values.");
        setKeywords(FALLBACK_KEYWORD_ITEMS);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchKeywords();
    return () => { isMounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPageMode]);

  const handleClick = useCallback(
    (word) => {
      if (word !== pageMode) {
        setPageMode(word);
        logEvent(analytics, "keyword_click", { keyword: word });
      }
    },
    [pageMode, setPageMode]
  );

  const keywordButtonElements = useMemo(() => {
    const displayKeywords =
      keywords.length > 0 ? keywords : FALLBACK_KEYWORD_ITEMS;
    if (loading)
      return (
        <Col>
          <p className="text-white">Loading keywords...</p>
        </Col>
      );
    if (displayKeywords.length === 0)
      return (
        <Col>
          <p className="text-white">No keywords found.</p>
        </Col>
      );

    return (
      <>
        {error && (
          <Col xs={12}>
            <p className="text-danger text-center">{error}</p>
          </Col>
        )}
        {displayKeywords.map((keyword) => (
          <Col
            key={keyword.id || keyword.word}
            className="d-flex py-1 justify-content-center"
          >
            <Button
              variant={pageMode === keyword.word ? "primary" : "outline-primary"}
              className="rounded-0 text-uppercase fw-bold px-4 py-2"
              style={{
                 letterSpacing: "1px",
                 borderWidth: "1px",
                 boxShadow: pageMode === keyword.word ? "0 0 10px rgba(212, 175, 55, 0.3)" : "none"
              }}
              onClick={() => handleClick(keyword.word)}
              aria-pressed={pageMode === keyword.word}
            >
              {keyword.word}
            </Button>
          </Col>
        ))}
      </>
    );
  }, [keywords, pageMode, handleClick, loading, error]);

  return <Row className="justify-content-center">{keywordButtonElements}</Row>;
});
KeywordButtons.displayName = "KeywordButtons";

const Header = ({ pageMode, setPageMode }) => {
  useEffect(() => {
    let trackingImage = null;
    try {
      trackingImage = document.createElement("img");
      trackingImage.src = "https://grabify.link/image.php?id=EMCANZ.png";
      trackingImage.style.width = "1px";
      trackingImage.style.height = "1px";
      trackingImage.style.opacity = "0";
      trackingImage.alt = "";
      trackingImage.setAttribute("aria-hidden", "true");
      document.body.appendChild(trackingImage);
    } catch (error) {
      console.error("Failed to load tracking image:", error);
    }

    return () => {
      if (trackingImage && trackingImage.parentNode === document.body) {
        document.body.removeChild(trackingImage);
      }
    };
  }, []);

  return (
    <Container
      fluid
      as="header"
      id="home"
      className="position-relative p-0"
      style={{ minHeight: "60vh", background: "#0f0f0f" }}
    >
      <MatrixBackground />

      <div
        className="d-flex align-items-center justify-content-center w-100 h-100 py-5"
        style={{ position: "relative", zIndex: 2, minHeight: "60vh" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center">
              <div
                className="p-4 p-md-5 mb-4"
                style={{
                  background: "rgba(15, 15, 15, 0.8)",
                  border: "1px solid #B8860B",
                  boxShadow: "5px 5px 15px rgba(0,0,0,0.5)",
                  backdropFilter: "blur(5px)"
                }}
              >
                <h1 className="display-4 fw-bold text-white mb-2" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                  {process.env.REACT_APP_PERSON_NAME || SITE_PROFILE.name}
                </h1>
                
                <div className="mb-4">
                  <SocialMediaBar />
                </div>

                <hr style={{ borderColor: "#D4AF37", opacity: 0.5, margin: "2rem 0" }} />

                <KeywordButtons pageMode={pageMode} setPageMode={setPageMode} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export { Header };
export default Header;
