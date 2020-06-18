import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-ini',
  templateUrl: './pagina-ini.component.html',
  styleUrls: ['./pagina-ini.component.css']
})
export class PaginaIniComponent implements OnInit {

  cursos=[];

  esconderForm: boolean = true;

  constructor() { }


  mostrarForm(){
    this.esconderForm = !this.esconderForm;
    console.log(this.esconderForm);
  }

  onCursoAdd(curso){
    this.cursos.push(curso);
  }
  
  ngOnInit(): void {
  }

}
