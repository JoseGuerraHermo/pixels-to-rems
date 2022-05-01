import React from "react";

const Footer = () => (
  <div className="h-6 w-full flex justify-end">
    <p 
      className="mr-2 text-xs text-orange-400"
    >
      Github: 
        <a 
          className="no-underline hover:underline" 
          href="https://github.com/JoseGuerraHermo/pixels-to-rems"
        >
          pixels-to-rems
        </a>
    </p>
  </div>
);

export default Footer;