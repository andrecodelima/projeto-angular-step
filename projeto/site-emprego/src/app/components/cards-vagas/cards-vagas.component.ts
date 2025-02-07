import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobServiceService, Job } from '../../services/job-service.service';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { BadgesComponent } from "../badges/badges.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-cards-vagas',
  standalone: true,
  imports: [CommonModule, PesquisaComponent, SkillsComponent],
  templateUrl: './cards-vagas.component.html',
  styleUrls: ['./cards-vagas.component.css']
})
export class CardsVagasComponent implements OnInit {

  jobs: Job[] = []; // Lista original vinda do serviço
  filteredJobs: Job[] = []; // Lista filtrada

  constructor(private jobService: JobServiceService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe({
      next: (data) => {
        console.log("Dados carregados:", data); // Verifique se os dados aparecem no console
        this.jobs = data;
        this.filteredJobs = data;
      },
      error: (err) => {
        console.error("Erro ao carregar os dados:", err);
      }
    });
  }
  

  filterJobs(searchTerm: string) {
    if (!searchTerm) {
      this.filteredJobs = this.jobs; // Se o campo de busca estiver vazio, exibe todas as vagas
      return;
    }

    searchTerm = searchTerm.toLowerCase();

    this.filteredJobs = this.jobs.filter(job => 
      job.company.toLowerCase().includes(searchTerm) ||
      job.role.toLowerCase().includes(searchTerm) ||
      job.level.toLowerCase().includes(searchTerm) ||
      job.languages.some(lang => lang.toLowerCase().includes(searchTerm)) ||
      job.tools.some(tool => tool.toLowerCase().includes(searchTerm))
    );
  }
}
