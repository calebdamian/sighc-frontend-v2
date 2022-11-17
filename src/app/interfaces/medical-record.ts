import { Patient } from './patient';
import { User } from './user';

export interface MedicalRecord {
  id?: number;

  entry: string;

  patient?: Patient;

  user?: User;
}
