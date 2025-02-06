import { Component } from '@angular/core';
import { BadgesComponent } from '../badges/badges.component';
import { SkillsComponent } from '../skills/skills.component';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';

@Component({
  selector: 'app-cards-vagas',
  imports: [BadgesComponent,SkillsComponent,PesquisaComponent],
  templateUrl: './cards-vagas.component.html',
  styleUrl: './cards-vagas.component.css'
})
export class CardsVagasComponent {

}
