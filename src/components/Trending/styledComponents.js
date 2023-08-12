import styled from 'styled-components'

export const TrendingRoute = styled.div`
    background-color: background-color: ${props =>
      props.isDarkMode ? '#0f0f0f' : '#f9f9f9'};
`

export const LeftNavbarAndTrending = styled.div`
  display: flex;
`

export const Navbar = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const TrendingContainer = styled.div`
  font-family: Roboto;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 79vw;
  height: 90vh;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? ' #181818' : '#cccccc')};
  height: 15vh;
  padding-left: 6vw;

  @media screen and (max-width: 575px) {
    height: 12vh;
  }
`

export const TrendingLogo = styled.div`
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

export const TrendingText = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 35px;
  font-weight: 600;

  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`
export const TrendingVideosContainer = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  width: 79vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 65vh;

  @media screen and (max-width: 575px) {
    width: 100%;
    height: 72vh;
  }
`
export const VideoDetailsContainer = styled.div`
  @media screen and (max-width: 575px) {
    display: flex;
  }
`

export const ProfileImage = styled.img`
  display: none;

  @media screen and (max-width: 575px) {
    display: flex;
    width: 45px;
    height: 45px;
    margin-top: 10px;
    margin-right: 10px;
  }
`

export const TrendingVideoItem = styled.li`
  display: flex;
  width: 68vw;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    width: 90vw;
    margin-bottom: 30px;
  }
`

export const ThumbnailImage = styled.img`
  width: 55%;
  margin-bottom: 40px;
  margin-right: 28px;

  @media screen and (max-width: 575px) {
    width: 100%;
    margin-bottom: 0px;
  }
`

export const DetailsContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#424242')};
  font-weight: 600;
  font-size: 19px;

  @media screen and (max-width: 575px) {
    font-size: 17px;
    margin-bottom: 7px;
  }
`

export const VideoName = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#606060')};
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 0px;

  @media screen and (max-width: 575px) {
    font-size: 16px;
    margin-top: 0px;
    font-weight: bold;
    margin-bottom: 0px;
  }
`

export const VideoCountTime = styled.div`
  display: flex;
  align-items: center;
`

export const VideoViewCount = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#606060')};
  font-weight: 500;
  font-size: 15px;
`

export const VideoPublishedTime = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#606060')};
  font-weight: 500;
  font-size: 15px;
`
