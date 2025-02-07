import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardsVagasComponent } from './components/cards-vagas/cards-vagas.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardsVagasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site-emprego';
}
