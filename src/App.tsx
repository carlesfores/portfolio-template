import { useState } from "react";
import Logo from "./components/Logo";
import JobsList from "./features/jobs/JobsList";
import SkillsGrid from "./features/skills/SkillsGrid";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

import "./App.scss";

import { JOBS, SKILLS } from "./data";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <header className="app-header">
        <div className="app-header__content">
          <Logo />
          <button
            className="app-header__switch-theme"
            type="button"
            role="switch"
            aria-checked={isDarkTheme}
            aria-label="Cambiar tema"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            <img
              className={isDarkTheme ? "" : "is-active"}
              src={sunIcon}
              alt=""
              aria-hidden="true"
            />
            <img
              className={isDarkTheme ? "is-active" : ""}
              src={moonIcon}
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      <div className="hero">
        <div className="blocker"></div>
        <div className="hero__content">
          <div className="hero__title">Carles Fores Soto</div>
          <div className="hero__subtitle">Front-end Engineer</div>
          <div className="hero__draw"></div>
        </div>
      </div>

      <main className="main-content">
        <div className="blocker"></div>

        <section className="section">
          <div className="section__title">Experiencia</div>
          <div className="section__content">
            <JobsList jobs={JOBS} />
          </div>
        </section>

        <section className="section">
          <div className="section__title">Habilidades</div>
          <div className="section__content">
            <SkillsGrid skills={SKILLS} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
