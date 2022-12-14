import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientEditFormComponent } from './components/patient-edit-form/patient-edit-form.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientsComponent } from './components/patients/patients.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
  },
  {
    path: 'register',
    component: UserSignupComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
