import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page {
  constructor() {
    this.sortCompanyDetailsByStartDate();
  }

  companyDetails = [
    {
      name: 'Company A',
      location: 'Bengaluru, Karnataka, India',
      salaryRange: '₹45,00,000 - ₹65,00,000',
      shortProfile: 'A leading company in the tech industry.',
      startDateToApply: 'March 15, 2024',
      endDateToApply: 'April 20, 2024',
      skillsNeeded: ['JavaScript', 'Angular', 'Ionic'],
      isExpanded: false,
  },
  {
      name: 'Tech Innovators',
      location: 'Hyderabad, Telangana, India',
      salaryRange: '₹50,00,000 - ₹70,00,000',
      shortProfile: 'A startup specializing in AI solutions.',
      startDateToApply: 'March 5, 2024',
      endDateToApply: 'April 30, 2024',
      skillsNeeded: ['Python', 'Machine Learning', 'Data Analysis'],
      isExpanded: false,
  },
  {
      name: 'Green Energy Corp.',
      location: 'Mumbai, Maharashtra, India',
      salaryRange: '₹35,00,000 - ₹50,00,000',
      shortProfile: 'Pioneers in sustainable energy solutions.',
      startDateToApply: 'March 10, 2024',
      endDateToApply: 'April 25, 2024',
      skillsNeeded: ['Chemical Engineering', 'Environmental Science', 'Renewable Energy'],
      isExpanded: false,
  },
  {
      name: 'AeroTech',
      location: 'Pune, Maharashtra, India',
      salaryRange: '₹55,00,000 - ₹75,00,000',
      shortProfile: 'Innovators in aerospace and aviation technology.',
      startDateToApply: 'March 8, 2024',
      endDateToApply: 'April 28, 2024',
      skillsNeeded: ['Aerospace Engineering', 'Mechanical Engineering', 'Project Management'],
      isExpanded: false,
  },
  {
      name: 'Health Dynamics',
      location: 'Chennai, Tamil Nadu, India',
      salaryRange: '₹48,00,000 - ₹70,00,000',
      shortProfile: 'Leaders in healthcare technology and services.',
      startDateToApply: 'March 12, 2024',
      endDateToApply: 'April 26, 2024',
      skillsNeeded: ['Data Science', 'Biotechnology', 'Healthcare Management'],
      isExpanded: false,
  },
  {
      name: 'Quantum Solutions',
      location: 'Bengaluru, Karnataka, India',
      salaryRange: '₹60,00,000 - ₹80,00,000',
      shortProfile: 'Experts in quantum computing and advanced algorithms.',
      startDateToApply: 'March 14, 2024',
      endDateToApply: 'April 22, 2024',
      skillsNeeded: ['Quantum Computing', 'Software Development', 'Research & Development'],
      isExpanded: false,
  },
  {
      name: 'FinTech Insights',
      location: 'Delhi, India',
      salaryRange: '₹50,00,000 - ₹65,00,000',
      shortProfile: 'Pioneers in financial technology and investment solutions.',
      startDateToApply: 'March 18, 2024',
      endDateToApply: 'April 27, 2024',
      skillsNeeded: ['Finance', 'Software Engineering', 'Data Analysis'],
      isExpanded: false,
  },
  {
      name: 'MediaWorks',
      location: 'Kolkata, West Bengal, India',
      salaryRange: '₹47,00,000 - ₹60,00,000',
      shortProfile: 'Leaders in digital media and content creation.',
      startDateToApply: 'March 11, 2024',
      endDateToApply: 'April 25, 2024',
      skillsNeeded: ['Graphic Design', 'Content Marketing', 'Social Media Management'],
      isExpanded: false,
  },
  {
      name: 'NexGen Robotics',
      location: 'Bengaluru, Karnataka, India',
      salaryRange: '₹70,00,000 - ₹90,00,000',
      shortProfile: 'Specialists in robotics and automation.',
      startDateToApply: 'March 13, 2024',
      endDateToApply: 'April 21, 2024',
      skillsNeeded: ['Robotics Engineering', 'Electrical Engineering', 'AI & Machine Learning'],
      isExpanded: false,
  },
  {
      name: 'SkyNet Aerospace',
      location: 'Hyderabad, Telangana, India',
      salaryRange: '₹80,00,000 - ₹1,00,00,000',
      shortProfile: 'Leaders in advanced aerospace technology and engineering.',
      startDateToApply: 'March 9, 2024',
      endDateToApply: 'April 23, 2024',
      skillsNeeded: ['Aerospace Engineering', 'Software Development', 'Project Management'],
      isExpanded: false,
  },
  {
      name: 'BioPharma Innovators',
      location: 'Mumbai, Maharashtra, India',
      salaryRange: '₹45,00,000 - ₹65,00,000',
      shortProfile: 'Innovators in pharmaceutical research and development.',
      startDateToApply: 'March 19, 2024',
      endDateToApply: 'April 29, 2024',
      skillsNeeded: ['Biochemistry', 'Pharmaceutical Science', 'Clinical Research'],
      isExpanded: false,
  },
  {
      name: 'AgriTech Solutions',
      location: 'Bhopal, Madhya Pradesh, India',
      salaryRange: '₹40,00,000 - ₹55,00,000',
      shortProfile: 'Pioneers in agricultural technology and research.',
      startDateToApply: 'March 17, 2024',
      endDateToApply: 'April 27, 2024',
      skillsNeeded: ['Agricultural Science', 'Biotechnology', 'Software Development'],
      isExpanded: false,
  },
    {
      name: 'SmartHome Technologies',
      location: 'Chennai, Tamil Nadu, India',
      salaryRange: '₹45,00,000 - ₹60,00,000',
      shortProfile: 'Specialists in smart home and IoT solutions.',
      startDateToApply: 'March 16, 2024',
      endDateToApply: 'April 22, 2024',
      skillsNeeded: ['IoT Development', 'Electrical Engineering', 'Software Engineering'],
      isExpanded: false,
    },
    {
      name: 'Urban Planners Co.',
      location: 'Delhi, India',
      salaryRange: '₹55,00,000 - ₹75,00,000',
      shortProfile: 'Leaders in urban planning and design.',
      startDateToApply: 'March 18, 2024',
      endDateToApply: 'April 27, 2024',
      skillsNeeded: ['Urban Planning', 'Civil Engineering', 'Project Management'],
      isExpanded: false,
  },
  {
      name: 'Innovative Architects',
      location: 'Mumbai, Maharashtra, India',
      salaryRange: '₹60,00,000 - ₹85,00,000',
      shortProfile: 'Pioneers in innovative architectural designs.',
      startDateToApply: 'March 8, 2024',
      endDateToApply: 'April 28, 2024',
      skillsNeeded: ['Architecture', 'Design', 'Project Management'],
      isExpanded: false,
  }

  ];

  searchTerm: string = '';

  get filteredCompanyDetails() {
    return this.companyDetails.filter(company =>
      company.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  toggleExpand(company: any): void {
    company.isExpanded = !company.isExpanded;
  }

  sortCompanyDetailsByStartDate(): void {
    this.companyDetails.sort((a, b) => {
      const dateA = new Date(a.startDateToApply);
      const dateB = new Date(b.startDateToApply);
      return dateA.getTime() - dateB.getTime(); // Sorts in ascending order of date
    });
  }

  get filteredCompanies() {
    return this.companyDetails.filter(company =>
      company.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
