import {Project} from './Project';

export class Task {
  id: number;
  title: string;
  description: string;
  approved: boolean;
  deadline: Date;
  date: Date;
  status: string;
  project: Project;
}
