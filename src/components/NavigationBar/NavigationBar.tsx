"use client";
import NavButton from "./NavButton";
import { useState } from "react";
import HamburguerButton from "./HamburguerButton";
import MobileMenuLink from "./MobileMenuLink";

const LINKS = ["Home", "Lineup", "Tickets", "Support"];

// const LINKS = [
//   {
//     title: "Home",
//     menu: [
//       { subTitle: "Single day ticket", link: "google" },
//       { subTitle: "Single day ticket", link: "google" },
//     ],
//   },

//   {
//     title: "Lineup",
//     menu: [
//       { subTitle: "Single day ticket", link: "google" },
//       { subTitle: "Single day ticket", link: "google" },
//     ],
//   },

//   {
//     title: "Tickets",
//     menu: [
//       { subTitle: "Single day ticket", link: "google" },
//       { subTitle: "Single day ticket", link: "google" },
//     ],
//   },

//   {
//     title: "Support",
//     menu: [
//       { subTitle: "Single day ticket", link: "google" },
//       { subTitle: "Single day ticket", link: "google" },
//     ],
//   },
// ];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuLinkOpen, setMobileMenuLinkOpen] = useState(0);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOpenMobileMenuLink(id: number) {
    if (mobileMenuLinkOpen == id) {
      setMobileMenuLinkOpen(0);
    } else {
      setMobileMenuLinkOpen(id);
    }
  }

  return (
    <main className="z-10 text-zinc-200 sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
      <div className="flex items-center gap-2 ml-2">
        <img src="/images/logo-inverted.png" width="50" />

        <div className="text-2xl font-bold ">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-end">
        <NavButton label={LINKS[0]} subItems={["cenas1", "cenas2"]} />
        <NavButton label={LINKS[1]} subItems={["cenas3", "cenas4"]} />
        <NavButton
          label={LINKS[2]}
          subItems={["Single day ticket", "7 day ticket"]}
        />
        <NavButton label={LINKS[3]} subItems={["cenas1", "cenas2"]} />
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
        <div className="relative md:hidden h-full flex items-center justify-center cursor-pointer text-pink-200 hover:text:zinc-200 transition-colors hover:bg-white/10">
          <button
            onClick={() => handleOpenMobileMenuLink(1)}
            className="p-4 font-bold"
          >
            {LINKS[0]}
          </button>
        </div>

        <MobileMenuLink
          linkId={1}
          subItems={["cenas1", "cenas2"]}
          mobileMenuLinkOpen={mobileMenuLinkOpen}
        />

        <div className="relative md:hidden h-full flex items-center justify-center cursor-pointer text-pink-200 hover:text:zinc-200 transition-colors hover:bg-white/10">
          <button
            onClick={() => handleOpenMobileMenuLink(2)}
            className="p-4 font-bold"
          >
            {LINKS[1]}
          </button>
        </div>

        <MobileMenuLink
          linkId={2}
          subItems={["cenas1", "cenas2"]}
          mobileMenuLinkOpen={mobileMenuLinkOpen}
        />

        <div className="relative md:hidden h-full flex items-center justify-center cursor-pointer text-pink-200 hover:text:zinc-200 transition-colors hover:bg-white/10">
          <button
            onClick={() => handleOpenMobileMenuLink(3)}
            className="p-4 font-bold"
          >
            {LINKS[2]}
          </button>
        </div>

        <MobileMenuLink
          linkId={3}
          subItems={["Single day ticket", "7 day ticket"]}
          mobileMenuLinkOpen={mobileMenuLinkOpen}
        />
      </div>
    </main>
  );
}
