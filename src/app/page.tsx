"use client";

import { useState } from "react";
import Aside from "./_components/aside";
import Footer from "./_components/footer";

export default function Home() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Aside isVisible={isAsideVisible} />
      <div className="flex-grow"></div>
      <Footer onToggleAside={toggleAside} isButtonActive={isAsideVisible} /> 
    </div>
  );
}
