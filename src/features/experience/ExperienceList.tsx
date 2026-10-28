import type { Job } from "./data/types.ts";

interface Props {
  list: Job[];
}

import "./ExperienceList.scss";

function ExperienceList({list}: Props) {
  return (
    <>
      <ul className="experience-list">
        {list.map((listItem) => (
          <li key={listItem.slug}>{listItem.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ExperienceList;
