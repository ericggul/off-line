import useLocation from "./useLocation";
import { useState, useEffect } from "react";

function getDistance(pointA, pointB) {
  const lat1 = pointA.lat / (180 / Math.PI);
  const lng1 = pointA.lng / (180 / Math.PI);
  const lat2 = pointB.lat / (180 / Math.PI);
  const lng2 = pointB.lng / (180 / Math.PI);
  const distance = 6371 * Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1));
  return distance;
}

export default function useDistance(location) {
  const { pos, permittedStatus } = useLocation();

  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (permittedStatus) {
      setDistance(getDistance(location, pos));
    }
  }, [permittedStatus]);
  return distance;
}
