import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalRecordFormComponent } from './components/medical-record-form/medical-record-form.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { PatientEditFormComponent } from './components/patient-edit-form/patient-edit-form.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientsComponent } from './components/patients/patients.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: '',
    component: UserSignupComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/patient/create',
    component: PatientFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/patient/edit/:id',
    component: PatientEditFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/patient/:id/medicalrecord/',
    component: MedicalRecordsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/patient/:id/medicalrecord/:id',
    component: MedicalRecordFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
