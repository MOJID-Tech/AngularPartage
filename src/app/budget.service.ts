import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

     headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
     constructor(private http: HttpClient ) {}


      createBudgetDepartement(id: string,montant: string ) {
        const params = new HttpParams()
          .set('montant',montant)
          .set('IDDepartement',id);

        const headers = new HttpHeaders()
          .set('Authorization', 'Basic xpto')
          .set('Content-Type', 'application/x-www-form-urlencoded');

        const httpOptions = {
          headers,
          params

        };

         return this.http.post<Response>('http://localhost:8050/budget',  new FormData(), httpOptions );
      }



       createBudgetEquipe(id: string,montantH: string ,montantM : string) {
              const params = new HttpParams()
                .set('montantH', montantH)
                .set('montantM',montantM)
                .set('IDEquipe', id );

              const headers = new HttpHeaders()
                .set('Authorization', 'Basic xpto')
                .set('Content-Type', 'application/x-www-form-urlencoded');

              const httpOptions = {
                headers,
                params

              };
              
          return this.http.post<Response>('http://localhost:8050/budgetequipe',  new FormData(), httpOptions );
       }

       private baseUrlM = 'http://localhost:8050/budgetequipe/BeneficeManager';
       getBeneficeManager(id : number): Observable<any> {
         return this.http.get(`${this.baseUrlM}/${id}`);
       }

       private baseUrlH = 'http://localhost:8050/budgetequipe/BeneficeHorsManager';
       getBeneficeHorsManager(id : number): Observable<any> {
         return this.http.get(`${this.baseUrlH}/${id}`);
       }

       private baseUrlBD = 'http://localhost:8050/budget/BudgetDepartement';

       getBudgetDepartement(id :  number ) : Observable<any> {
         return this.http.get(`${this.baseUrlBD}/${id}`);
       }

        private baseUrlBE = 'http://localhost:8050/budgetequipe/BudgetEquipe';

        getBudgetEquipe(id :  number ) : Observable<any> {
         return this.http.get(`${this.baseUrlBE}/${id}`);
       }

}
