import React, { useEffect, useCallback, useMemo, useState, memo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Container, Row, Col, Button } from "react-bootstrap";
import { db } from "../firestore";

const keywordsCollectionRef = collection(db, "keywords");
const analytics = getAnalytics();

const KeywordButtons = memo(({ setPageMode }) => {
  const [keywords, setKeywords] = useState([]);
  const [activeKey, setActiveKey] = useState("Art");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKeywords = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getDocs(keywordsCollectionRef);
        setKeywords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (e) {
        console.error("Error fetching keywords:", e);
        setError("Failed to load keywords.");
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
    if (loading)
      return (
        <Col>
          <p>Loading keywords...</p>
        </Col>
      );
    if (error)
      return (
        <Col>
          <p className="text-danger">{error}</p>
        </Col>
      );
    if (keywords.length === 0)
      return (
        <Col>
          <p>No keywords found.</p>
        </Col>
      );

    return keywords.map((keyword) => (
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
    ));
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
              <h1>{process.env.REACT_APP_PERSON_NAME || "Your Name"}</h1>
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
