import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
   }

  ngOnInit() {
  }

  onLogin() {
    const expectedUsername = 'admin';
        const expectedPassword = 'pass@123';

        if (this.username === expectedUsername && this.password === expectedPassword) {
            console.log('Login successful');
            console.log('Logging in with', this.username, this.password);
            this.router.navigate(['/loadscreen']);
        } else {
            alert('Login failed. Please check your username and password.');
        }
    
  }

}
