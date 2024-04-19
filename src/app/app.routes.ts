import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'ato-z',
    loadComponent: () => import('./ato-z/ato-z.page').then( m => m.AtoZPage)
  },
  {
    path: 'guess-animal',
    loadComponent: () => import('./guess-animal/guess-animal.page').then( m => m.GuessAnimalPage)
  },
  {
    path: 'numbers1-100',
    loadComponent: () => import('./numbers1-100/numbers1-100.page').then( m => m.Numbers1100Page)
  },
  {
    path: 'guess-numbers',
    loadComponent: () => import('./guess-numbers/guess-numbers.page').then( m => m.GuessNumbersPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'loadscreen',
    loadComponent: () => import('./loadscreen/loadscreen.page').then( m => m.LoadscreenPage)
  },
];
