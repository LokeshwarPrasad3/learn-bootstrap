import { useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import { useTheme } from "./context/ThemeProvider";
import { Button } from "react-bootstrap";
import MySwiperComponent from "./components/Bookmarks";
import ImageBg from "./components/ImageBg";
import ThemeMode from "./components/ThemeMode";
import ChangeBgModal from "./components/Modal/ChangeBgModal";
import ChangeBgSection from "./components/ChangeBgSection";

function App() {
  const { themeMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", themeMode);
    if (themeMode === "dark") {
      document.body.classList.remove("dark_color");
      document.body.classList.add("light_color");
    } else {
      document.body.classList.add("dark_color");
      document.body.classList.remove("light_color");
    }
  }, [themeMode]);

  return (
    <>
      <ImageBg />
      <div className="bg-image-fixed"></div>
      <ThemeMode />
      <ChangeBgSection />
      <div className="container">
        <Button onClick={() => toggleTheme()}>{themeMode}</Button>
        <h3 className="head">Lokeshwar is good boy</h3>
        <Buttons />
        <div className="slider_container ">
          <MySwiperComponent />
        </div>
      </div>
    </>
  );
}

export default App;
