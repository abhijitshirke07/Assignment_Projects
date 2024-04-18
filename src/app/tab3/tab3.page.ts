import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ExploreContainerComponent],
})
export class Tab3Page  implements OnInit{
  tpoDetails = {
    profilePicture: 'https://i.pinimg.com/originals/55/f4/cf/55f4cfa25d955b2d838a00846a298369.jpg', 
    name: 'Monkey D Luffy',
    email: 'monkeydluffy@kingofpirates.com',
    contactNumber: '+1-555-1234',
    position: 'Research Department',
  };

  constructor() {}

  ngOnInit(): void {
  }
}
