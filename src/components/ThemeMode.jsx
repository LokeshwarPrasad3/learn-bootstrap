import { useTheme } from "../context/ThemeProvider";

const ThemeMode = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <>
      <div className="thememode_container">
        {themeMode === "light" ? (
          <img
            onClick={() => toggleTheme()}
            className="icons"
            src="/public/dark_image.webp"
          />
        ) : (
          <img
            onClick={() => toggleTheme()}
            className="icons"
            src="/public/light_image.webp"
          />
        )}
      </div>
    </>
  );
};

export default ThemeMode;
