import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/currentUser/currentUser.context';

export const useRegister = () => {
  const {
    registrationData,
    setRegistrationData,
    userRegistration,
    registrationError,
    setRegistrationError,
  } = useContext(CurrentUserContext);

  // Handler to update email in the registration data
  const handleChangeEmail = (evt: { target: { value: string } }) => {
    const loginEmail = evt.target.value;
    setRegistrationData((prev) => ({ ...prev, loginEmail }));
  };

  // Handler to update password in the registration data
  const handleChangePassword = (evt: { target: { value: string } }) => {
    const loginPassword = evt.target.value;
    setRegistrationData((prev) => ({ ...prev, loginPassword }));
  };
  

  return {
    registrationData,
    registrationError,
    handleChangeEmail,
    handleChangePassword,
    userRegistration,
    setRegistrationError,
  };
};

export const useLogin = () => {
  const {
    login,
    setLogin,
    userLoginEmail,
    registrationErrorLogin,
    setRegistrationErrorLogin,
  } = useContext(CurrentUserContext);

  // Handler to update email in the login data
  const handleChangeEmail = (evt: { target: { value: string } }) => {
    const loginEmail = evt.target.value;
    setLogin((prev) => ({ ...prev, loginEmail }));
  };

  // Handler to update password in the login data
  const handleChangePassword = (evt: { target: { value: string } }) => {
    const loginPassword = evt.target.value;
    setLogin((prev) => ({ ...prev, loginPassword }));
  };

  return {
    login,
    registrationErrorLogin,
    handleChangeEmail,
    handleChangePassword,
    userLoginEmail,
    setRegistrationErrorLogin,
  };
};
