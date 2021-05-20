import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

const routes: Routes = [
  { path: 'Login', component: LoginPageComponent },
  { path: 'NewAccount', component: AccountPageComponent },
  { path: "", component: HomePageComponent, children: [
     { path: "Home", component: HomePageComponent },
     { path: "Agenda", component: SchedulePageComponent },
     { path: "Categoria", component: CategoryPageComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
