import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div id="mainContent" className={`${darkMode && "dark"}`}>
      <div className="dark:text-dark-secondary dark:bg-dark-primary h-full bg-light-primary text-light-secondary">
        <Header darkMode={darkMode} />
        <Content toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
