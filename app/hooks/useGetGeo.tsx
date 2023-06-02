"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Geo {
  ip: string | number;
  lat: string | number;
  lon: string | number;
}
const useGetGeo = () => {
  const [geo, setGeo] = useState<Geo | boolean>(false);

  useEffect(() => {
    if (navigator !== undefined) {
      (async () => {
        const thisIPRes = await axios.get("http://ip-api.com/json/");
        const thisIP = thisIPRes.data;

        try {
          const permission = await navigator.permissions.query({
            name: "geolocation",
          });
          if (["prompt", "granted"].includes(permission.state)) {
            navigator.geolocation.getCurrentPosition((pos) => {
              setGeo({
                ip: thisIP.query,
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
              });
            });
          } else {
            setGeo({
              ip: thisIP.query,
              lat: thisIP.lat,
              lon: thisIP.lon,
            });
          }
        } catch (e) {
          alert(e);
        }
      })();
    }
  }, []);

  return geo;
};

export default useGetGeo;
