import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
          <Image src="/DANAE+IO 1.png" 
            width={344}
            height={50}
            alt="logo" 
          />
      </div>
      
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/oeuvres">
        <a>Liste d oeuvre</a>
      </Link>
    </nav>
  );
};

export default Navbar;
