import { useState } from "react";
import Cookies from "js-cookie";
import { CloseCross } from "@helpers/importHelper";

export default function CookiePolicy() {
  const [accepted, setAccepted] = useState(false);
  const [showPolicy, setShowPolicy] = useState(!Cookies.get("cookiePolicy"));

  // accept cookie consent request
  const acceptCookies = () => {
    Cookies.set("cookiePolicy", "accepted", { expires: 7 });
    setAccepted(true);
    setShowPolicy(false);
  };

  // decline cookie consent request
  const declineCookies = () => {
    Cookies.set("cookiePolicy", "declined", { expires: 1 });
    setAccepted(false);
    setShowPolicy(false);
  };

  // close cookie consent request
  const closePolicy = () => {
    setShowPolicy(false);
  };

  if (!showPolicy || accepted) {
    return null;
  }

  return (
    <div
      id="cookie-consent-gdpr-style"
      className="bg-white fixed z-50 p-2 rounded-lg drop-shadow-xl bottom-8 left-1/2 -translate-x-1/2 w-[95%] md:w-1/2"
    >
      <div className="flex items-center md:justify-between gap-3">
        <div className="content-left pl-4">
          <p className="md:text-sm text-xs">
            Denna webbplats använder cookies.
          </p>
        </div>
        <div className="text-end flex items-center gap-2">
          <span className="px-1 md:px-2">
            <button onClick={declineCookies}>
              <span className="md:text-sm text-xs">Avböj</span>
            </button>
          </span>
          <span className="px-1 md:px-2">
            <button onClick={acceptCookies}>
              <span className="md:text-sm text-xs">Acceptera</span>
            </button>
          </span>
          <span className="cursor-pointer" onClick={closePolicy}>
            <CloseCross height={20} />
          </span>
        </div>
      </div>
    </div>
  );
}
