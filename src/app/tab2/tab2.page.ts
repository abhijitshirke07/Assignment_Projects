import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule ,ExploreContainerComponent]
})
export class Tab2Page {

  constructor(private router: Router) {}

  goToABCDTest() {
    this.router.navigate(['/guess-animal']);
  }

  goToNumberTest() {
    this.router.navigate(['/guess-numbers']);
  }

}
