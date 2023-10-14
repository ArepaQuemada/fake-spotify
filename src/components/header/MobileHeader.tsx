import React, { useState } from "react";
import spotifyMobile from "@src/assets/spotify-mobile.svg";
import search from "@src/assets/search.svg";

import Image from "next/image";
import Button from "../button/Button";
import Hamburguer from "../hamburguer/Hamburguer";

const MobileHeader = () => {
  return (
    <header className="mobile-header px-4 py-2 flex md:hidden">
      <div className="flex-1">
        <Image src={spotifyMobile} alt="Spotify Logo" width={35} height={35} />
      </div>
      <div className="flex gap-2 items-center">
        <div className="h-[20px]">
          <Image src={search} alt="search" width={20} height={20} />
        </div>
        <div className="capitalize">
          <Button>ABRIR APLICACION</Button>
        </div>
        <Hamburguer />
      </div>
    </header>
  );
};

export default MobileHeader;
