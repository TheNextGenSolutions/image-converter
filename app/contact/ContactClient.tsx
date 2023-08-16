import Image from "next/image";
import React from "react";

interface Info {
  name: string;
  role: string;
  email: string;
  phone: string;
}

const ContactClient: React.FC = () => {
  const dummyInfo: Info[] = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      email: "john@example.com",
      phone: "+1 (123) 456-7890",
    },
    // Add more dummy info cards here
  ];

  const randomImageUrls: string[] = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/151",
    "https://via.placeholder.com/152",
    // Add more image URLs here
  ];

  const getRandomImageUrl = (): string => {
    const randomIndex = Math.floor(Math.random() * randomImageUrls.length);
    return randomImageUrls[randomIndex];
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg outline-none active:outline-none border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg outline-none active:outline-none border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  className="w-full rounded-lg outline-none active:outline-none border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 py-2 px-4"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:col-span-1 bg-white p-6 shadow-md">
            <div className="mb-4">
              <Image
                width={1000}
                height={1000}
                src={getRandomImageUrl()}
                alt="Random"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              {dummyInfo.map((info, index) => (
                <div key={index} className="mb-2">
                  <p className="text-gray-600">{info.name}</p>
                  <p className="text-gray-500 text-sm">{info.role}</p>
                  <p className="text-gray-500 text-sm">{info.email}</p>
                  <p className="text-gray-500 text-sm">{info.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
