import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./DarkModeToggle.module.scss";
const DarkModeToggle = () => {
  //read the value from localStorage
  const saved = localStorage.getItem("mode") === "dark";
  const theme = saved ? "dark" : "light";

  //if saved == true => add dark to <body class="dark"
  saved && document.body.classList.add("dark");

  //state for the icon
  const [isDark, setDark] = useState(saved);

  const toggleTheme = () => {
    //change the icon
    setDark((p) => {
      //change body class
      document.body.classList.toggle("dark");
      //save the change to local storage
      localStorage.setItem("mode", !p ? "dark" : "");
      return !p;
    });
  };

  return (
    <button
      className={`${styles["toggle-button"]} ${styles[theme]}`}
      onClick={toggleTheme}
    >
      {isDark ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeToggle;
