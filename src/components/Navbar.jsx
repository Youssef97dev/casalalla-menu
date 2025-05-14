import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import LogoShow from "./LogoShow";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-start items-center bg-primary pb-2 shadow-lg z-50">
      <div
        className="w-full flex justify-start items-center bg-background h-[12vh] pl-5 gap-2"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/xynldb9nt1wsnincchni)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Link
          href="http://wa.me/212675480103"
          target="_blank"
          className="text-background"
        >
          <FaWhatsapp size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/casa.lalla.takerkoust/"
          target="_blank"
          className="text-background"
        >
          <FaInstagram size={20} />
        </Link>
      </div>
      <div className="absolute top-14 w-full flex justify-center items-center">
        <LogoShow />
      </div>
    </div>
  );
};

export default Navbar;
