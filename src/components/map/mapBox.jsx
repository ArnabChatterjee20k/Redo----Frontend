import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const MyMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map if it hasn't been initialized yet
    if (!mapRef.current || mapRef.current._leaflet_id === undefined) {
      mapRef.current = L.map(mapRef.current).setView([51.505, -0.09], 13);

      // Add tile layer (you can use any tile layer you want)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Add marker
      L.marker([51.5, -0.09]).addTo(mapRef.current)
        .bindPopup('Demo Pop<br>You can use it dynamically')
        .openPopup();

        
    }
  }, []);

  return <div style={{ width: '100%', height: '400px' }} ref={mapRef} />;
};

export default MyMap;
