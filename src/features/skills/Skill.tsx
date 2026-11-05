import { type Skill as SkillType } from "../../data";

import "./Skill.scss";

function Skill({ name, icon, alt }: SkillType) {
  return (
    <div className="skill">
      <div className="skill__icon">
        <img src={icon} alt={alt || name} />
      </div>
      <div className="skill__name">{name}</div>
    </div>
  );
}

export default Skill;
