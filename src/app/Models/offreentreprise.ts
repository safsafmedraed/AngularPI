import {Entreprise} from './entreprise';
import {Category} from './Category';
import {Useroffre} from './useroffre';
import {Student} from './Student';

export class Offreentreprise {
  id: number;
  annonce: string;
  datedebut: Date;
  datefin: Date;
  detailstage: string;
  embauche: boolean;
  localisation: string;
  mission: string;
  profilrech: string;
  type: TypeO;
  ville: string;
  entreprise: Entreprise;
  category: Category[];
  Useroffre: Useroffre;
  student: Student;
}

export enum TypeO {
  internship,
  event,
  training
}
