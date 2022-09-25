// import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firestore";

const NetworkArray = () => {
  const [sociallinks, setSocial] = useState([]);
  const socialCollectionRef = collection(db, "social");

  useEffect(() => {
    const getSocial = async () => {
      const data = await getDocs(socialCollectionRef);
      setSocial(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSocial();
  }, []);

  return sociallinks.map((network) => {
    return (
      <a key={network.id} href={network.url} title={network.tip}>
        <i className={network.className}></i>
      </a>
    );
  });
};

export const Networks = () => {
  return (
    <Stack
      direction="horizontal"
      className="justify-content-center py-1"
      gap={3}
      id="social">
      <NetworkArray />
    </Stack>
  );
};
