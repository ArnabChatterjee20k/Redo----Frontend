import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; // Import styles

const MyMap = () => {
  const mapRef = useRef(null);
  const [location, setLocation] = useState([51.5237629, -0.1584743]); // TODO
  const randomLocations = [
    [51.51766217720414, -0.16272291831324473],
    [51.52380177489317, -0.15018913740612755],
    [51.52823818589811, -0.16264941821218608],
    [51.52500413351118, -0.16463617796105313],
    [51.52266420719335, -0.1640401437001545],
    [51.51818939100424, -0.1494997005122992],
    [51.5250368405415, -0.15327310574587526],
    [51.51984898871532, -0.15473975628104462],
    [51.52146235614887, -0.164360946053263],
    [51.524197916733464, -0.15324410686012884],
  ];

  async function updateMyLocation(lng, lat) {
    const uri = "http://127.0.0.1:3000/api/v1/location";
    const id = localStorage.getItem("id");
    const userName = localStorage.getItem("userName");

    const res = await fetch(uri, {
      body: JSON.stringify({ id, lng, lat }),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    });
    return res.json();
  }

  useEffect(() => {
    // Initialize map if it hasn't been initialized yet
    if (!mapRef.current || mapRef.current._leaflet_id === undefined) {
      mapRef.current = L.map(mapRef.current).setView(location, 13);

      // Add tile layer (you can use any tile layer you want)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Add marker
      L.marker(location)
        .addTo(mapRef.current)
        .bindPopup("Demo Popup<br>You can use it dynamically")
        .openPopup();

      // Initialize the locate control and automatically start locating the user's position
      // const lc = L.control
      //   .locate({
      //     position: "topright",
      //     strings: {
      //       title: "Show me where I am!",
      //     },
      //     locateOptions: {
      //       enableHighAccuracy: true,
      //     },
      //   })
      //   .addTo(mapRef.current);

      // Event listener to handle location found
      mapRef.current.on("locationfound", (e) => {
        const { lat, lng } = e.latlng;
        setLocation([lat, lng]);
        // updateMyLocation(lng, lat).then(() => alert("Location updated successfully!"));
      });

      // Event listener to handle location error
      mapRef.current.on("locationerror", (e) => {
        alert("Location access denied.");
      });

      // Start locating the user's position
      // lc.start();
      const icon = L.icon({
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1024px-Sydney_Opera_House_-_Dec_2008.jpg",
        iconSize: [38, 95],
      });
      randomLocations.forEach((ran) => {
        const marker = L.marker(ran, { icon, title: "hello" }).addTo(
          mapRef.current
        );
        marker.addEventListener("click", (e) => {
          console.log(e.sourceTarget.options.icon);
        });
      });
    }
  }, [location]);

  return <div style={{ width: "100%", minHeight: "100vh" }} ref={mapRef} />;
};

export default MyMap;
