import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PatientsComponent,
    MedicalRecordsComponent,
    UserLoginComponent,
    UserSignupComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
