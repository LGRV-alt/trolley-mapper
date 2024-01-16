import Content from "./components/Content";

import Header from "./components/Header";

function App() {
  return (
    <div
      id="mainContent"
      className=" dark:text-dark-secondary dark:bg-dark-primary h-screen  bg-light-primary text-light-secondary"
    >
      <Header />
      <Content />
    </div>
  );
}

export default App;
