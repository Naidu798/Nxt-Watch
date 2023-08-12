import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GrFormClose} from 'react-icons/gr'
import {CgSearch} from 'react-icons/cg'
import {BsDot} from 'react-icons/bs'

import NxtWatchContext from '../../NxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import Failure from '../Failure'
import Loading from '../Loading'

import {
  HomeRoute,
  LeftNavbarAndHome,
  Navbar,
  HomeContainer,
  HomeBannerContainer,
  WebsiteLogoCross,
  CloseButton,
  WebsiteLogo,
  HomeBannerText,
  GetItNowBtn,
  HomeSearchContainer,
  HomeSearchInput,
  SearchButton,
  AllVideosContainer,
  VideoListContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  ProfileImage,
  DetailsContainer,
  VideoTitle,
  VideoName,
  VideoCountTime,
  VideoViewCount,
  VideoPublishedTime,
  NoVideosContainer,
  NoVideosImage,
  NoResultsHeading,
  NoResultText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    allVideosList: [],
    homeApiStatus: apiStatusConstants.initial,
    searchInput: '',
    searchValue: '',
  }

  componentDidMount = () => {
    this.getAllVideosList()
  }

  refreshPage = () => {
    this.getAllVideosList()
  }

  getAllVideosList = async () => {
    this.setState({homeApiStatus: apiStatusConstants.inProgress})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        isSaved: false,
      }))

      this.setState({
        allVideosList: updatedData,
        homeApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({homeApiStatus: apiStatusConstants.failure})
    }
  }

  renderHomeBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {toggleBanner} = value

        const onBannerClose = () => {
          toggleBanner()
        }

        return (
          <HomeBannerContainer data-testid="banner">
            <WebsiteLogoCross>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <CloseButton type="button" data-testid="close">
                <GrFormClose size={30} onClick={onBannerClose} />
              </CloseButton>
            </WebsiteLogoCross>
            <HomeBannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </HomeBannerText>
            <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
          </HomeBannerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onSearchFilter = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchBtn = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getAllVideosList)
  }

  renderSearchFilter = () => {
    const {searchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeActive} = value

          return (
            <HomeSearchContainer>
              <HomeSearchInput
                type="search"
                placeholder="Search"
                isDarkMode={isDarkModeActive}
                onChange={this.onSearchFilter}
                value={searchInput}
              />
              <SearchButton
                type="button"
                isDarkMode={isDarkModeActive}
                onClick={this.onSearchBtn}
                data-testid="searchButton"
              >
                <CgSearch
                  size={17}
                  color={isDarkModeActive ? ' #f4f4f4' : '#212121'}
                />
              </SearchButton>
            </HomeSearchContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderAllVideos = () => {
    const {allVideosList} = this.state

    return (
      <AllVideosContainer>
        {allVideosList.map(eachVideo => {
          const {
            channel,
            publishedAt,
            title,
            viewCount,
            thumbnailUrl,
            id,
          } = eachVideo
          const channelDetails = {
            name: channel.name,
            profileImageUrl: channel.profile_image_url,
          }
          const {name, profileImageUrl} = channelDetails

          return (
            <NxtWatchContext.Consumer>
              {value => {
                const {isDarkModeActive} = value

                return (
                  <Link
                    to={`/videos/${id}`}
                    className="nav-link home-video-item"
                  >
                    <VideoListContainer key={id}>
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
                    </VideoListContainer>
                  </Link>
                )
              }}
            </NxtWatchContext.Consumer>
          )
        })}
      </AllVideosContainer>
    )
  }

  onRetryBtn = () => {
    this.setState({searchInput: '', searchValue: ''}, this.getAllVideosList)
  }

  renderNoVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeActive} = value

        return (
          <NoVideosContainer isDarkMode={isDarkModeActive}>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsHeading isDarkMode={isDarkModeActive}>
              No search results found
            </NoResultsHeading>
            <NoResultText isDarkMode={isDarkModeActive}>
              Try different key words or remove search filter
            </NoResultText>
            <RetryButton type="button" onClick={this.onRetryBtn}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderResult = () => {
    const {homeApiStatus, allVideosList} = this.state

    switch (homeApiStatus) {
      case apiStatusConstants.success:
        if (allVideosList.length === 0) {
          return this.renderNoVideos()
        }
        return this.renderAllVideos()
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
          const {isDarkModeActive, isBannerShowed} = value

          return (
            <HomeRoute isDarkMode={isDarkModeActive} data-testid="home">
              <Header />
              <LeftNavbarAndHome>
                <Navbar>
                  <LeftNavbar />
                </Navbar>
                <HomeContainer isDarkMode={isDarkModeActive}>
                  {isBannerShowed ? this.renderHomeBanner() : ''}
                  {this.renderSearchFilter()}
                  {this.renderResult()}
                </HomeContainer>
              </LeftNavbarAndHome>
            </HomeRoute>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
