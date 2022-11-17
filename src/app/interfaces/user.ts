export interface User {
  id?: number;
  username: string;
  password: string;
  userProfile: UserProfile;
}
export interface UserProfile {
  id?: number;
  full_name: string;
  email: string;
}
