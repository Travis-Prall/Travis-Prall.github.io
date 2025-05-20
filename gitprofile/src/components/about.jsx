import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Placeholder from "react-bootstrap/Placeholder";
import Alert from "react-bootstrap/Alert"; // Added for error display
import { db } from "../firestore";

const BioPlaceholder = () => (
  // Renamed for clarity and convention
  <Placeholder as="p" animation="glow">
    <Placeholder xs={11} />
    <Placeholder xs={6} /> <Placeholder xs={2} /> <Placeholder xs={3} />
    <Placeholder xs={11} />
    <Placeholder xs={11} />
    <Placeholder xs={11} />
    <Placeholder xs={6} /> <Placeholder xs={2} />
  </Placeholder>
);

export const About = () => {
  const [bio, setBio] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBio = async () => {
      // Renamed for clarity
      setLoading(true);
      setError(null);
      try {
        const bioRef = doc(db, "profile", "bio"); // Defined inside useEffect or ensure stability if defined outside
        const docSnap = await getDoc(bioRef); // Renamed from docBio for clarity
        if (docSnap.exists()) {
          setBio(docSnap.data());
        } else {
          setError("Bio document not found.");
          console.warn("Bio document not found in Firestore.");
        }
      } catch (e) {
        setError("Failed to load bio. Please try again later.");
        console.error("Error fetching bio:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchBio();
  }, []); // db could be a dependency if it's not guaranteed to be stable

  return (
    <Container fluid as="section" id="about" className="my-4">
      <Row className="justify-content-center align-items-center">
        {" "}
        {/* Added align-items-center for better vertical alignment */}
        <Col lg={3} className="p-3 text-center">
          {" "}
          {/* Added text-center for better image centering on smaller screens */}
          <Image
            src="/images/profile_image.jpg" // Consider moving to a constants file or importing if used elsewhere
            className="profile-pic img-fluid rounded-circle" // Added img-fluid and rounded-circle for responsiveness and style
            alt="Travis Prall Profile Pic"
            // fluid prop is redundant if img-fluid class is used
          />
        </Col>
        <Col lg={9} className="bio">
          <h2>About Me</h2>
          {loading && <BioPlaceholder />}
          {error && <Alert variant="danger">{error}</Alert>}
          {bio && !loading && !error && (
            <Row>
              <Col>
                {/* Assuming bio.bio is a string. If it can contain HTML, ensure it's sanitized or use dangerouslySetInnerHTML with caution. */}
                <p>{bio.bio}</p>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};
