"use client";
import { useRef } from "react";
import NavButton from "./NavButton";
import { useState } from "react";
import HamburguerButton from "./HamburguerButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <main className="text-zinc-200 sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
      <div className="flex items-center">
        <img src="/images/logo-inverted.png" width="50" />
        <div className="text-2xl font-bold ">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-end">
        <NavButton label="Home" subItems={["cenas1", "cenas2"]} />
        <NavButton label="Lineup" subItems={["cenas3", "cenas4"]} />
        <NavButton label="Tickets" subItems={["cenas1", "cenas5"]} />
        <NavButton label="Support" subItems={["cenas1", "cenas2"]} />
      </div>

      <HamburguerButton
        isMenuOpen={isMenuOpen}
        handleOpenFunction={handleClick}
      />

      <div
        className={
          isMenuOpen
            ? "absolute top-14 bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0"
            : "absolute top-14 bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0 hidden"
        }
      >
        mobile menu
      </div>
    </main>
  );
}
