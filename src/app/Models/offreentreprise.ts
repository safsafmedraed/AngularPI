import {Entreprise} from './entreprise';
import {Category} from './Category';

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
  Entreprise: Entreprise[];
  category: Category;
}

export enum TypeO {
  internship,
  event,
  training
}