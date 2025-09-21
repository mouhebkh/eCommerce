"use client";
import React, { useState } from "react";
import { AlignLeft } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileMenu = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
  return (
    <>
      <button onClick={() => setSidebar(!isSidebarOpen)}>
        <AlignLeft className="hover:text-black md:hidden hoverEffect" />
      </button>
      <div className="md:hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebar(false)} />
      </div>
    </>
  );
};

export default MobileMenu;
