"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  images: string[];
}

const ServicesClient: React.FC = () => {
  const dummyProjects: Project[] = [
    {
      title: "Project 1",
      description: "Description for Project 1.",
      images: [
        "https://via.placeholder.com/500x300",
        "https://via.placeholder.com/501x300",
        "https://via.placeholder.com/502x300",
      ],
    },
    {
      title: "Project 2",
      description: "Description for Project 2.",
      images: [
        "https://via.placeholder.com/500x301",
        "https://via.placeholder.com/501x301",
        "https://via.placeholder.com/502x301",
      ],
    },
    {
      title: "Project 3",
      description: "Description for Project 3.",
      images: [
        "https://via.placeholder.com/500x302",
        "https://via.placeholder.com/501x302",
        "https://via.placeholder.com/502x302",
      ],
    },
    // Add more dummy projects here
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openImageModal = (image: string): void => {
    setSelectedImage(image);
  };

  const closeImageModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg cursor-pointer hover:bg-gray-50 transition duration-300"
            >
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-4 space-y-2">
                {project.images.map((image, imageIndex) => (
                  <Image
                    width={1000}
                    height={1000}
                    key={imageIndex}
                    src={image}
                    alt={`Image ${imageIndex}`}
                    className="w-full h-auto rounded-lg cursor-pointer"
                    onClick={() => openImageModal(image)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Accordion */}
        {dummyProjects.map((project, index) => (
          <div
            key={index}
            className={`mt-4 p-4 bg-white shadow-md rounded-lg ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}

        {/* Full Screen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
            onClick={closeImageModal}
          >
            <button
              className="absolute top-4 right-4 text-white z-10"
              onClick={closeImageModal}
            >
              Close
            </button>
            <Image
              width={1000}
              height={1000}
              src={selectedImage}
              alt="Full Screen"
              className="max-h-full max-w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesClient;
