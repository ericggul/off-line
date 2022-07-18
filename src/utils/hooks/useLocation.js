import { useEffect, useState } from "react";

export default function useGeoLocation() {
  const [pos, setPos] = useState({});
  const [permittedStatus, setPermittedStatus] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPos({ lat: position.coords.latitude, lng: position.coords.longitude });
          setPermittedStatus(true);
        },
        (error) => {
          setPermittedStatus(false);
          alert("We need the permission to get your location");

          console.log(error, error.message);
          return;
        }
      );
    } else {
      setPermittedStatus(false);
      alert("Your Browser is outdated. Update your browser or use another one.");
    }
  }, []);

  return { pos, permittedStatus };
}
