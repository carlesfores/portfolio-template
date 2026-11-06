import { type Skill as SkillType } from "../../interfaces";

import "./Skill.scss";

function Skill({ name, icon, alt }: SkillType) {
  return (
    <div className="skill">
      <div className="skill__icon">
        <img src={icon} alt={alt || name} />
      </div>
      <div className="skill__name"><code>{name}</code></div>
    </div>
  );
}

export default Skill;
