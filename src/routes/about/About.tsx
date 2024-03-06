import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const About = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  return <div onClick={()=>{toggleTheme()}}>{isDark ? "Dark" : "Light"}</div>;
};

export default About;
