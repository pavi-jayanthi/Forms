import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartBoxComponent } from './chart-box/chart-box.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SentEmailComponent } from './sent-email/sent-email.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"inbox",component:ChartBoxComponent,canActivate:[AuthGuard]},
  {path:"sentMails",component:SentEmailComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
