import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DemandeService {

   private baseUrl = 'http://localhost:8050/demande/DG';
   headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
   constructor(private http: HttpClient ) {}

   createDemande(demande: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, demande);
   }

  // tslint:disable-next-line:ban-types
    createDemandee(montant: string , login: string) {

      const params = new HttpParams()
        .set('MN', montant)
        .set('login', login );

      const headers = new HttpHeaders()
        .set('Authorization', 'Basic xpto')
        .set('Content-Type', 'application/x-www-form-urlencoded');

      const httpOptions = {
        headers,
        params

      };
     
       return this.http.post<Response>('http://localhost:8050/demande',  new FormData(), httpOptions );
    }

    getDemandeList(): Observable<any> {
       return this.http.get('http://localhost:8050/demande/alldemandes');
     }


       getDemandeListdg(): Observable<any> {
            return this.http.get('http://localhost:8050/demande/DG');
      }



  

   private baseUrlEtat = 'http://localhost:8050/demande/etatdemande';
   getEtatDemandeList(id : number) : Observable<any> {
     return this.http.get(`${this.baseUrlEtat}/${id}`);
   }

}



