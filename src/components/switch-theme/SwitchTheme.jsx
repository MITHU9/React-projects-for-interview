import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const SwitchTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log(theme);

  return (
    <div className="light-dark" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default SwitchTheme;
