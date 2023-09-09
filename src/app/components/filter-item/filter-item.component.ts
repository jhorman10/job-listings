import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
})
export class FilterItemComponent {
  @Input() filter!: string;
  @Output() filterRemoved = new EventEmitter<string>();

  removeItem() {
    this.filterRemoved.emit(this.filter);
  }
}
