import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() cursoAdd:EventEmitter<any> = new EventEmitter();

  criarCurso(nome:string,descricao:string,nota:string){
    if(nome!='' && descricao!='' && nota!=''){
      const curso = {nome:nome, desc:descricao, footer:nota};
      console.log(curso);

      this.cursoAdd.emit(curso);
    }
  }
}
