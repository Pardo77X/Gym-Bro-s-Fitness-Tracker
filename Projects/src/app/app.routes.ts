import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';  

export const routes: Routes = [
  { path: '', component: StudentComponent },  
  { path: 'add-student', component: AddStudentComponent },  
];
