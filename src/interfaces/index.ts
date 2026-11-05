export interface Job {
  title: string;
  company: string;
  dates: string;
  tasks: string[];
}

export interface Skill {
  name: string;
  icon: string;
  alt?: string;
  level?: number;
}