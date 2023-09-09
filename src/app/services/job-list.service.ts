import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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

  searchCardsByTools(toolsToSearch: string[]): Observable<Card[]> {
    if (toolsToSearch.length > 0) {
      return this.getJobListData().pipe(
        map((cards) => {
          const filteredCards = cards.filter((card) =>
            toolsToSearch.some(
              (tool) =>
                card.tools.includes(tool) ||
                card.languages.includes(tool) ||
                card.role.includes(tool)
            )
          );
          return filteredCards.length > 0 ? filteredCards : [];
        }),
        catchError(() => of([]))
      );
    } else {
      return of([]);
    }
  }
}
