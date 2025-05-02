import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weight-tracker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weight-tracker.component.html',
  styleUrls: ['./weight-tracker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeightTrackerComponent implements OnInit {
  weight: number = 0;
  message: string = '';
  weights: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWeights();
  }

  saveWeight(): void {
    if (this.weight > 0) {
      this.http.post('http://localhost:8080/api/weights', { weight: this.weight })
        .subscribe({
          next: () => {
            this.message = 'Weight saved successfully!';
            this.weight = 0;
            this.fetchWeights();
            setTimeout(() => this.message = '', 3000);
          },
          error: () => {
            this.message = 'Error saving weight. Try again.';
          }
        });
    } else {
      this.message = 'Please enter a valid weight.';
    }
  }

  fetchWeights(): void {
    this.http.get<any[]>('http://localhost:8080/api/weights')
      .subscribe({
        next: (data) => {
          this.weights = data;
        },
        error: () => {
          this.message = 'Error fetching weights.';
        }
      });
  }
}
