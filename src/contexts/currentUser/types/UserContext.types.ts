import { User } from 'firebase/auth';
import { ReactNode } from 'react';
export interface ILoginEmail {
  loginEmail: string;
  loginPassword: string;
}


export interface ICurrentUserContext {
  currentUser: User | null;
  userLogin: () => Promise<void>;
  login: ILoginEmail;
  setLogin: (value: React.SetStateAction<ILoginEmail>) => void;
  userLoginEmail: () => Promise<void>;
  registrationData: ILoginEmail;
  setRegistrationData: (value: React.SetStateAction<ILoginEmail>) => void;
  userRegistration: () => Promise<void>;
  registrationError: string | null;
  registrationErrorLogin: string | null;
  setRegistrationError: (value: string | null) => void;
  setRegistrationErrorLogin: (value: string | null) => void;
}

export interface CurrentUserProviderProps {
  children: ReactNode;
}
