import NxtWatchContext from '../../NxtWatchContext'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

const Failure = props => {
  const {refreshPage} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeActive} = value

        const onRetryButton = () => {
          refreshPage()
        }

        return (
          <FailureContainer>
            <FailureImage
              src={
                isDarkModeActive
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading isDarkMode={isDarkModeActive}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText isDarkMode={isDarkModeActive}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryButton type="button" onClick={onRetryButton}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Failure
