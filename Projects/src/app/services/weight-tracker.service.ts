import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WeightTracker {
  id?: number;
  weight: number;
  dateRecorded?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeightTrackerService {
  private apiUrl = 'http://localhost:8080/api/weights';

  constructor(private http: HttpClient) {}

  getAllWeights(): Observable<WeightTracker[]> {
    return this.http.get<WeightTracker[]>(this.apiUrl);
  }

  addWeight(entry: WeightTracker): Observable<WeightTracker> {
    return this.http.post<WeightTracker>(this.apiUrl, entry);
  }
}
