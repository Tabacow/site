import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-pagina-alu',
  templateUrl: './pagina-alu.component.html',
  styleUrls: ['./pagina-alu.component.css']
})
export class PaginaAluComponent implements OnInit {

  constructor() { }



  cursos=[
    'Engenharia da computacao',
    'Engenharia de Controle e Automacao',
    'Engenharia Eletronica',
    'Engenharia Mecanica'
  ]
  alunos:Aluno[] = [];

  ngOnInit(): void {
  }

  enviar(aluno:Aluno){
    this.alunos.push(aluno);
  }
}
