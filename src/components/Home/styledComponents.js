import styled from 'styled-components'

export const HomeRoute = styled.div`
    background-color: background-color: ${props =>
      props.isDarkMode ? '#0f0f0f' : '#f9f9f9'};
`

export const LeftNavbarAndHome = styled.div`
  display: flex;
`

export const Navbar = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const HomeContainer = styled.div`
  font-family: Roboto;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  padding: 20px;
  width: 79vw;
  overflow-y: scroll;
  height: 87vh;

  @media screen and (max-width: 575px) {
    width: 100vw;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    padding-bottom: 20px;
  }
`

export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  height: 40vh;
  width: 76vw;
  padding-right: 20px;
  padding-top: 25px;
  padding-left: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 575px) {
    width: 100%;
    height: 35vh;
    padding: 15px;
  }
`

export const WebsiteLogoCross = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  width: 160px;
  @media screen and (max-width: 575px) {
    width: 120px;
  }
`

export const HomeBannerText = styled.p`
  color: #212121;
  font-size: 19px;
  font-weight: 500;
  margin-top: 30px;
  @media screen and (max-width: 575px) {
    font-size: 18px;
  }
`
export const CloseButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  outline: none;
`

export const GetItNowBtn = styled.button`
  height: 40px;
  width: 150px;
  color: #231f20;
  background-color: transparent;
  border: 2px solid #231f20;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  margin-top: 29px;

  @media screen and (max-width: 575px) {
    margin-top: 20px;
  }
`

export const HomeSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const HomeSearchInput = styled.input`
  height: 37px;
  width: 28vw;
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#ffffff')};
  border: 2px solid ${props => (props.isDarkMode ? '#606060' : '#cbd5e1')};
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
  outline: none;

  @media screen and (max-width: 575px) {
    width: 80%;
  }
`

export const SearchButton = styled.button`
  border: 2px solid ${props => (props.isDarkMode ? '#606060' : '#cbd5e1')};
  width: 80px;
  height: 37px;
  outline: none;
  background-color: ${props => (props.isDarkMode ? '#313131' : '#e2e8f0')};
`
export const AllVideosContainer = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

export const VideoListContainer = styled.li`
  width: 90%;
  margin: 20px;

  @media screen and (max-width: 575px) {
    width: 95%;
    margin-top: 15px;
    margin-left: 7px;
    margin-right: 10px;
    margin-bottom: 25px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ProfileImage = styled.img`
  width: 15%;
  margin-top: 15px;
  margin-right: 10px;

  @media screen and (max-width: 575px) {
    width: 40px;
  }
`

export const DetailsContainer = styled.div`
  width: 17vw;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#424242')};
  font-weight: 500;
  font-size: 18px;

  @media screen and (max-width: 575px) {
    font-size: 16px;
  }
`

export const VideoName = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#606060')};
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 0px;
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
export const NoVideosContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 575px) {
    height: 80vh;
  }
`

export const NoVideosImage = styled.img`
  width: 35%;

  @media screen and (max-width: 575px) {
    width: 70%;
  }
`

export const NoResultsHeading = styled.h1`
  text-align: center;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 33px;
  font-weight: bold;

  @media screen and (max-width: 575px) {
    font-size: 24px;
    width: 90vw;
  }
`

export const NoResultText = styled.p`
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
