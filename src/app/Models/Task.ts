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
  constructor(title: string, description: string, deadline: Date , project: Project) {}


}
