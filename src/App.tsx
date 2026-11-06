import { useState } from "react";
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
          <code>{`<CarlesFores />`}</code>
          <div className="app-header__switch-theme">
            <img
              src={isDarkTheme ? moonIcon : sunIcon}
              alt={isDarkTheme ? "Tema oscuro" : "Tema claro"}
              role="switch"
              onClick={() => setIsDarkTheme(!isDarkTheme)}
            />
          </div>
        </div>
      </header>

      <div className="hero">
        <div className="blocker"></div>
        <div className="hero__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
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
