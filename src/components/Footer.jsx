import React from "react";

const Footer = () => {
  const gitHub = "https://github.com/JoseGuerraHermo/pixels-to-rems"
  const goToGitHub = () => window.open(gitHub, "_blank");
  
  return (
    <div className="h-6 w-full flex justify-end">
      <p 
        className="mr-2 text-xs text-orange-400"
      >
        Github: 
          <a 
            className="no-underline hover:underline" 
            href={gitHub}
            onClick={goToGitHub}
          >
            pixels-to-rems
          </a>
      </p>
    </div>
  )
};

export default Footer;