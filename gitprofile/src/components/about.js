import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
import Placeholder from "react-bootstrap/Placeholder";

export const About = (resumeData) => {
  const [bio, setBio] = useState(bioPlaceHolder);

  useEffect(() => {
    if (resumeData.bio) {
      setBio(<p>{resumeData.bio}</p>);
    }
  }, [resumeData]);

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
            <Col>{bio}</Col>
          </Row>
          {/* <Row className="justify-content-end">
                <Col>
                  <a href="/forms/Travis_Prall_Resume_IT.pdf" download>
                    <Button variant="dark" size="sm">
                      DownLoad Resume
                    </Button>
                  </a>
                </Col>
              </Row> */}
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

// const bioProfile = (resumeData) => {
//   console.log(resumeData);
//   if (resumeData.bio) {
//     <p>{resumeData.bio}</p>;
//   } else {
//     bioPlaceHolder;
//   }
// };
