import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() tools: string[] = [];
  @Output() filterRemoved = new EventEmitter<string[]>();
  clear: string = 'Clear';

  removeFilterItem(filter: string) {
    this.tools = this.tools.filter((item) => item !== filter);
    this.filterRemoved.emit(this.tools);
  }

  clearFilters() {
    this.tools = [];
    this.filterRemoved.emit(this.tools);
  }
}
