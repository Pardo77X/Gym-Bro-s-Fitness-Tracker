import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-water-tracker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './water-tracker.component.html',
  styleUrls: ['./water-tracker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WaterTrackerComponent implements OnInit {
  water: number = 0;
  message: string = '';
  waterLogs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWaterLogs();
  }

  saveWater(): void {
    if (this.water > 0) {
      this.http.post('http://localhost:8080/api/water', { ounces: this.water }).subscribe({
        next: () => {
          this.message = 'Water intake saved!';
          this.water = 0;
          this.fetchWaterLogs();
          setTimeout(() => this.message = '', 3000);
        },
        error: () => {
          this.message = 'Error saving water intake.';
        }
      });
    } else {
      this.message = 'Please enter a valid amount.';
    }
  }

  fetchWaterLogs(): void {
    this.http.get<any[]>('http://localhost:8080/api/water').subscribe({
      next: (data) => {
        this.waterLogs = data;
      },
      error: () => {
        this.message = 'Error fetching water intake history.';
      }
    });
  }
}
