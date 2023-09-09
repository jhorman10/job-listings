import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { JobListService } from './services/job-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jobListData: Card[] = [];
  tools: string[] = ['Frontend', 'CSS', 'JavaScript'];
  filter: string[] = [];

  constructor(private jobListService: JobListService) {}

  ngOnInit(): void {
    this.tools
      ? this.jobListService
          .searchCardsByTools(this.tools)
          .subscribe((cards) => {
            this.jobListData = cards;
          })
      : this.jobListService.getJobListData().subscribe((data) => {
          this.jobListData = data;
        });
  }

  removeFilterItem(filter: string[]) {
    if (filter.length > 0) {
      this.jobListService.searchCardsByTools(filter).subscribe((cards) => {
        this.jobListData = cards;
      });
    } else {
      this.jobListService.getJobListData().subscribe((data) => {
        this.jobListData = data;
      });
    }
  }
}
