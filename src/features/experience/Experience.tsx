import Section from "@/layout/section/Section.tsx";
import ExperienceList from "@/features/experience/ExperienceList.tsx";
import { JOBS } from "./data/index.ts";

import "./Experience.scss";

function Experience() {
  return (
    <Section title="Experience">
      <div className="experience">
        <ExperienceList list={JOBS} />
      </div>
    </Section>
  );
}

export default Experience;
