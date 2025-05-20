import React, { useState, useEffect, memo } from "react";
import Stack from "react-bootstrap/Stack";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore";
import Placeholder from "react-bootstrap/Placeholder";
import Alert from "react-bootstrap/Alert";

const SocialLinksInternal = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      setLoading(true);
      setError(null);
      try {
        const socialCollectionRef = collection(db, "social");
        const data = await getDocs(socialCollectionRef);
        setSocialLinks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (e) {
        console.error("Error fetching social links:", e);
        setError("Failed to load social links.");
      } finally {
        setLoading(false);
      }
    };
    fetchSocialLinks();
  }, []);

  if (loading) {
    return (
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center py-1"
      >
        {[...Array(3)].map((_, index) => (
          <Placeholder key={index} animation="glow">
            <Placeholder
              xs={2}
              size="lg"
              bg="secondary"
              style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
            />
          </Placeholder>
        ))}
      </Stack>
    );
  }

  if (error) {
    return (
      <Alert variant="warning" className="text-center p-1">
        {error}
      </Alert>
    );
  }

  if (socialLinks.length === 0) {
    return (
      <p className="text-center text-muted py-1">No social links available.</p>
    );
  }

  return socialLinks.map((network) => (
    <a
      key={network.id}
      href={network.url}
      title={network.tip}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={network.tip || network.className}
    >
      <i className={`${network.className} fs-4`}></i>
    </a>
  ));
};
SocialLinksInternal.displayName = "SocialLinks";
const SocialLinks = memo(SocialLinksInternal);

export const SocialMediaBar = () => {
  return (
    <Stack
      direction="horizontal"
      className="justify-content-center py-2"
      gap={4}
      id="social-media-bar"
    >
      <SocialLinks />
    </Stack>
  );
};
SocialMediaBar.displayName = "SocialMediaBar";
