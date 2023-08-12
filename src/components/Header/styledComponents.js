import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99vw;
  padding-left: 30px;
  padding-right: 40px;
  height: 15vh;
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};

  @media screen and (max-width: 575px) {
    padding-right: 15px;
    padding-left: 15px;
    height: 10vh;
  }
`

export const HeaderLogo = styled.img`
  width: 50%;

  @media screen and (max-width: 575px) {
    width: 70%;
  }
`

export const HeaderItems = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  align-items: center;
`

export const ListItem = styled.li`
  margin-left: 38px;

  @media screen and (max-width: 575px) {
    margin-left: 14px;
  }
`

export const ProfileImage = styled.img`
  width: 35px;

  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const ThemeButton = styled.button`
  border-width: 0px;
  outline: none;
  background-color: transparent;
`

export const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 575px) {
    display: flex;
  }
`
export const MobileMenuPopup = styled(Popup)`
  &-content {
    background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};
    border-width: 0px;
  }
`

export const MobileMenuPaths = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
`

export const MobilePathItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: ${props => {
    if (props.isDarkMode) {
      return props.isActive ? '#383838' : ''
    }
    return props.isActive ? '#cbd5e1' : ''
  }};
  outline: none;
`

export const MobileNavItem = styled.p`
  margin-left: 10px;
  color: ${props => {
    if (props.isActive === true) {
      return props.isDarkMode ? '#ffffff' : '#231f20'
    }
    return props.isDarkMode ? '#e2e8f0' : '#606060'
  }};
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 700 : 600)};
  text-decoration: none;
`

export const LogoutButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.isDarkMode ? '#e2e8f0' : '#3b82f6')};
  border-radius: 5px;
  height: 32px;
  width: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  font-family: Roboto;
  background-color: transparent;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const MobileLogout = styled.button`
  background-color: transparent;
  border-width: 0px;
  outline: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#231f20')};
  display: none;

  @media screen and (max-width: 575px) {
    display: flex;
  }
`
export const StyledPopup = styled(Popup)`
  &-content {
    height: 27vh;
    width: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-width: 0px;
    background-color: ${props => (props.isDarkMode ? '#313131' : '#ffffff')};
    @media screen and (max-width: 575px) {
      width: 90vw;
    }
  }
`

export const TriggerButton = styled.div`
  border-width: 0px;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  outline: 0px;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupText = styled.p`
  color: #3b82f6;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 40px;
  margin-top: 0px;
  @media screen and (max-width: 575px) {
    font-size: 17px;
  }
`

export const PopupButtons = styled.div``

export const CustomButton = styled.button`
  height: 37px;
  width: 100px;
  font-size: 17px;
  border-radius: 5px;

  @media screen and (max-width: 575px) {
    height: 33px;
    width: 95px;
    font-size: 15px;
  }
`

export const CancelButton = styled(CustomButton)`
  color: #64748b;
  border: 1px solid #64748b;
  background-color: transparent;
  margin-right: 20px;
`

export const ConfirmButton = styled(CustomButton)`
  margin-left: 20px;
  background-color: #3b82f6;
  border-width: 0px;
  color: #ffffff;
`
