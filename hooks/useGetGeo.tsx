"use client";

import { updateCountry } from "@/services/redux/appSlices/geoSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Geo {
  ip: string | number;
  lat: string | number;
  lon: string | number;
}
const useGetGeo = () => {
  const [geo, setGeo] = useState<Geo | boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator !== undefined) {
      (async () => {
        const thisIPRes = await axios.get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.geoApiKey}`
        );
        const thisIP = thisIPRes.data;
        dispatch(updateCountry(thisIP?.country_name));

        try {
          const permission = await navigator.permissions.query({
            name: "geolocation",
          });
          if (["prompt", "granted"].includes(permission.state)) {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                //use current lat and lon
                setGeo({
                  ip: thisIP.ip,
                  lat: pos.coords.latitude,
                  lon: pos.coords.longitude,
                });
              },
              () => {
                //use default ip lat and lon
                setGeo({
                  ip: thisIP.ip,
                  lat: thisIP.latitude,
                  lon: thisIP.longitude,
                });
              }
            );
          } else {
            //use default ip lat and lon
            setGeo({
              ip: thisIP.ip,
              lat: thisIP.latitude,
              lon: thisIP.longitude,
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
