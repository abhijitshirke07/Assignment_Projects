import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'loadscreen',
    loadComponent: () => import('./loadscreen/loadscreen.page').then( m => m.LoadscreenPage)
  },
  {
    path: 'registration-form',
    loadComponent: () => import('./registration-form/registration-form.page').then( m => m.RegistrationFormPage)
  },
];
