import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { MedicalRecordFormComponent } from './components/medical-record-form/medical-record-form.component';
import { PatientEditFormComponent } from './components/patient-edit-form/patient-edit-form.component';
import { MedicalRecordEditFormComponent } from './components/medical-record-edit-form/medical-record-edit-form.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PatientsComponent,
    MedicalRecordsComponent,
    UserLoginComponent,
    UserSignupComponent,
    NavbarComponent,
    PatientFormComponent,
    MedicalRecordFormComponent,
    PatientEditFormComponent,
    MedicalRecordEditFormComponent,
    PatientDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule,
  ],
  providers: [
    JwtHelperService,
    AuthService,
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
