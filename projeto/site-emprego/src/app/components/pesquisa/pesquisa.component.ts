import { Component, EventEmitter, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {

  @Output() searchEvent = new EventEmitter<string>();
  
  onSearch(event : Event){
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchEvent.emit(inputValue);
  }
  
}
