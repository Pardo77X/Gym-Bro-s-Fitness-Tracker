import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-tracker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step-tracker.component.html',
  styleUrls: ['./step-tracker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepTrackerComponent implements OnInit {
  stepCount: number = 0;
  message: string = '';
  stepEntries: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSteps();
  }

  saveSteps(): void {
    if (this.stepCount > 0) {
      this.http.post('http://localhost:8080/api/steps', { steps: this.stepCount }).subscribe({
        next: () => {
          this.message = 'Steps saved!';
          this.stepCount = 0;
          this.fetchSteps();
          setTimeout(() => this.message = '', 3000);
        },
        error: () => {
          this.message = 'Error saving steps.';
        }
      });
    } else {
      this.message = 'Please enter a valid number.';
    }
  }

  fetchSteps(): void {
    this.http.get<any[]>('http://localhost:8080/api/steps').subscribe({
      next: (data) => {
        this.stepEntries = data;
      },
      error: () => {
        this.message = 'Error fetching step history.';
      }
    });
  }
}
