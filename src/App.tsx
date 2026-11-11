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
            onClick={() => setIsDarkTheme((currentTheme) => !currentTheme)}
          >
            <img className="sun" src={sunIcon} alt="" aria-hidden="true" />
            <img className="moon" src={moonIcon} alt="" aria-hidden="true" />
          </button>
        </div>
      </header>

      <main className="main-content">
        <header className="main-header">
          {/* CSS magic spell */}
          <div className="blocker"></div>
          <div className="main-header__content">
            <div className="main-header__title">Carles Fores Soto</div>
            <div className="main-header__subtitle">Front-end Engineer</div>
            <div className="main-header__draw"></div>
          </div>
        </header>

        {/* CSS magic spell */}
        <div className="blocker"></div>

        <section className="section">
          <div className="section__content">
            <div className="section__title">Experiencia</div>
            <JobsList jobs={JOBS} />
          </div>
        </section>

        <section className="section">
          <div className="section__content">
            <div className="section__title">Habilidades</div>
            <SkillsGrid skills={SKILLS} />
          </div>
        </section>

        <section className="section">
          <div className="section__content">
            <div className="section__title">Contacto</div>
            <SkillsGrid skills={SKILLS} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
