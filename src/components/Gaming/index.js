import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'

import NxtWatchContext from '../../NxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import Failure from '../Failure'
import Loading from '../Loading'

import {
  GamingRoute,
  LeftNavbarAndGaming,
  Navbar,
  GamingContainer,
  GamingHeader,
  GamingLogo,
  GamingText,
  GamingVideosContainer,
  GameVideoItemContainer,
  GameThumbnail,
  GameTitle,
  GameViewCount,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    gamingApiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getGamingVideos()
  }

  refreshPage = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({gamingApiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachGame => ({
        id: eachGame.id,
        thumbnailUrl: eachGame.thumbnail_url,
        title: eachGame.title,
        viewCount: eachGame.view_count,
      }))

      this.setState({
        gamingVideosList: updatedData,
        gamingApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({gamingApiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingVideos = () => {
    const {gamingVideosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeActive} = value

          return (
            <>
              <GamingHeader isDarkMode={isDarkModeActive}>
                <GamingLogo isDarkMode={isDarkModeActive}>
                  <SiYoutubegaming size={38} color="#ff0000" />
                </GamingLogo>
                <GamingText isDarkMode={isDarkModeActive}>Gaming</GamingText>
              </GamingHeader>
              <GamingVideosContainer>
                {gamingVideosList.map(eachGame => {
                  const {thumbnailUrl, title, viewCount, id} = eachGame

                  return (
                    <GameVideoItemContainer key={id}>
                      <Link to={`/videos/${id}`} className="nav-link">
                        <GameThumbnail
                          src={thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <GameTitle isDarkMode={isDarkModeActive}>
                          {title}
                        </GameTitle>
                        <GameViewCount isDarkMode={isDarkModeActive}>
                          {viewCount} Watching Worldwide
                        </GameViewCount>
                      </Link>
                    </GameVideoItemContainer>
                  )
                })}
              </GamingVideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderResult = () => {
    const {gamingApiStatus} = this.state

    switch (gamingApiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
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
            <GamingRoute isDarkMode={isDarkModeActive} data-testid="gaming">
              <Header />
              <LeftNavbarAndGaming>
                <Navbar>
                  <LeftNavbar />
                </Navbar>
                <GamingContainer isDarkMode={isDarkModeActive}>
                  {this.renderResult()}
                </GamingContainer>
              </LeftNavbarAndGaming>
            </GamingRoute>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
