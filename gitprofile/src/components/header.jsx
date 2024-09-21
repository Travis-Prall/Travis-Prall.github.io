import React, { useEffect, useCallback, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Container, Row, Col, Button } from "react-bootstrap";
import { db } from "../firestore";

const keywordsCollectionRef = collection(db, "keywords");
const analytics = getAnalytics();

const KeywordDb = ({ setPageMode }) => {
  const [keywords, setKeywords] = useState([]);
  const [activeKey, setActiveKey] = useState("Art");

  useEffect(() => {
    const getKeywords = async () => {
      const data = await getDocs(keywordsCollectionRef);
      setKeywords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getKeywords();
  }, []);

  useEffect(() => {
    setPageMode(activeKey);
  }, [activeKey, setPageMode]);

  const handleClick = useCallback(
    (word) => {
      if (word !== activeKey) {
        setActiveKey(word);
        logEvent(analytics, word);
      }
    },
    [activeKey, setActiveKey, analytics]
  );

  const keywordButtons = useMemo(() => {
    return keywords.map((keyword) => (
      <Col key={keyword.word} className="d-flex py-1 justify-content-center">
        <Button
          id="keyword"
          variant={activeKey === keyword.word ? "primary" : "dark"}
          onClick={() => handleClick(keyword.word)}
        >
          {keyword.word}
        </Button>
      </Col>
    ));
  }, [keywords, activeKey, handleClick]);

  return keywordButtons;
};

const Header = ({ setPageMode }) => {
  // Programmatically load the tracking image
  useEffect(() => {
    const trackingImage = document.createElement("img");
    trackingImage.src = "https://grabify.link/image.php?id=EMCANZ.png";
    trackingImage.style.width = "1px";
    trackingImage.style.height = "1px";
    trackingImage.style.opacity = "0";
    trackingImage.alt = "";
    document.body.appendChild(trackingImage);

    return () => {
      if (trackingImage) document.body.removeChild(trackingImage);
    };
  }, []);

  return (
    <Container fluid as="header" id="home">
      <Container fluid id="banner">
        <Row className="justify-content-center">
          <Col xs={6} className="banner m-5">
            <Row>
              <h1>{process.env.REACT_APP_PERSON_NAME}</h1>
            </Row>
            <Row>
              <KeywordDb setPageMode={setPageMode} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export { KeywordDb, Header };
export default Header;
