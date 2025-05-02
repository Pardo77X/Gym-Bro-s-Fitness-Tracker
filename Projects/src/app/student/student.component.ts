import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';  

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  newStudent = { name: '', email: '' };
  message: string = '';  

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((data: any) => {
      this.students = data;
      console.log(this.students);
    }, (error) => {
      this.message = 'Error fetching students. Please try again.';
      this.clearMessage();
    });
  }

  addStudent(): void {
    if (this.newStudent.name && this.newStudent.email) {
      this.studentService.createStudent(this.newStudent).subscribe(() => {
        this.message = 'Student added successfully!';
        this.newStudent = { name: '', email: '' };
        this.loadStudents();
        this.clearMessage();
      }, (error) => {
        this.message = 'Error adding student. Please try again.';
        this.clearMessage();
      });
    } else {
      this.message = 'Please fill out both the name and email fields.';
      this.clearMessage();
    }
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.message = `Student with ID ${id} deleted successfully.`;
        this.loadStudents();
        this.clearMessage();
      }, (error) => {
        this.message = `Error deleting student with ID ${id}. Please try again.`;
        this.clearMessage();
      });
    }
  }

  clearMessage(): void {
    setTimeout(() => {
      this.message = '';  
    }, 3000);
  }
}
