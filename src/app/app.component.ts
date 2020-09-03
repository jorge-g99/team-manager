import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teste = true;

  lista = [{nome: 'Nome1'}, {nome: 'Nome2'}, {nome: 'Nome3'}, {nome: 'Nome4'}];
}

