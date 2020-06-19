import { Component, OnInit , Pipe} from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../departement';
import { Budgetdepartement } from '../budgetdepartement';

import { DepartementService } from '../departement.service';
import { Observable } from 'rxjs';
import  { BudgetService } from '../budget.service';
@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})


export class ListDepartementComponent implements OnInit {

      arr : number[] = [];

      budgetdepartement : Budgetdepartement [] = [] ;
      departement : Departement;

  //  type Benefice = { id: number; benefice: number; year: number };
      mapBenefice : number[] = [];

    departements: Observable<Departement[]>;

     ngOnInit() { this.reloadData(); }
     constructor(private departementService: DepartementService,private budgetService: BudgetService,
     private router: Router) { }

      reloadData() {
          this.departements = this.departementService.getDepartementList();
      }

      get(id : number)
      {

            let benef :  number ;
            this.departementService.getBene(id).subscribe((value) => {
            benef=value;
            this.mapBenefice[id]=benef;
            
           });

         return this.mapBenefice[id];
      }


 
    getbudgetDepartement(id : number)
      {     
       
          this.budgetService.getBudgetDepartement(id).subscribe((value) => {
            //console.log(value);
             
            this.budgetdepartement[id]=value;
              if(this.budgetdepartement[id])
               this.arr[id]=this.budgetdepartement[id].montant;
             
           });

         return this.budgetdepartement[id];
      }

  getequipes(id: number){
    this.router.navigate(['equipes', id]);
  }


   save(idn :  number,montantn : number ) {

         let montant : string = String(montantn);
         let id  : string = String(idn);

         this.budgetService.createBudgetDepartement(id,montant)
         .subscribe(data => console.log(data)
         , error => console.log(error)  );
           
         
             
   }
}
