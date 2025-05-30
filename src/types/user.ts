export type Role = {
  name: string;
}

export type User = {
  id: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string | null;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string | null;
  lockoutEnabled: boolean;
  isActive: boolean;
  joinedDate: string;
  lastLogin: string;
  fullname: string;
  avatar: string;
  bio: string;
  birthday: string;
  facebookLink: string;
  bankName: string;
  bankAccount: string;
  role: Role;
}