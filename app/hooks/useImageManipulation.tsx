"use client";

import { useState } from "react";
import Jimp from "jimp";

interface ImageManipulationHook {
  image: Buffer | null;
  // convertType: (inputImage: File, newType: string) => void;
  // resize: (inputImage: string, width: number, height: number) => void;
  // rotate: (inputImage: string, angle: number) => void;
}

function useImageManipulation(): ImageManipulationHook {
  const [image, setImage] = useState<Buffer | null>(null);

  // ! It takes relative path for image, That's why not working. Steps : Save Image Somewhere and then convert and at last download it.
  // const convertType = async (inputImage: File, newType: string) => {
  //   try {
  //     const arrayBuffer = await inputImage.arrayBuffer();
  //     const buffer = Buffer.from(arrayBuffer);
  //     const jimpImage = await Jimp.read(buffer);
  //     const convertedImage = await jimpImage.getBufferAsync(
  //       Jimp[newType.toUpperCase()]
  //     );
  //     setImage(convertedImage);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const resize = async (inputImage: string, width: number, height: number) => {
  //   try {
  //     Jimp.read(inputImage, async (err, jimpImage) => {
  //       if (err) {
  //         console.error("Error:", err);
  //         return;
  //       }
  //       jimpImage.resize(width, height);
  //       const resizedImage = await jimpImage.getBufferAsync(
  //         jimpImage.getMIME()
  //       );
  //       setImage(resizedImage);
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const rotate = async (inputImage: string, angle: number) => {
  //   try {
  //     Jimp.read(inputImage, async (err, jimpImage) => {
  //       if (err) {
  //         console.error("Error:", err);
  //         return;
  //       }
  //       jimpImage.rotate(angle);
  //       const rotatedImage = await jimpImage.getBufferAsync(
  //         jimpImage.getMIME()
  //       );
  //       setImage(rotatedImage);
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return {
    image,
    // convertType,
    // resize,
    // rotate,
  };
}

export default useImageManipulation;
