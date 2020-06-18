import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaIniComponent } from './pagina-ini/pagina-ini.component';
import { PaginaSugComponent } from './pagina-sug/pagina-sug.component';
import { PaginaProfComponent } from './pagina-prof/pagina-prof.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { PaginaAluComponent } from './pagina-alu/pagina-alu.component';
import { AlunoCardComponent } from './aluno-card/aluno-card.component'

const appRoutes : Routes = [
  {path: '', component: PaginaIniComponent},
  {path: 'paginaProf', component: PaginaProfComponent},
  {path: 'paginaSug', component: PaginaSugComponent},
  {path: 'paginaAlu', component: PaginaAluComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PaginaIniComponent,
    PaginaSugComponent,
    PaginaProfComponent,
    NavbarComponent,
    FooterComponent,
    CursosComponent,
    FormCursoComponent,
    PaginaAluComponent,
    AlunoCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
