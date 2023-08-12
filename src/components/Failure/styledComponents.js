import styled from 'styled-components'

export const FailureContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 35%;

  @media screen and (max-width: 575px) {
    width: 70%;
  }
`

export const FailureHeading = styled.h1`
  text-align: center;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 33px;
  font-weight: bold;

  @media screen and (max-width: 575px) {
    font-size: 24px;
    width: 90vw;
  }
`

export const FailureText = styled.p`
  text-align: center;
  color: ${props => (props.isDarkMode ? '#cccccc' : '#475569')};
  font-size: 18px;
  font-weight: 500;
  margin-top: 0px;

  @media screen and (max-width: 575px) {
    font-size: 16px;
    width: 90vw;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  height: 38px;
  width: 100px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border-width: 0px;
  outline: none;
  border-radius: 7px;
  margin-top: 20px;
`
