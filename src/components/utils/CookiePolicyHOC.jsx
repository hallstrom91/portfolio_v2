import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CookiePolicy from "@utils/CookiePolicy";

export default function CookiePolicyHOC({ children }) {
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  useEffect(() => {
    const accepted = Cookies.get("cookiePolicy") === "accepted";
    const declined = Cookies.get("cookiePolicy") === "declined";

    if (!accepted && !declined) {
      setShowCookiePolicy(true);
    }
  }, []);
  return (
    <>
      {showCookiePolicy && <CookiePolicy />}
      {children}
    </>
  );
}
