import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab3Page {
  myName = 'Abhijit Shirke';
  
  // Player data
  players = [
    {
      name: 'Abhijit Shirke',
      profileImage: 'https://i.pinimg.com/564x/27/c2/eb/27c2eba8140ebe9fb49a70d46b0bf898.jpg',
      score: 1200
    },
    {
      name: 'Rahul Verma',
      profileImage: 'https://i.pinimg.com/736x/5c/61/ac/5c61acfa1a9e244b3e02a4cae31bea04.jpg  ',
      score: 1100
    },
    {
      name: 'Aditi Sharma',
      profileImage: 'https://pbs.twimg.com/media/B-frkEeCAAA7msP.png',
      score: 1050
    },
    {
      name: 'Amit Singh',
      profileImage: 'https://pbs.twimg.com/media/DxfAzcxXQAI_vER.jpg',
      score: 1000
    },
    {
      name: 'Priya Patel',
      profileImage: 'https://i.pinimg.com/736x/e1/b2/fc/e1b2fc6c18d0f4682b6fe8b860f02054.jpg',
      score: 950
    },
    {
      name: 'Vijay Mehta',
      profileImage: 'https://i.pinimg.com/736x/e8/07/f7/e807f7b42ae4dd652e7975597ee0df6a.jpg',
      score: 900
    },
    {
      name: 'Riya Gupta',
      profileImage: 'https://i.pinimg.com/736x/4f/8f/63/4f8f6351faf06878ea684fa04b242625.jpg',
      score: 850
    },
    {
      name: 'Aman Kapoor',
      profileImage: 'https://static1.personality-database.com/profile_images/1074c255087246289e940fa98d813659.png',
      score: 800
    },
    {
      name: 'Neha Jain',
      profileImage: 'https://pm1.aminoapps.com/7788/1824fe9512cfd224dae9db7305f9946cf0ba958er1-496-356v2_hq.jpg',
      score: 750
    },
    {
      name: 'Suresh Desai',
      profileImage: 'https://i.pinimg.com/736x/f0/6b/e4/f06be4efbf701a9f0cd794c7d451fc5f.jpg',
      score: 700
    },
    
  ];

  constructor() {}
}
