import { type Job as JobType} from "../../data/jobs";

import "./Job.scss";

function Job({ title, company, dates, tasks }: JobType) {
  return (
    <div className="job">
      <div className="job__title">
        {company} - {title}
      </div>
      <div className="job__dates">{dates}</div>
      <div className="job__description">
        {tasks.map((task: string, index: number) => (
          <p key={index}>{task}</p>
        ))}
      </div>
    </div>
  );
}

export default Job;
