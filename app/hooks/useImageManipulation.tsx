"use client";

import { useCallback, useState } from "react";

interface ImageManipulationHook {
  convertImageExtension: (
    imageData: string,
    newExtension: string
  ) => Promise<string>;
  // Add more functions here for other manipulations
}

export default function useImageManipulation(): ImageManipulationHook {
  const convertImageExtension = useCallback(
    async (imageData: string, newExtension: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
          }

          const newDataURL = canvas.toDataURL(`image/${newExtension}`);
          console.log(newDataURL);
          resolve(newDataURL);
        };
        img.onerror = function (error) {
          reject(error);
        };
        img.src = imageData;
      });
    },
    []
  );

  // Add more functions for other manipulations

  return {
    convertImageExtension,
    // Add more functions here
  };
}
