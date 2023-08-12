import styled from 'styled-components'

export const VideoDetailsRoute = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const LeftNavbarAndVideoDetails = styled.div`
  display: flex;
`

export const Navbar = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const VideoItemDetailsContainer = styled.div`
  font-family: Roboto;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 79vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow-y: scroll;

  @media screen and (max-width: 575px) {
    width: 100%;
    padding-top: 10px;
  }
`

export const VideoItemContainer = styled.div`
  margin-top: 5px;
  width: 73vw;

  @media screen and (max-width: 575px) {
    width: 95%;
  }
`

export const VideoPlayer = styled.div`
  display: flex;
  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const VideoPlayerMobile = styled.div`
  display: none;
  @media screen and (max-width: 575px) {
    display: flex;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#f4f4f4' : '#313131')};
  font-size: 18px;
  font-weight: ${props => (props.isDarkMode ? 500 : 600)};
  margin-bottom: 0px;

  @media screen and (max-width: 575px) {
    font-size: 16px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
`

export const VideoViewCountButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ViewsAndPublishedAtToNow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  @media screen and (max-width: 575px) {
    margin-left: 10px;
  }
`

export const VideoViewCount = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#606060')};
  font-weight: 500;
  font-size: 15px;
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`

export const VideoPublishedTime = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#606060')};
  font-weight: 500;
  font-size: 15px;
  margin-top: 39px;
  line-height: 25px;

  @media screen and (max-width: 575px) {
    margin-top: 10px;
    font-size: 13px;
    line-height: 20px;
  }
`

export const LikesAndSave = styled.div`
  display: flex;
  align-items: center;
`

export const customButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #606060;
  font-size: 16px;
  width: 95px;
  font-weight: 500;
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
export const BtnName = styled.p`
  margin-left: 8px;
`

export const LikeButton = styled(customButton)`
  color: ${props => {
    const {isLiked, isDarkMode} = props

    if (isLiked) {
      return '#2563eb'
    }
    return isDarkMode ? '#64748b' : '#606060'
  }};
  font-weight: ${props => (props.isLiked ? 700 : 500)};
`

export const DislikeButton = styled(customButton)`
  color: ${props => {
    const {isDisliked, isDarkMode} = props

    if (isDisliked) {
      return '#2563eb'
    }
    return isDarkMode ? '#64748b' : '#606060'
  }};
  font-weight: ${props => (props.isDisliked ? 700 : 500)};
`

export const SaveButton = styled(customButton)`
  color: ${props => {
    const {isSaved, isDarkMode} = props

    if (isSaved) {
      return '#2563eb'
    }
    return isDarkMode ? '#64748b' : '#606060'
  }};
  font-weight: ${props => (props.isSaved ? 700 : 500)};
`

export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ProfileImage = styled.img`
  width: 7%;
  margin-top: 15px;
  margin-right: 20px;

  @media screen and (max-width: 575px) {
    width: 17%;
    margin-right: 10px;
  }
`

export const DetailsContainer = styled.div`
  @media screen and (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const Name = styled.p`
  color: ${props => (props.isDarkMode ? '#ebebeb' : '#212121')};
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 575px) {
    margin-bottom: 10px;
  }
`

export const SubscriberCount = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#313131')};
  font-weight: 500;
  font-size: 15px;
  @media screen and (max-width: 575px) {
    font-size: 14px;
    margin-top: 0px;
  }
`

export const Description = styled.p`
  color: ${props => (props.isDarkMode ? '#ebebeb' : '#313131')};
  font-size: 17px;
  font-weight: 500;
  margin-top: 30px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const DescriptionMobile = styled(Description)`
  display: none;
  @media screen and (max-width: 575px) {
    display: flex;
    font-size: 14px;
    margin: 10px;
  }
`
