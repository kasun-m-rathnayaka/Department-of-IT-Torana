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
      <Navbar className="top-2 flex justify-between" />
    </nav>
  );
};

export default Nav;

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center  w-[85vw]">
          <Image src={"/icons/logo.png"} alt="logo" width={90} height={90} className=""/>
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
