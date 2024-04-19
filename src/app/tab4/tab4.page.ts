import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab4Page implements OnInit {

  profileImage = 'https://i.pinimg.com/564x/27/c2/eb/27c2eba8140ebe9fb49a70d46b0bf898.jpg'; // URL for the profile image
  userName = 'Abhijit Shirke';
  email = 'abhijit.shirke@gmai.com';
  achievements = 'Math Master, Alphabet gold'; // Example achievements
  abcdTestScore = 19; // Example ABCD test score
  numberTestScore = 20; // Example number test score

  constructor() {}

  ngOnInit(): void {
  }
  handleLogout(): void {
    // Perform logout logic here
    console.log('User logged out');
  }

}
