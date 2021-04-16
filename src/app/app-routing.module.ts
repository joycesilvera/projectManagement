import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" }, //if path empty then redirect to login
  { path: 'login', component: LoginComponent }, //whatever routes, we have mentioned here will get called in the app.module
  { path: 'dashboard', component: DashboardComponent }, //whatever routes, we have mentioned here will get called in the app.module
  { path: 'about', component: AboutComponent }, //since app.module is importing this class 'app-routing.module'ng
  { path: 'projects', component: ProjectsComponent }, //when we go api/projects, the ProjectsComponent is replaced with it's content in the <router-outlet> of app.component.html
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, //takes to default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
