import { Component } from '@angular/core';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';

@Component({
  selector: 'app-header',
  imports: [PesquisaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
