import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoBotao = "Esconder";
  esconder = false;
  alterarExibicao() {
  this.esconder = !this.esconder;
  }
  title = 'projetoAngular';
}
