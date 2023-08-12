import styled from 'styled-components'

export const GamingRoute = styled.div`
  background-color: background-color: ${props =>
    props.isDarkMode ? '#0f0f0f' : '#f9f9f9'};
`

export const LeftNavbarAndGaming = styled.div`
  display: flex;
`

export const Navbar = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const GamingContainer = styled.div`
  font-family: Roboto;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 79vw;
  height: 90vh;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`
export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? ' #181818' : '#cccccc')};
  height: 15vh;
  padding-left: 6vw;

  @media screen and (max-width: 575px) {
    height: 12vh;
  }
`

export const GamingLogo = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#d7dfe9')};
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;

  @media screen and (max-width: 575px) {
    height: 60px;
    width: 60px;
  }
`

export const GamingText = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 35px;
  font-weight: 600;

  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`
export const GamingVideosContainer = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  overflow-y: scroll;
  height: 70vh;

  @media screen and (max-width: 575px) {
    height: 78vh;
  }
`

export const GameVideoItemContainer = styled.li`
  width: 25%;
  margin: 20px;

  @media screen and (max-width: 575px) {
    width: 38%;
    margin: 18px;
  }
`

export const GameThumbnail = styled.img`
  width: 100%;
  border-radius: 15px;
`

export const GameTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#212121')};
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (max-width: 575px) {
    font-size: 16px;
  }
`

export const GameViewCount = styled.p`
  color: ${props => (props.isDarkMode ? '#cbd5e1' : '#313131')};
  margin-top: 0px;
  font-weight: 500;

  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
