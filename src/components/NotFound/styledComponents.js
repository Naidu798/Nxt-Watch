import styled from 'styled-components'

export const NotFoundRoute = styled.div`
    background-color: background-color: ${props =>
      props.isDarkMode ? '#0f0f0f' : '#f9f9f9'};
`

export const Navbar = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const NavbarAndNotFound = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 80vw;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f8fafc')};
  font-family: Roboto;

  @media screen and (max-width: 575px) {
    width: 100vw;
  }
`

export const NotFoundImage = styled.img`
  width: 43%;

  @media screen and (max-width: 575px) {
    width: 90%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-size: 39px;
  font-weight: 700;
  margin-top: 50px;

  @media screen and (max-width: 575px) {
    font-size: 30px;
  }
`

export const NotFoundDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#cccccc' : '#64748b')};
  font-size: 19px;
  font-weight: ${props => (props.isDarkMode ? '500' : '600')};
  margin-top: 0px;

  @media screen and (max-width: 575px) {
    font-size: 15px;
    text-align: center;
    width: 95vw;
  }
`
