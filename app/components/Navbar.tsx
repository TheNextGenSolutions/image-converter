"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Navbar = () => {
  const router = useRouter();

  const handleNavCick = useCallback(
    (slug: string) => {
      switch (slug) {
        case "home":
          router.push("/");
          break;
        case "about":
          router.push("/about");
          break;
        case "services":
          router.push("/services");
          break;
        case "contact":
          router.push("/contact");
          break;

        default:
          break;
      }
    },
    [router]
  );

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Image Converter</div>
        <ul className="flex space-x-4">
          <li>
            <div
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={() => handleNavCick("home")}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={() => handleNavCick("about")}
            >
              About
            </div>
          </li>
          <li>
            <div
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={() => handleNavCick("services")}
            >
              Services
            </div>
          </li>
          <li>
            <div
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={() => handleNavCick("contact")}
            >
              Contact
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
