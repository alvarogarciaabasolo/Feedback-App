import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 100px;
`;
export const TitleLogin = styled.h1`
color: var(--color-VeryLightGrey);
margin-bottom: 20px;
`
export const Input = styled.input`
  width: 250px;
 margin-bottom: 15px;
 height: 30px;
 border: none;
 border-radius: 10px;
 background-color: var(--color-VeryLightGrey);
 padding-left: 20px;
`;
export const Form = styled.form`
 margin-left: 50px;
`
export const ContainerLogin = styled.div`

  width: 350px;
  height: 265px;
  background-color: var( --color-PrimaryPurple);
  border-radius: 20px;
`
export const ButtonLogin = styled.button`
  border-radius: 10px;
  padding: 6px;
  background-color: var(--color-SecondaryBlue);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-LightSkyBlue);
  }
`;
export const LoginText = styled.span`
  color: var(--color-LightGreyBlue);
  font-size: 12px;
  font-weight: 700;
`;
export const ContainerButtons = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`
export const RegisterButton = styled.h6`
 margin-bottom: 15px;
 color: var(--color-GrayLight);
 cursor: pointer;
 &:hover {
  color: var(--color-LightGreyBlue);
  }
`
export const ContainerData = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
`
export const ContainerButtonLogin = styled.div`
display: flex;
gap: 18px;
`
export const InformationRegister = styled.h3`
color:var(--color-PrimaryPurple);
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
`