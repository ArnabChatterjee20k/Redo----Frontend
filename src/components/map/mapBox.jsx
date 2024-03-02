import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; // Import styles

const MyMap = () => {
  const mapRef = useRef(null);
  const [location, setLocation] = useState([51.5237629, -0.1584743]);

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

      // Add circle with reduced radius
      const circle = L.circle(location, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100 // Adjust the radius to your desired value in meters
      }).addTo(mapRef.current);

      // Initialize the locate control and automatically start locating the user's position
      const lc = L.control
        .locate({
          position: "topright",
          strings: {
            title: "Show me where I am!",
          },
          locateOptions: {
            enableHighAccuracy: true,
          },
        })
        .addTo(mapRef.current);

      // Event listener to handle location found
      mapRef.current.on("locationfound", (e) => {
        const { lat, lng } = e.latlng;
        setLocation([lat, lng]);
        updateMyLocation(lng, lat).then(() => alert("Location updated successfully!"));
      });

      // Event listener to handle location error
      mapRef.current.on("locationerror", (e) => {
        alert("Location access denied.");
      });

      // Start locating the user's position
      lc.start();
    }
  }, [location]);

  return <div style={{ width: "100%", minHeight: "100vh" }} ref={mapRef} />;
};

export default MyMap;
