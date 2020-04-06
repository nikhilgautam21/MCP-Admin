import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { DirectAccessGuardService } from './services/direct-access-guard.service';
import { ComplaintComponent } from './components/complaint/complaint.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: '/login',
    pathMatch: "full"
  },
  {
    path: 'login', 
    component: LoginComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate:[DirectAccessGuardService]
  },
  {
    path: "complaint",
    component: ComplaintComponent,
    canActivate:[DirectAccessGuardService]
  },
  {
    path: '**', 
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
