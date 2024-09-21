import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Networks } from "./social";
import { collection, getDocs } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useState, useEffect } from "react";
import { db } from "../firestore";

export const KeywordDb = ({ setPageMode }) => {
  const [keywords, setKeywords] = useState([]);
  const [activeKey, setActiveKey] = useState("Art");
  const keywordsCollectionRef = collection(db, "keywords");
  const analytics = getAnalytics();

  useEffect(() => {
    const getKeywords = async () => {
      const data = await getDocs(keywordsCollectionRef);
      setKeywords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getKeywords();
  }, []);

  useEffect(() => {
    setPageMode(activeKey);
  }, [activeKey]);

  const handleClick = (word) => {
    if (word !== activeKey) {
      setActiveKey(word);
      logEvent(analytics, word);
    }
  };

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
};

export const Header = ({ pageMode, setPageMode }) => {
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
      // Cleanup to avoid multiple appendings
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
              <KeywordDb pageMode={pageMode} setPageMode={setPageMode} />
            </Row>
            <Row>
              <Networks />
              {/* Tracking image has been moved out of the JSX */}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
