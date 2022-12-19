import { useState, useEffect } from "react";
// import { getFirestore } from "firebase/firestore";
import axios from "axios";

export const Honey = () => {
  //creating IP state
  const [ip, setIP] = useState("");
  const [coords, setCords] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://www.geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
    setCords(GetUserCoordinates());
    // setGeo(geolocationAPI.getCurrentPosition());
  }, []);

  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.log("IP: " + ip);
      console.log("Coords: " + coords);
    } else {
      console.log("This is a production build");
    }
  }, [ip, coords]);

  return (
    <div className="App">
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
};

const GetUserCoordinates = () => {
  // const [lat, setLat] = useState("");
  // const [long, setLong] = useState("");
  const geolocationAPI = navigator.geolocation;

  // useEffect(() => {
  //   //passing getData method to the lifecycle method
  //   console.log("GeolocationAPI: " + geolocationAPI);
  //   // console.log("Lat: " + lat);
  //   // console.log("Long: " + long);
  //   // setGeo(geolocationAPI.getCurrentPosition());
  // }, []);

  if ("geolocation" in navigator) {
    geolocationAPI.getCurrentPosition((position) => {
      const { coords } = position;
      console.log("Cords are", coords);
      return coords;
    });
  } else {
    console.log("geolocation IS NOT available");
  }
  return "";
};
