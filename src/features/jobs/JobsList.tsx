import { type Job as JobType } from "../../interfaces";
import Job from "./Job.tsx";

import "./JobsList.scss";

function JobsList({ jobs }: { jobs: JobType[] }) {
  return (
    <div className="job">
      {jobs.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </div>
  );
}

export default JobsList;
