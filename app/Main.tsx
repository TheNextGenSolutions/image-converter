"use client";

import React, { useState, useCallback, useMemo } from "react";
import Dropzone, { FileWithPath } from "react-dropzone";
import Image from "next/image";
import { BsUpload } from "react-icons/bs";

interface ConvertedImage {
  originalImage: File;
  convertedExtension: string;
  convertedBlob: string;
}

const ImageConverter: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [convertedImages, setConvertedImages] = useState<ConvertedImage[]>([]);
  const [error, setError] = useState<string>("");
  const [selectedConversion, setSelectedConversion] = useState<string>(".jpg");

  const supportedExtensions = useMemo(() => {
    return [".jpg", ".jpeg", ".png", ".gif", ".svg"];
  }, []);

  const handleImageUpload = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const file = acceptedFiles[0];

      if (
        file &&
        supportedExtensions.includes(
          file.name.slice(file.name.lastIndexOf(".")).toLowerCase()
        )
      ) {
        setError("");
        setSelectedImage(file);
      } else {
        setError("Invalid file format. Please upload an image file.");
        setSelectedImage(null);
      }
    },
    [supportedExtensions]
  );

  const handleConvert = (extension: string): void => {
    if (!selectedImage) return;

    const reader = new FileReader();
    reader.onload = () => {
      const convertedImage: ConvertedImage = {
        originalImage: selectedImage,
        convertedExtension: extension,
        convertedBlob: reader.result as string,
      };

      setConvertedImages([...convertedImages, convertedImage]);
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleDownloadConverted = (
    blob: string,
    extension: string,
    originalName: string
  ): void => {
    const link = document.createElement("a");
    link.href = blob;
    link.download = `converted_${originalName}${extension}`;
    link.click();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Image Converter</h1>
          <Dropzone onDrop={handleImageUpload}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition duration-300 p-8"
              >
                <input {...getInputProps()} />
                <BsUpload className="text-3xl text-gray-300" />
                <p className="text-gray-500">
                  Drag & drop an image here, or click to select one
                </p>
              </div>
            )}
          </Dropzone>
          {error && <p className="text-red-500 mb-4 mt-5">{error}</p>}
          {selectedImage && (
            <div className="mb-4 flex mt-5">
              <div className="w-1/2 pr-4">
                <Image
                  width={500}
                  height={500}
                  src={URL.createObjectURL(selectedImage)}
                  alt="Uploaded"
                />
              </div>
              <div className="w-1/2">
                <p className="text-gray-600">
                  Image Name: {selectedImage.name}
                </p>
                <p className="text-gray-600">
                  Image Size: {selectedImage.size} bytes
                </p>
              </div>
            </div>
          )}
          {selectedImage && (
            <div className="mb-4">
              <button
                onClick={() => handleConvert(selectedConversion)}
                className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 mr-3"
              >
                Convert to {selectedConversion.toUpperCase()}
              </button>
              <select
                value={selectedConversion}
                onChange={(e) => setSelectedConversion(e.target.value)}
                className="bg-white border border-gray-300 px-3 py-2 rounded-md"
              >
                {supportedExtensions.map((extension) => (
                  <option key={extension} value={extension}>
                    {extension.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          )}
          {convertedImages.map((image, index) => (
            <div key={index} className="mb-4 flex">
              <div className="w-1/2 pr-4">
                <Image
                  width={500}
                  height={500}
                  src={image.convertedBlob}
                  alt={`Converted ${image.convertedExtension}`}
                />
              </div>
              <div className="w-1/2">
                <p className="text-gray-600">
                  Converted to: {image.convertedExtension}
                </p>
                <button
                  onClick={() =>
                    handleDownloadConverted(
                      image.convertedBlob,
                      image.convertedExtension,
                      image.originalImage.name
                    )
                  }
                  className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 mt-3"
                >
                  Download Converted
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageConverter;
