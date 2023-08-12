import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import NxtWatchContext from '../../NxtWatchContext'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import Failure from '../Failure'
import Loading from '../Loading'

import {
  TrendingRoute,
  LeftNavbarAndTrending,
  Navbar,
  TrendingContainer,
  TrendingHeader,
  TrendingLogo,
  TrendingText,
  TrendingVideosContainer,
  VideoDetailsContainer,
  TrendingVideoItem,
  ThumbnailImage,
  DetailsContainer,
  ProfileImage,
  VideoTitle,
  VideoName,
  VideoCountTime,
  VideoViewCount,
  VideoPublishedTime,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    trendingApiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getTrendingVideosList()
  }

  refreshPage = () => {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({trendingApiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideo => ({
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        trendingVideosList: updatedData,
        trendingApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({trendingApiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeActive} = value

          return (
            <>
              <TrendingHeader isDarkMode={isDarkModeActive}>
                <TrendingLogo isDarkMode={isDarkModeActive}>
                  <HiFire size={38} color="#ff0000" />
                </TrendingLogo>
                <TrendingText isDarkMode={isDarkModeActive}>
                  Trending
                </TrendingText>
              </TrendingHeader>
              <TrendingVideosContainer>
                {trendingVideosList.map(eachVideo => {
                  const {
                    thumbnailUrl,
                    title,
                    viewCount,
                    channel,
                    publishedAt,
                    id,
                  } = eachVideo

                  const channelDetails = {
                    name: channel.name,
                    profileImageUrl: channel.profile_image_url,
                  }
                  const {name, profileImageUrl} = channelDetails
                  const publishedTimeToNow = formatDistanceToNow(
                    new Date(publishedAt),
                  )
                  console.log(publishedTimeToNow)

                  return (
                    <Link to={`videos/${id}`} className="nav-link">
                      <TrendingVideoItem key={id}>
                        <ThumbnailImage
                          src={thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <VideoDetailsContainer>
                          <ProfileImage
                            src={profileImageUrl}
                            alt="channel logo"
                          />
                          <DetailsContainer>
                            <VideoTitle isDarkMode={isDarkModeActive}>
                              {title}
                            </VideoTitle>
                            <VideoName isDarkMode={isDarkModeActive}>
                              {name}
                            </VideoName>
                            <VideoCountTime>
                              <VideoViewCount
                                isDarkMode={isDarkModeActive}
                              >{`${viewCount} views`}</VideoViewCount>
                              <BsDot
                                size={25}
                                color={isDarkModeActive ? '#ffffff' : '#606060'}
                              />
                              <VideoPublishedTime isDarkMode={isDarkModeActive}>
                                {publishedAt}
                              </VideoPublishedTime>
                            </VideoCountTime>
                          </DetailsContainer>
                        </VideoDetailsContainer>
                      </TrendingVideoItem>
                    </Link>
                  )
                })}
              </TrendingVideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderResult = () => {
    const {trendingApiStatus} = this.state

    switch (trendingApiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.failure:
        return <Failure refreshPage={this.refreshPage} />
      case apiStatusConstants.inProgress:
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
            <TrendingRoute isDarkMode={isDarkModeActive} data-testid="trending">
              <Header />
              <LeftNavbarAndTrending>
                <Navbar>
                  <LeftNavbar />
                </Navbar>
                <TrendingContainer isDarkMode={isDarkModeActive}>
                  {this.renderResult()}
                </TrendingContainer>
              </LeftNavbarAndTrending>
            </TrendingRoute>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
