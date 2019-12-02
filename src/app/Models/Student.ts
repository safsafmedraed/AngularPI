import {Offreentreprise} from './offreentreprise';

export class Student {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  password: string;
  isActive: boolean;
  isCredit: boolean;
  offre: Offreentreprise;
}
