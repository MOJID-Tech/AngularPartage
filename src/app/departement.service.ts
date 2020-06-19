import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators' ;
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

   constructor(private http: HttpClient ) {}

     getDepartementList(): Observable<any> {
         return this.http.get('http://localhost:8050/departements/ListDepar');
     }


/*
     getBenefice(id : number) : Observable<any>{

        const params = new HttpParams()
        .set('id', "1");

      const headers = new HttpHeaders()
        .set('Authorization', 'Basic xpto')
        .set('Content-Type', 'application/x-www-form-urlencoded');

      const httpOptions = {
        headers,
        params

      };
         //return this.http.get('http://localhost:8050/departements/Benefice');
    return this.http.get<Response>('http://localhost:8050/departements/Benefice',  new FormData(), httpOptions );
    }


    */

   private baseUrl = 'http://localhost:8050/departements/Benefi';
   getBene(id : number): Observable<any> {

          return this.http.get(`${this.baseUrl}/${id}`);
   }

   private baseUrlEquipe = 'http://localhost:8050/departements/equipes';
   getEquipeList(id : number) : Observable<any> {
     return this.http.get(`${this.baseUrlEquipe}/${id}`);
   }

}
