import { Component, OnInit } from '@angular/core';
import { BadgesComponent } from '../badges/badges.component';
import { SkillsComponent } from '../skills/skills.component';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { JobServiceService, Job } from '../../services/job-service.service';

@Component({
  selector: 'app-cards-vagas',
  standalone: true,
  imports: [BadgesComponent, SkillsComponent, PesquisaComponent],
  templateUrl: './cards-vagas.component.html',
  styleUrls: ['./cards-vagas.component.css']
})
export class CardsVagasComponent {

   
}
