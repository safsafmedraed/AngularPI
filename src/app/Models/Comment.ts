import {Student} from './Student';
import {VoteComment} from './VoteComment';

export class Comment {
  id_comment: number;
  constructor(public description: string ) {}
  s: Student;
  v: VoteComment[] ;
}
