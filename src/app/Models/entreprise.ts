import {Offreentreprise} from './offreentreprise';

export class Entreprise {
  id: number;
  adresse: string;
  autorise: number;
  description: string;
  identifiant: string;
  lienlinkedin: string;
  logoentreprise: string;
  mail: string;
  nomEntreprise: string;
  numtelentre: string;
  password: string;
  presentation: string;
  siteweb: string;
  offreentreprise: Offreentreprise[];
}
