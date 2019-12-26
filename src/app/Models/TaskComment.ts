import {Task} from './Task';
import DateTimeFormat = Intl.DateTimeFormat;


export class TaskComment {
  id: number;
  body: string;
  task: Task;
  user: any;
  date: DateTimeFormat;
}
