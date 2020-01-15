import {Student} from './Student';

export class Post {
  constructor(
               public categorie: string,
               public name_post: string,
               public description_post: string,
                public image_post: string) {}
  public id_post: number;
  users: Student;
   etat: string;
}
