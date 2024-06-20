import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* create a center footer with center text and top white line  */}
      <div className="flex flex-col gap-2 justify-center items-center bg-black text-white-200 w-[850px] border-t-[1px] border-white border-opacity-20 text-sm md:w-full py-3 mt-10">
        <p className=" font-sans font-bold text-md md:text-lg">Special Thanks</p>
        <p className="-mt-2">Thank you, everyone, for your incredible support and hard work in making this achievement a reality!</p>
        <p className="flex -mb-2">
          Proudly Open sourced with {" "}
          <Link
            href={
              "https://github.com/kasun-m-rathnayaka/Department-of-IT-Torana"
            }
            className="font-bold flex pl-1 hover:text-blue-300"
          >
            github 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 pl-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </Link>
        </p>
        <p>© 2024 Student Association of Information Technology</p>
      </div>
    </div>
  );
};

export default Footer;
