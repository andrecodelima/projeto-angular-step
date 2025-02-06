import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {

  @Input() text:string = '';
  @Input() type: 
  'Junior' | 'Midweight' | 'Senior' |
  'Frontend' | 'Backend' | 'Fullstack' |
  'HTML' | 'CSS' | 'JavaScript' | 'Python' | 'React' | 'Vue' | 'Sass' | 'Ruby' | 'Ruby' | 'Django' = 'Frontend';

}
