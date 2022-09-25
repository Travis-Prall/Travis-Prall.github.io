import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { Networks } from "./social";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firestore";

export const KeywordDb = () => {
  const [keywords, setKeywords] = useState([]);
  const keywordsCollectionRef = collection(db, "keywords");

  useEffect(() => {
    const getKeywords = async () => {
      const data = await getDocs(keywordsCollectionRef);
      setKeywords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getKeywords();
  }, []);

  return keywords.map((keyword) => {
    return (
      <Col key={keyword.word} className="d-flex py-1 justify-content-center">
        <Badge id="keyword" bg="dark">
          {keyword.word}
        </Badge>
      </Col>
    );
  });
};

export const Header = () => (
  <Container fluid as="header" id="home">
    <Container fluid id="banner">
      <Row className="justify-content-center">
        <Col xs={6} className="banner m-5">
          <Row>
            <h1>Travis Prall</h1>
          </Row>
          <Row>
            <KeywordDb />
          </Row>
          <Row>
            <Networks />
          </Row>
        </Col>
      </Row>
    </Container>
  </Container>
);
