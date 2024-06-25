import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Create a new account with email and password
export const createAccount = async (
  loginEmail: string,
  loginPassword: string
): Promise<User> => {
  const auth = getAuth(app);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    return userCredential.user;
  } catch (error) {
    console.error('Error creating a new account:', error);
    throw error;
  }
};

// Log in with email and password
export const loginWithEmailPassword = async (
  loginEmail: string,
  loginPassword: string
): Promise<User> => {
  const auth = getAuth(app);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    return userCredential.user;
  } catch (error) {
    console.error('Error during email login:', error);
    throw error;
  }
};

// Log in with Google
export const loginWithGoogle = async (): Promise<User> => {
  const auth = getAuth(app);
  try {
    await setPersistence(auth, browserSessionPersistence);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Error during Google login:', error);
    throw error;
  }
};
