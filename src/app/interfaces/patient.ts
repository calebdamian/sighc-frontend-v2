import { MedicalRecord } from './medical-record';
import { User } from './user';

export interface Patient {
  id?: number;

  first_name: string;

  middle_name: string;

  last_name: string;

  id_card: string;

  patient_profile?: PatientProfile;

  user?: User;

  medical_record: MedicalRecord;
}

export interface PatientProfile {
  id?: number;

  dob: Date;

  contact_number: string;

  email: string;
}
