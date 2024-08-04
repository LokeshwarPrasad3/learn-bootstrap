import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";

const ImageBg = () => {
  const { themeMode, currentBgImage, setCurrentBgImage } = useTheme();
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    setCurrentBgImage(`/${themeMode}_bg_${randomNumber}.jpg`);
  }, [themeMode, setCurrentBgImage]);

  return <img className="bg-image-fixed" src={currentBgImage} />;
};

export default ImageBg;
