import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent },
  {path:'dashboard', component:DashboardComponent},
  {path:'pago', component:PayComponent},
  {path:'**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
