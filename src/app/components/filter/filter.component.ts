import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  clear: string = 'Clear';

  tools: string[] = ['Fronten','JavaScript','Senior'];

  clearFilters() {
    console.log('Clear filters');
  }
}
