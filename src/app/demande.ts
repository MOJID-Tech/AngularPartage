import { Salarie } from './salarie';
import { Etatdemande } from './Etatdemande';
export class Demande {
   id : number ;
   montant_net : string;
   montant_brut : number;
   prime_DG : number;
   prime_finale : number;
   prime_max : number ;
   prime_manager : number ;
   date_validation : Date;
   date_debut : Date;
   date_fin : Date ;
   salarie :  Salarie;
   etatDemande : Etatdemande [];
}






