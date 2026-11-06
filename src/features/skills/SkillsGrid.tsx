import { type Skill as SkillType } from "../../interfaces";
import Skill from "./Skill.tsx";

import "./SkillsGrid.scss";

function SkillsGrid({ skills }: { skills: SkillType[] }) {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  );
}

export default SkillsGrid;
