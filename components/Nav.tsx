"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";

const Nav = () => {
  return (
    <nav>
      <Navbar className="top-2 flex justify-between py-0" />
    </nav>
  );
};

export default Nav;

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center h-5  w-[85vw] md:w-[35vw]">
          <Image src={"/icons/logo.png"} alt="logo" width={200} height={90} className=" m-0 p-0 md:w-[300px]"/>
          <Link href={"https://mgt.sjp.ac.lk/itc/bsc-business-information-systems-special/"}>
            <button className="rounded-full border border-white bg-transparent py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black-100 text-center text-sm font-inter flex items-center justify-center">
              More info
            </button>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
