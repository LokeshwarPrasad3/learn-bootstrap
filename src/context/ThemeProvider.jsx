import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const [currentBgImage, setCurrentBgImage] = useState("/light_bg_1.jpg");

  const toggleTheme = () => {
    console.log("clicked", themeMode);
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider
      value={{ themeMode, toggleTheme, currentBgImage, setCurrentBgImage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
