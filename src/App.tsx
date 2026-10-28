import { useState } from "react";
import Header from "@/layout/header/Header.tsx";
import SideBar from "@/layout/side-bar/SideBar";
import Experience from "@/features/experience/Experience";
import "./App.scss";

function App() {
  const [showSideBar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Header toggleSideBar={toggleSideBar} />
      <SideBar show={showSideBar} />
      <main className="main">
        <h1 className="main__title">Main</h1>
        <Experience />
      </main>
    </>
  );
}

export default App;
