import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
  {path: '',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  {path: 'home',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  {path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)},
  {path:'hanhala',loadChildren: () => import('./components/rav/rav.module').then(m => m.RavModule)},
  {path: 'shiurim', loadChildren: () => import('./components/shiurim/shiurim.module').then(m => m.ShiurimModule) },
  {path:'all-shiurim', loadChildren: () => import('./components/all-shiurim/all-shiurim.module').then(m => m.AllShiurimModule) },
  {path: 'newsletter', loadChildren: () => import('./components/newsletter/newsletter.module').then(m => m.NewsletterModule) },
  {path: 'donate', loadChildren: () => import('./components/donate/donate.module').then(m => m.DonateModule) },
  {path:'alumni', loadChildren: () => import('./components/alumni/alumni.module').then(m => m.AlumniModule) },
  {path:'apply', loadChildren: () => import('./components/apply/apply.module').then(m => m.ApplyModule) },
  {path:'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

