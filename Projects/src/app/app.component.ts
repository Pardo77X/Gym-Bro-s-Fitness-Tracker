import { Component } from '@angular/core';
import { WeightTrackerComponent } from './weight-tracker/weight-tracker.component';
import { WaterTrackerComponent } from './water-tracker/water-tracker.component';
import { StepTrackerComponent } from './step-tracker/step-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeightTrackerComponent, WaterTrackerComponent, StepTrackerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-app';
}
