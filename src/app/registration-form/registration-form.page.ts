import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegistrationFormPage implements OnInit {
  form = {
    name: '',
    email: '',
    contact: '',
    rollNo: '',
    hsc: {
      college: '',
      yearOfPassing: null,
      total: null,
      outOf: null,
    },
    ssc: {
      college: '',
      yearOfPassing: null,
      total: null,
      outOf: null,
    },
    semesterMarks: [
      { cgpa: null, percentage: null },
      { cgpa: null, percentage: null },
      { cgpa: null, percentage: null },
      { cgpa: null, percentage: null },
      { cgpa: null, percentage: null },
    ],
    resume: null,
    additionalCourses: '',
  };

  fileInvalid = false;
  fileTouched = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  semesters = [1, 2, 3, 4, 5];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.form.resume = file;

    // Validate the file
    this.fileInvalid = !file || file.type !== 'application/pdf';
    this.fileTouched = true;
  }

  onSubmit(form: NgForm) {
    if (form.valid && !this.fileInvalid) {
      console.log(this.form);
      this.router.navigate(['/loadscreen']);
    }
  }

  calculatePercentage(total: number | null, outOf: number | null): number {
    if (total === null || outOf === null || outOf === 0) {
      return 0;
    }
    return (total / outOf) * 100;
  }
}
