import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image
            src="/images/logo.png"
            alt="logo image"
            className="rounded-full"
            height={45}
            width={45}
          />
        </span>
        <p className="text-slate-600">
          © {new Date().getFullYear()} Manish Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
