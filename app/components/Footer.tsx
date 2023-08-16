import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            Thank you for using our image conversion service!
          </p>
          <div className="flex md:ml-4">
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 ml-3 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 ml-3 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 ml-3 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
