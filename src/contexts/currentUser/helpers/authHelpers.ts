import { User, AuthError } from 'firebase/auth';
import { loginWithGoogle, loginWithEmailPassword, createAccount } from '../../../firebase/client';
import { ILoginEmail } from '../types/UserContext.types';

// Handles login errors
export const handleLoginError = (error: AuthError, setRegistrationErrorLogin: (value: string | null) => void) => {
  switch (error.code) {
    case 'auth/invalid-credential':
      setRegistrationErrorLogin('The email is not registered. Please sign up.');
      break;
    default:
      console.error('Error during email login:', error);
      setRegistrationErrorLogin('An error occurred while logging in.');
  }
};

// Handles registration errors
export const handleRegistrationError = (error: AuthError, setRegistrationError: (value: string | null) => void) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      setRegistrationError('The email is already in use.');
      break;
    default:
      console.error('Error during registration:', error);
      setRegistrationError('An error occurred while registering.');
  }
};

// Logs in with Google
export const loginWithGoogleHandler = async (setCurrentUser: (user: User | null) => void) => {
  try {
    const user = await loginWithGoogle();
    setCurrentUser(user);
  } catch (error) {
    console.error('Error during Google login:', error);
  }
};

// Logs in with email and password
export const loginWithEmailHandler = async (
  login: ILoginEmail,
  setCurrentUser: (user: User | null) => void,
  setRegistrationErrorLogin: (value: string | null) => void,
) => {
  try {
    const user = await loginWithEmailPassword(login.loginEmail, login.loginPassword);
    setCurrentUser(user);
    setRegistrationErrorLogin(null);
  } catch (error) {
    handleLoginError(error as AuthError, setRegistrationErrorLogin);
  }
};

// Registers a new user
export const registerUserHandler = async (
  registrationData: ILoginEmail,
  setCurrentUser: (user: User | null) => void,
  setRegistrationData: (data: ILoginEmail) => void,
  setRegistrationError: (value: string | null) => void,
) => {
  try {
    const user = await createAccount(registrationData.loginEmail, registrationData.loginPassword);
    setCurrentUser(user);
    setRegistrationData({ loginEmail: '', loginPassword: '' })
    setRegistrationError(null);
  } catch (error) {
    handleRegistrationError(error as AuthError, setRegistrationError);
  }
};
