import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:40px;
`
export const ContainerRegister = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 60px;
`
export const Input = styled.input`
  width: 250px;
 margin-bottom: 15px;
 height: 30px;
 border: none;
 border-radius: 10px;
 background-color: var(--color-SkyBlue);
 padding-left: 20px;
`
export const TitleRegister = styled.h2`
color: var(--color-SecondaryBlue);
margin-bottom: 20px;
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
export const ContainerButton = styled.div`
margin-top:20px;
display: flex;
gap: 20px;
justify-content: center
`
export const InformationRegister = styled.h3`
color:var(--color-PrimaryPurple);
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`