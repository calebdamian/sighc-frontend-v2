import { MedicalRecord } from './medical-record';
import { User } from './user';

export interface Patient {
  id?: number;
  firstName: string;
  lastName: string;
  idCard: string;
  dob: Date;
  contactNumber: string;
  email: string;
}
