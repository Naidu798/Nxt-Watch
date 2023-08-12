import {Link, withRouter} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext'

import {
  LeftNavbarContainer,
  LeftNavbarPathItems,
  PathItem,
  PathName,
  LeftNavbarFooter,
  ContactText,
  PatnerApps,
  AppIcon,
  Icon,
  Description,
} from './styledComponents'

const LeftNavbar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkModeActive, pathNamesList} = value
      const {match} = props
      const {path} = match

      return (
        <LeftNavbarContainer isDarkMode={isDarkModeActive}>
          <LeftNavbarPathItems>
            {pathNamesList.map(eachPath => {
              const {id, displayText, IconName, pathUrl} = eachPath
              const isActivePath = pathUrl === path

              const changePathIconColor = () => {
                if (isDarkModeActive) {
                  return '#e2e8f0'
                }
                return '#606060'
              }

              return (
                <Link to={pathUrl} className="nav-link">
                  <PathItem
                    key={id}
                    isActive={isActivePath}
                    isDarkMode={isDarkModeActive}
                  >
                    <IconName
                      size={isActivePath ? 30 : 25}
                      color={isActivePath ? '#ff0000' : changePathIconColor()}
                    />
                    <PathName
                      isDarkMode={isDarkModeActive}
                      isActive={isActivePath}
                    >
                      {displayText}
                    </PathName>
                  </PathItem>
                </Link>
              )
            })}
          </LeftNavbarPathItems>
          <LeftNavbarFooter>
            <ContactText isDarkMode={isDarkModeActive}>CONTACT US</ContactText>
            <PatnerApps>
              <AppIcon>
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </AppIcon>
              <AppIcon>
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
              </AppIcon>
              <AppIcon>
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />
              </AppIcon>
              <Description isDarkMode={isDarkModeActive}>
                Enjoy! Now to see your channels and recommendations!
              </Description>
            </PatnerApps>
          </LeftNavbarFooter>
        </LeftNavbarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(LeftNavbar)
