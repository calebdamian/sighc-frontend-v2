import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalRecordEditFormComponent } from './components/medical-record-edit-form/medical-record-edit-form.component';
import { MedicalRecordFormComponent } from './components/medical-record-form/medical-record-form.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
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
    component: UserLoginComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/create',
    component: PatientFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/edit/:id',
    component: PatientEditFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients/details/:id',
    component: PatientDetailsComponent,
    canActivate: [AuthGuard],
  },
  /*{
    path: 'patients/details/update/:id',
    component: MedicalRecordEditFormComponent,
    canActivate: [AuthGuard],
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
