import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import NxtWatchContext from '../../NxtWatchContext'
import Loading from '../Loading'
import Failure from '../Failure'

import {
  VideoDetailsRoute,
  LeftNavbarAndVideoDetails,
  Navbar,
  VideoItemDetailsContainer,
  VideoItemContainer,
  VideoPlayer,
  VideoPlayerMobile,
  VideoTitle,
  VideoViewCountButtons,
  ViewsAndPublishedAtToNow,
  VideoViewCount,
  VideoPublishedTime,
  LikesAndSave,
  LikeButton,
  DislikeButton,
  SaveButton,
  BtnName,
  VideoDetails,
  ProfileImage,
  DetailsContainer,
  Name,
  Description,
  DescriptionMobile,
  SubscriberCount,
} from './styledComponents'

const videoItemApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: {
      channel: {},
    },
    apiStatus: videoItemApiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount = () => {
    this.getVideoItemDetails()
  }

  refreshPage = () => {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: videoItemApiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      const videoId = Cookies.get(`video ${updatedData.id}`)
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: videoItemApiStatusConstants.success,
        isSaved: videoId === updatedData.id,
      })
    } else {
      this.setState({apiStatus: videoItemApiStatusConstants.failure})
    }
  }

  renderVideoItemDetails = () => {
    const {videoItemDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      videoUrl,
      viewCount,
      publishedAt,
      title,
      id,
      channel,
      description,
    } = videoItemDetails
    const {name, subscriberCount, profileImageUrl} = channel

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeActive, saveVideo} = value

          const onSaveButton = () => {
            this.setState(prevState => ({
              isSaved: !prevState.isSaved,
            }))
            saveVideo(videoItemDetails)

            const videoId = Cookies.get(`video ${id}`)
            if (videoId === undefined) {
              Cookies.set(`video ${id}`, id, {expires: 30})
            } else {
              Cookies.remove(`video ${id}`)
            }
          }

          const onLikeButton = () => {
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisliked: false,
            }))
          }

          const onDislikeButton = () => {
            this.setState(prevState => ({
              isDisliked: !prevState.isDisliked,
              isLiked: false,
            }))
          }

          return (
            <VideoItemContainer key={id}>
              <VideoPlayer>
                <ReactPlayer url={videoUrl} width="100%" height={450} />
              </VideoPlayer>
              <VideoPlayerMobile>
                <ReactPlayer url={videoUrl} width="100%" height={200} />
              </VideoPlayerMobile>
              <VideoTitle isDarkMode={isDarkModeActive}>{title}</VideoTitle>
              <VideoViewCountButtons>
                <ViewsAndPublishedAtToNow>
                  <VideoViewCount
                    isDarkMode={isDarkModeActive}
                  >{`${viewCount} views`}</VideoViewCount>
                  <BsDot
                    size={25}
                    color={isDarkModeActive ? '#ffffff' : '#606060'}
                  />
                  <VideoPublishedTime isDarkMode={isDarkModeActive}>
                    Published At
                    <br />
                    {publishedAt}
                  </VideoPublishedTime>
                </ViewsAndPublishedAtToNow>
                <LikesAndSave>
                  <LikeButton
                    type="button"
                    isDarkMode={isDarkModeActive}
                    onClick={onLikeButton}
                    isLiked={isLiked}
                  >
                    <BiLike size={20} />
                    <BtnName>Like</BtnName>
                  </LikeButton>
                  <DislikeButton
                    type="button"
                    isDarkMode={isDarkModeActive}
                    onClick={onDislikeButton}
                    isDisliked={isDisliked}
                  >
                    <BiDislike size={20} />
                    <BtnName>Dislike</BtnName>
                  </DislikeButton>
                  <SaveButton
                    type="button"
                    isDarkMode={isDarkModeActive}
                    onClick={onSaveButton}
                    isSaved={isSaved}
                  >
                    <CgPlayListAdd size={25} />
                    <BtnName>{isSaved ? 'Saved' : 'Save'}</BtnName>
                  </SaveButton>
                </LikesAndSave>
              </VideoViewCountButtons>
              <hr />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <DetailsContainer>
                  <Name isDarkMode={isDarkModeActive}>{name}</Name>
                  <SubscriberCount isDarkMode={isDarkModeActive}>
                    {subscriberCount} subscribers
                  </SubscriberCount>
                  <Description isDarkMode={isDarkModeActive}>
                    {description}
                  </Description>
                </DetailsContainer>
              </VideoDetails>
              <DescriptionMobile isDarkMode={isDarkModeActive}>
                {description}
              </DescriptionMobile>
            </VideoItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderResult = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case videoItemApiStatusConstants.success:
        return this.renderVideoItemDetails()
      case videoItemApiStatusConstants.failure:
        return <Failure refreshPage={this.refreshPage} />
      case videoItemApiStatusConstants.inProgress:
        return <Loading />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeActive} = value

          return (
            <VideoDetailsRoute
              isDarkMode={isDarkModeActive}
              data-testid="videoItemDetails"
            >
              <Header />
              <LeftNavbarAndVideoDetails>
                <Navbar>
                  <LeftNavbar />
                </Navbar>
                <VideoItemDetailsContainer isDarkMode={isDarkModeActive}>
                  {this.renderResult()}
                </VideoItemDetailsContainer>
              </LeftNavbarAndVideoDetails>
            </VideoDetailsRoute>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
