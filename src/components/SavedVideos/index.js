import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {CgPlayListAdd} from 'react-icons/cg'
import {BsDot} from 'react-icons/bs'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import NxtWatchContext from '../../NxtWatchContext'

import {
  SavedVideosRoute,
  LeftNavbarAndSavedVideos,
  Navbar,
  SavedVideosContainer,
  SavedVideosHeader,
  SavedVideosLogo,
  SavedVideosText,
  AllSavedVideosContainer,
  VideoDetailsContainer,
  SavedVideoItem,
  ThumbnailImage,
  DetailsContainer,
  ProfileImage,
  VideoTitle,
  VideoName,
  VideoCountTime,
  VideoViewCount,
  VideoPublishedTime,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideosList, isDarkModeActive} = value

        return (
          <>
            <SavedVideosHeader isDarkMode={isDarkModeActive}>
              <SavedVideosLogo isDarkMode={isDarkModeActive}>
                <CgPlayListAdd size={38} color="#ff0000" />
              </SavedVideosLogo>
              <SavedVideosText isDarkMode={isDarkModeActive}>
                Saved videos
              </SavedVideosText>
            </SavedVideosHeader>
            <AllSavedVideosContainer isDarkMode={isDarkModeActive}>
              {savedVideosList.map(eachVideo => {
                const {
                  thumbnailUrl,
                  title,
                  viewCount,
                  channel,
                  publishedAt,
                  id,
                } = eachVideo

                const {name, profileImageUrl} = channel
                const publishedTimeToNow = formatDistanceToNow(
                  new Date(publishedAt),
                )

                return (
                  <Link to={`videos/${id}`} className="nav-link">
                    <SavedVideoItem key={id}>
                      <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
                      <VideoDetailsContainer>
                        <ProfileImage src={profileImageUrl} alt="profile" />
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
                              {publishedTimeToNow}
                            </VideoPublishedTime>
                          </VideoCountTime>
                        </DetailsContainer>
                      </VideoDetailsContainer>
                    </SavedVideoItem>
                  </Link>
                )
              })}
            </AllSavedVideosContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderNoSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeActive} = value

        return (
          <NoSavedVideosContainer>
            <NoSavedVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosHeading isDarkMode={isDarkModeActive}>
              No saved videos found
            </NoSavedVideosHeading>
            <NoSavedVideosText isDarkMode={isDarkModeActive}>
              You can save your videos while watching them
            </NoSavedVideosText>
          </NoSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeActive, savedVideosList} = value

        return (
          <SavedVideosRoute
            isDarkMode={isDarkModeActive}
            data-testid="savedVideos"
          >
            <Header />
            <LeftNavbarAndSavedVideos>
              <Navbar>
                <LeftNavbar />
              </Navbar>
              <SavedVideosContainer isDarkMode={isDarkModeActive}>
                {savedVideosList.length > 0
                  ? renderSavedVideos()
                  : renderNoSavedVideos()}
              </SavedVideosContainer>
            </LeftNavbarAndSavedVideos>
          </SavedVideosRoute>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
