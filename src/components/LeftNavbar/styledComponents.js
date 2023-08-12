import styled from 'styled-components'

export const LeftNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 20vw;
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};
`

export const LeftNavbarPathItems = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
`

export const PathItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 30px;
  background-color: ${props => {
    if (props.isDarkMode) {
      return props.isActive ? '#383838' : ''
    }
    return props.isActive ? '#f9f9f9' : ''
  }};
`

export const PathName = styled.p`
  margin-left: 17px;
  color: ${props => {
    if (props.isActive === true) {
      return props.isDarkMode ? '#ffffff' : '#231f20'
    }
    return props.isDarkMode ? '#e2e8f0' : '#606060'
  }};
  font-size: 18px;
  font-weight: ${props => (props.isActive ? 700 : 600)};
  text-decoration: none;
`

export const LeftNavbarFooter = styled.div`
  margin-left: 25px;
`

export const ContactText = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#424242')};
  font-size: 18px;
  font-weight: 700;
  font-family: Roboto;
`

export const PatnerApps = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const AppIcon = styled.li`
  width: 4vw;
`

export const Icon = styled.img`
  margin-top: 10px;
  width: 75%;
`

export const Description = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#424242')};
  font-size: 17px;
  font-weight: 600;
  width: 15vw;
`
