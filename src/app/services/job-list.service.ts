import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
@Injectable({
  providedIn: 'root',
})
export class JobListService {
  constructor(private http: HttpClient) {}

  getJobListData(): Observable<Card[]> {
    return this.http.get<Card[]>('../../assets/data/data.json');
  }

  getCategoryListData(): Observable<Card[]> {
    return this.http.get<Card[]>('../../assets/data/categories.json');
  }
}
