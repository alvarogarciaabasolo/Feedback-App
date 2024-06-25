import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '../../firebase/client';
import {
  ILoginEmail,
  ICurrentUserContext,
  CurrentUserProviderProps
} from './types/UserContext.types';
import {
  loginWithGoogleHandler,
  loginWithEmailHandler,
  registerUserHandler,
} from './helpers/authHelpers';

// Initial state for login
const initialLoginState: ILoginEmail = {
  loginEmail: '',
  loginPassword: '',
};

// Initial state for registration
const initialRegistrationData: ILoginEmail = {
  loginEmail: '',
  loginPassword: '',
};

// Create user context
export const CurrentUserContext = createContext<ICurrentUserContext>({
  currentUser: null,
  userLogin: async () => {},
  login: initialLoginState,
  setLogin: () => {},
  userLoginEmail: async () => {},
  registrationData: initialRegistrationData,
  setRegistrationData: () => {},
  userRegistration: async () => {},
  registrationError: null,
  registrationErrorLogin: null,
  setRegistrationError: () => {},
  setRegistrationErrorLogin: () => {},
});

// User context provider
export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [login, setLogin] = useState<ILoginEmail>(initialLoginState);
  const [registrationData, setRegistrationData] = useState<ILoginEmail>(initialRegistrationData);
  const [registrationError, setRegistrationError] = useState<string | null>(null);
  const [registrationErrorLogin, setRegistrationErrorLogin] = useState<string | null>(null);

  const auth = getAuth(app);

  // Function to login with Google
  const userLogin = async () => {
    await loginWithGoogleHandler(setCurrentUser);
  };

  // Function to login with email and password
  const userLoginEmail = async () => {
    await loginWithEmailHandler(login, setCurrentUser, setRegistrationErrorLogin);
  };

  // Function to register a new user
  const userRegistration = async () => {
    await registerUserHandler(registrationData, setCurrentUser, setRegistrationData, setRegistrationError);
  };
  

  // Effect to observe authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        userLogin,
        login,
        setLogin,
        userLoginEmail,
        registrationData,
        setRegistrationData,
        userRegistration,
        registrationError,
        registrationErrorLogin,
        setRegistrationError,
        setRegistrationErrorLogin,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
