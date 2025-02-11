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

  @Output() searchEvent = new EventEmitter<string[]>();
  selectedFilters: string[] = [];

  
  onSearch(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    if (!this.selectedFilters.includes(inputValue) && inputValue.trim()) {
      this.selectedFilters.push(inputValue.trim());
      this.searchEvent.emit(this.selectedFilters);
    }
  }
  
  addFilter(tag: string) {
    if (!this.selectedFilters.includes(tag)) {
      this.selectedFilters.push(tag);
      this.searchEvent.emit(this.selectedFilters);
    }
  }

  removeFilter(tag: string) {
    this.selectedFilters = this.selectedFilters.filter(t => t !== tag);
    this.searchEvent.emit(this.selectedFilters);
  }

  clearFilters() {
    this.selectedFilters = [];
    this.searchEvent.emit(this.selectedFilters);
  }
}
