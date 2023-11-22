import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  numero:number; 
  numero2:number;

  constructor() { }

  ngOnInit() {
  }

  obterNumero(num:number){
    this.numero2 = num;
  }


}
