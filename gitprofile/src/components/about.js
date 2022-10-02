import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Placeholder from "react-bootstrap/Placeholder";
import { db } from "../firestore";

export const About = () => {
  const [bio, setBio] = useState(bioPlaceHolder);
  const bioRef = doc(db, "profile", "bio");

  useEffect(() => {
    const getBio = async () => {
      const docBio = await getDoc(bioRef);
      setBio(docBio.data());
    };
    getBio();
  }, []);

  return (
    <Container fluid as="section" id="about" className="my-4">
      <Row className="justify-content-center">
        <Col lg={3} className="p-3">
          <Image
            src="/images/profile_image.jpg"
            className="profile-pic"
            alt="Travis Prall Profile Pic"
            fluid
          />
        </Col>
        <Col lg={9} className="bio">
          <h2>About Me</h2>
          <Row>
            <Col>
              <p>{bio.bio}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const bioPlaceHolder = () => (
  <Placeholder as="p" animation="glow">
    <Placeholder xs={11} />
    <Placeholder xs={6} /> <Placeholder xs={2} /> <Placeholder xs={3} />
    <Placeholder xs={11} />
    <Placeholder xs={11} />
    <Placeholder xs={11} />
    <Placeholder xs={6} /> <Placeholder xs={2} />
  </Placeholder>
);
