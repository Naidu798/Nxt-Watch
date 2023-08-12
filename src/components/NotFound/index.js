import NxtWatchContext from '../../NxtWatchContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'

import {
  NotFoundRoute,
  NavbarAndNotFound,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  Navbar,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkModeActive} = value

      return (
        <NotFoundRoute isDarkMode={isDarkModeActive} data-testid="notFound">
          <Header />
          <NavbarAndNotFound>
            <Navbar>
              <LeftNavbar />
            </Navbar>
            <NotFoundContainer isDarkMode={isDarkModeActive}>
              <NotFoundImage
                src={
                  isDarkModeActive
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isDarkMode={isDarkModeActive}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription isDarkMode={isDarkModeActive}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </NavbarAndNotFound>
        </NotFoundRoute>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
