import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [printMode, setPrintMode] = useState(true);
  const togglePrintMode = () => {
    setPrintMode(!printMode);
  };
  return (
    <div id="mainContent" className={`${printMode && "dark"}`}>
      <div className="dark:text-dark-secondary dark:bg-dark-primary h-full bg-light-primary text-light-secondary">
        <Header printMode={printMode} />
        <Content togglePrintMode={togglePrintMode} printMode={printMode} />
      </div>
    </div>
  );
}

export default App;
