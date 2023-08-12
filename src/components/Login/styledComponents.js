import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Roboto;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
`

export const LoginDetailsSection = styled.div`
  box-shadow: ${props => (props.isDarkMode ? '' : '0px 0px 10px 10px #bfbfbf')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 67vh;
  width: 40vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};

  @media screen and (max-width: 575px) {
    width: 94vw;
    height: 73vh;
  }
`

export const WebsiteLogo = styled.img`
  width: 40%;
  margin-bottom: 5vh;
  @media screen and (max-width: 575px) {
    width: 50%;
  }
`

export const FormContainer = styled.form`
  width: 30vw;
  @media screen and (max-width: 575px) {
    width: 85vw;
  }
`

export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#64748b')};
  font-size: 15px;
  font-weight: 800;
`

export const Input = styled.input`
  height: 40px;
  border: 1px solid #64748b;
  border-radius: 7px;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#f1f5f9' : ' #231f20')};
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#ffffff')};
`

export const CheckboxLabel = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
`
export const Checkbox = styled.input`
  height: 17px;
  width: 17px;
  margin-right: 7px;
`
export const LabelText = styled.label`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#231f20')};
`

export const LoginButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  width: 30vw;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px;
  outline: none;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;

  @media screen and (max-width: 575px) {
    width: 85vw;
  }
`
export const ErrorMsg = styled.p`
  color: ${props => (props.isDarkMode ? '#ff0b37' : '#ff0000')};
  font-size: 14px;
  font-weight: 500;
`
