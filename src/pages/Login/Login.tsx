import { useNavigate } from 'react-router-dom';
import {
  Container,
  ContainerLogin,
  ButtonLogin,
  LoginText,
  TitleLogin,
  Input,
  ContainerButtons,
  RegisterButton,
  ContainerData,
  ContainerButtonLogin,
  InformationRegister,
  Form,
} from './style/Login.styled';
import {
  LOGIN,
  LOGIN_WITH_GOOGLE,
  PASSWORD,
  EMAIL,
  REGISTER,
} from './constants/Login.constants';
import { useContext, useEffect, ChangeEvent } from 'react';
import { CurrentUserContext } from '../../contexts/currentUser/currentUser.context';

export const Login = () => {
  const navigate = useNavigate();
  const {
    currentUser,
    userLogin,
    login,
    setLogin,
    userLoginEmail,
    registrationErrorLogin,
    setRegistrationErrorLogin,
    setRegistrationError,
  } = useContext(CurrentUserContext);

  const handleLoginGoogle = () => {
    if (!currentUser) {
      userLogin();
    }
  };

  const handleLoginEmail = () => {
    if (login) {
      userLoginEmail();
    }
  };

  const handleClickRegister = () => {
    navigate('/register');
    setRegistrationErrorLogin('');
    setRegistrationError('');
  };

  const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>) => {
    const loginEmail = evt.target.value;

    setLogin((prevState) => ({
      ...prevState,
      loginEmail,
    }));
  };

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    const loginPassword = evt.target.value;

    setLogin((prevState) => ({
      ...prevState,
      loginPassword,
    }));
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/home');
    }
  }, [currentUser, navigate]);

  return (
    <Container>
      <ContainerLogin>
        <ContainerData>
          <TitleLogin>{LOGIN}</TitleLogin>
          <Form>
            <Input
              type="text"
              placeholder={EMAIL}
              onChange={handleChangeEmail}
              value={login ? login?.loginEmail : ''}
              autoComplete="username"
            />
            <Input
              type="password"
              placeholder={PASSWORD}
              onChange={handleChangePassword}
              value={login ? login?.loginPassword : ''}
              autoComplete="current-password"
            />
          </Form>
        </ContainerData>
        <ContainerButtons>
          <RegisterButton onClick={handleClickRegister}>
            {REGISTER}
          </RegisterButton>
          <ContainerButtonLogin>
            <ButtonLogin onClick={handleLoginEmail}>
              <LoginText>{LOGIN}</LoginText>
            </ButtonLogin>
            <ButtonLogin onClick={handleLoginGoogle}>
              <LoginText>{LOGIN_WITH_GOOGLE}</LoginText>
            </ButtonLogin>
          </ContainerButtonLogin>
        </ContainerButtons>
      </ContainerLogin>
      {registrationErrorLogin && (
        <InformationRegister>{registrationErrorLogin}</InformationRegister>
      )}
    </Container>
  );
};
