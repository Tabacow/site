import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  indice:number = 0;

  turnActive(i:number){
    this.indice=i;
    console.log(this.indice);
  }

  ngOnInit(): void {
  }

}
