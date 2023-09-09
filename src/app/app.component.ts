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

  constructor(private jobListService: JobListService) {}

  ngOnInit(): void {
    this.jobListService.getJobListData().subscribe((data) => {
      this.jobListData = data;
    });
  }
}
