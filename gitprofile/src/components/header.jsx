import React, { useEffect, useCallback, useMemo, useState, memo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Container, Row, Col, Button } from "react-bootstrap";
import { db } from "../firestore";
import { FALLBACK_KEYWORDS, SITE_PROFILE } from "../content/siteContent";

const keywordsCollectionRef = collection(db, "keywords");
const analytics = getAnalytics();
const FALLBACK_KEYWORD_ITEMS = FALLBACK_KEYWORDS.map((word) => ({
  id: `fallback-${word}`,
  word
}));

const KeywordButtons = memo(({ setPageMode }) => {
  const [keywords, setKeywords] = useState([]);
  const [activeKey, setActiveKey] = useState(
    FALLBACK_KEYWORD_ITEMS[0]?.word || "Art"
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKeywords = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getDocs(keywordsCollectionRef);
        const fetchedKeywords = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        if (fetchedKeywords.length > 0) {
          setKeywords(fetchedKeywords);
          setActiveKey((prevKey) =>
            fetchedKeywords.some((item) => item.word === prevKey)
              ? prevKey
              : fetchedKeywords[0].word
          );
        } else {
          setKeywords(FALLBACK_KEYWORD_ITEMS);
        }
      } catch (e) {
        console.error("Error fetching keywords:", e);
        setError("Failed to load keywords. Showing fallback values.");
        setKeywords(FALLBACK_KEYWORD_ITEMS);
      } finally {
        setLoading(false);
      }
    };
    fetchKeywords();
  }, []);

  useEffect(() => {
    setPageMode(activeKey);
  }, [activeKey, setPageMode]);

  const handleClick = useCallback(
    (word) => {
      if (word !== activeKey) {
        setActiveKey(word);
        logEvent(analytics, "keyword_click", { keyword: word });
      }
    },
    [activeKey]
  );

  const keywordButtonElements = useMemo(() => {
    const displayKeywords =
      keywords.length > 0 ? keywords : FALLBACK_KEYWORD_ITEMS;
    if (loading)
      return (
        <Col>
          <p>Loading keywords...</p>
        </Col>
      );
    if (displayKeywords.length === 0)
      return (
        <Col>
          <p>No keywords found.</p>
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
              variant={activeKey === keyword.word ? "primary" : "dark"}
              onClick={() => handleClick(keyword.word)}
              aria-pressed={activeKey === keyword.word}
            >
              {keyword.word}
            </Button>
          </Col>
        ))}
      </>
    );
  }, [keywords, activeKey, handleClick, loading, error]);

  return <Row className="justify-content-center">{keywordButtonElements}</Row>;
});
KeywordButtons.displayName = "KeywordButtons";

const Header = ({ setPageMode }) => {
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
      className="py-5 text-center bg-light"
    >
      <Row className="justify-content-center">
        <Col md={8} lg={6} className="banner m-3 m-md-5">
          <Row className="justify-content-center">
            <Col>
              <h1>{process.env.REACT_APP_PERSON_NAME || SITE_PROFILE.name}</h1>
            </Col>
          </Row>
          <KeywordButtons setPageMode={setPageMode} />
        </Col>
      </Row>
    </Container>
  );
};

export { Header };
export default Header;
