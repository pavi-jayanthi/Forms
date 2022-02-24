import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SentEmailComponent } from './sent-email/sent-email.component';
//import { ChartBoxComponent } from './Service/chart-box/chart-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './Service/auth.service';
import { AuthGuard } from './Guards/auth.guard';
import { NotificationService } from './Service/notification.service';
import { ChartBoxComponent } from './chart-box/chart-box.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EmailComponent,
    SentEmailComponent,
    ChartBoxComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [AuthService,AuthGuard,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
