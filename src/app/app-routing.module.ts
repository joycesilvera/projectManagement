import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, //whatever routes, we have mentioned here will get called in the app.module
  { path: 'about', component: AboutComponent }, //since app.module is importing this class 'app-routing.module'ng
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, //takes to default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
