import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class Tab2Page {
  searchTerm: string = '';
  students = [
    {
        name: 'Aditi Patel',
        branch: 'Computer Science',
        ucid: '123456',
        resumeUrl: 'https://ionicframework.com/docs/components',
        isExpanded: false,
        companyAppliedFor: 'Tech Innovators',
    },
    {
        name: 'Rohan Sharma',
        branch: 'Mechanical Engineering',
        ucid: '789012',
        resumeUrl: 'https://reactjs.org/docs/getting-started.html',
        isExpanded: false,
        companyAppliedFor: 'Energy Solutions',
    },
    {
        name: 'Neha Singh',
        branch: 'Electrical Engineering',
        ucid: '654321',
        resumeUrl: 'https://angular.io/guide/quickstart',
        isExpanded: false,
        companyAppliedFor: 'Tech Innovators',
    },
    {
        name: 'Sanjay Kumar',
        branch: 'Civil Engineering',
        ucid: '345678',
        resumeUrl: 'https://www.typescriptlang.org/docs/',
        isExpanded: false,
        companyAppliedFor: 'Energy Solutions',
    },
    {
        name: 'Kavya Reddy',
        branch: 'Information Technology',
        ucid: '901234',
        resumeUrl: 'https://nextjs.org/learn',
        isExpanded: false,
        companyAppliedFor: 'Health Dynamics',
    },
    {
        name: 'Akash Desai',
        branch: 'Computer Science',
        ucid: '567890',
        resumeUrl: 'https://vuejs.org/v2/guide/',
        isExpanded: false,
        companyAppliedFor: 'Health Dynamics',
    },
    {
        name: 'Priya Mehta',
        branch: 'Aerospace Engineering',
        ucid: '432109',
        resumeUrl: 'https://www.python.org/doc/',
        isExpanded: false,
        companyAppliedFor: 'AeroTech',
    },
    {
        name: 'Varun Kapoor',
        branch: 'Chemical Engineering',
        ucid: '876543',
        resumeUrl: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
        isExpanded: false,
        companyAppliedFor: 'AeroTech',
    },
    {
        name: 'Divya Verma',
        branch: 'Environmental Engineering',
        ucid: '543210',
        resumeUrl: 'https://nodejs.org/en/docs/',
        isExpanded: false,
        companyAppliedFor: 'Green Energy Corp.',
    },
    {
        name: 'Amit Joshi',
        branch: 'Mechanical Engineering',
        ucid: '210987',
        resumeUrl: 'https://kubernetes.io/docs/',
        isExpanded: false,
        companyAppliedFor: 'Green Energy Corp.',
    },
];

  onFileChange(event: Event, student: any): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      // Create a URL for the uploaded resume
      student.resumeUrl = URL.createObjectURL(file);
    }
 
  }

  constructor() {}


  toggleExpand(student: any): void {
    student.isExpanded = !student.isExpanded;
  }

  get filteredStudents() {
    return this.students.filter(student =>
      student.companyAppliedFor.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
