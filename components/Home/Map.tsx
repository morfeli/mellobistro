import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect, useRef } from "react";

const accessToken = `pk.eyJ1IjoibW9yZmVsaWRldiIsImEiOiJjbDlqMmF4dGMwd21hM3Vtd21pbWEzYTVzIn0.mlMhvVxr3YriYptMbO9SDQ`;

export const Map = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState<mapboxgl.Map>();
  const [zoom, setZoom] = useState<number>(15);

  const lng = 40.6133338284263;
  const lat = -74.0653392285358;

  useEffect(() => {
    const node = mapContainer.current;
    if (typeof window === "undefined" || node === null) return;
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: accessToken,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lat, lng],
      zoom: zoom,
      attributionControl: false,
    });

    const marker = new mapboxgl.Marker({
      color: "#FFFFFF",
      anchor: "center",
    })
      .setLngLat([lat, lng])
      .setPopup(new mapboxgl.Popup({ offset: 25 }))
      .addTo(mapboxMap);

    mapboxMap.scrollZoom.disable();

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return (
    <div className="p-2 mx-auto bg-white rounded-md">
      <div ref={mapContainer} className="rounded-md w-75vw h-96" />
    </div>
  );
};
