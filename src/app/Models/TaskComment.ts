import {Task} from './Task';

export class TaskComment {
  id: number;
  body: string;
  task: Task;
  user: any;
  date: Date;
}
