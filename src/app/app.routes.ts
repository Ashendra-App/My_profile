import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  { path: 'contact-us', component: ContactUs },
  { path: 'about-us', component: AboutUs },
  { path: '**', component: PageNotFound },
];
