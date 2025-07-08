import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component'; // <-- Import ContactComponent
import { AboutComponent } from './components/about/about.component';
import { authGuard } from './services/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    component: ContactComponent, // <-- Add contact route
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
