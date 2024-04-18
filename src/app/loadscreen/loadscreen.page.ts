import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadscreen',
  templateUrl: './loadscreen.page.html',
  styleUrls: ['./loadscreen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoadscreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.redirectAfterDelay();
  }

  redirectAfterDelay() {
    setTimeout(() => {
      this.router.navigate(['/tabs/tab1']);
    }, 5000); // Redirect to tab1 after 5 seconds (adjust the delay as needed)
  }

}
