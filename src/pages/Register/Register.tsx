import { useNavigate } from 'react-router-dom';
import { Goback } from '../../components';
import {
  ContainerRegister,
  Input,
  Container,
  TitleRegister,
  ButtonLogin,
  LoginText,
  ContainerButton,
  InformationRegister,
  Form
} from './style/Register.styled';
import {
  REGISTER,
  REGISTRATION,
  CANCEL,
  PASSWORD,
  EMAIL,
} from './constants/Register.constats';
import { useRegister } from '../../hooks/useAuth';

export const Register = () => {
  const navigate = useNavigate();
  const {
    registrationData,
    registrationError,
    handleChangeEmail,
    handleChangePassword,
    userRegistration,
    setRegistrationError,
  } = useRegister();

  const handleClickCancel = () => {
    navigate('/');
    setRegistrationError(null);
  };

  const handleRegistration = (event: React.FormEvent) => {
    event.preventDefault(); 
    userRegistration();
  };

  return (
    <Container>
      <Goback />
      <ContainerRegister>
        <TitleRegister>{REGISTRATION}</TitleRegister>
        <Form onSubmit={handleRegistration}>
          <Input
            type="text"
            placeholder={EMAIL}
            onChange={handleChangeEmail}
            value={registrationData?.loginEmail ?? ''}
            autoComplete="username"
           
          />
          <Input
            type="password"
            placeholder={PASSWORD}
            onChange={handleChangePassword}
            value={registrationData?.loginPassword ?? ''}
            autoComplete="new-password"
           
          />
          <ContainerButton>
            <ButtonLogin type="submit">
              <LoginText>{REGISTER}</LoginText>
            </ButtonLogin>
            <ButtonLogin type="button" onClick={handleClickCancel}>
              <LoginText>{CANCEL}</LoginText>
            </ButtonLogin>
          </ContainerButton>
        </Form>
        {!registrationData && (                                                           //Pending completion
          <InformationRegister>User registered</InformationRegister>
        )}
        {registrationError && (
          <InformationRegister>{registrationError}</InformationRegister>
        )}
      </ContainerRegister>
    </Container>
  );
};
