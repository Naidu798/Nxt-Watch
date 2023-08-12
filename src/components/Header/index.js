import {FaMoon} from 'react-icons/fa'
import {HiOutlineSun, HiOutlineMenu} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderItems,
  ListItem,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  MobileLogout,
  MenuIcon,
  PopupContainer,
  PopupText,
  PopupButtons,
  TriggerButton,
  CancelButton,
  ConfirmButton,
  StyledPopup,
  MobileMenuPopup,
  MobileNavItem,
  MobileMenuPaths,
  MobilePathItem,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkModeActive, toggleThemeMode, pathNamesList} = value

      const onThemeModeIcon = () => {
        toggleThemeMode()
      }

      const onConfirmButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const renderPopup = () => (
        <StyledPopup
          isDarkMode={isDarkModeActive}
          modal
          trigger={
            <TriggerButton>
              <LogoutButton type="button" isDarkMode={isDarkModeActive}>
                Logout
              </LogoutButton>
              <MobileLogout type="button" isDarkMode={isDarkModeActive}>
                <FiLogOut
                  size={24}
                  color={isDarkModeActive ? '#ffffff' : '#231f20'}
                />
              </MobileLogout>
            </TriggerButton>
          }
        >
          {close => (
            <PopupContainer isDarkMode={isDarkModeActive}>
              <PopupText>Are you sure, you want to logout?</PopupText>
              <PopupButtons>
                <CancelButton type="button" onClick={() => close()}>
                  Cancel
                </CancelButton>
                <ConfirmButton type="button" onClick={onConfirmButton}>
                  Confirm
                </ConfirmButton>
              </PopupButtons>
            </PopupContainer>
          )}
        </StyledPopup>
      )

      const renderMobileMenuPopup = () => (
        <MobileMenuPopup
          trigger={
            <MenuIcon>
              <HiOutlineMenu
                size={24}
                color={isDarkModeActive ? '#ffffff' : '#231f20'}
              />
            </MenuIcon>
          }
          isDarkMode={isDarkModeActive}
        >
          <MobileMenuPaths>
            {pathNamesList.map(eachPath => {
              const {displayText, id, IconName, pathUrl} = eachPath

              const {match} = props
              const {path} = match
              const isActivePath = path === pathUrl

              const changePathIconColor = () => {
                if (isDarkModeActive) {
                  return '#e2e8f0'
                }
                return '#606060'
              }

              return (
                <Link to={pathUrl} className="nav-link">
                  <MobilePathItem
                    key={id}
                    isDarkMode={isDarkModeActive}
                    isActive={isActivePath}
                  >
                    <IconName
                      size={isActivePath ? 18 : 15}
                      color={isActivePath ? '#ff0000' : changePathIconColor()}
                      isDarkMode={isDarkModeActive}
                    />
                    <MobileNavItem
                      isDarkMode={isDarkModeActive}
                      isActive={isActivePath}
                    >
                      {displayText}
                    </MobileNavItem>
                  </MobilePathItem>
                </Link>
              )
            })}
          </MobileMenuPaths>
        </MobileMenuPopup>
      )

      return (
        <HeaderContainer isDarkMode={isDarkModeActive}>
          <Link to="/" className="nav-link">
            <HeaderLogo
              src={
                isDarkModeActive
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <HeaderItems>
            <ListItem key={0}>
              <ThemeButton type="button" data-testid="theme">
                {isDarkModeActive ? (
                  <HiOutlineSun
                    size={30}
                    color="#ffffff"
                    onClick={onThemeModeIcon}
                    data-testid="theme"
                  />
                ) : (
                  <FaMoon size={24} onClick={onThemeModeIcon} />
                )}
              </ThemeButton>
            </ListItem>
            <ListItem key={1}>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                alt="profile"
              />
              {renderMobileMenuPopup()}
            </ListItem>
            <ListItem key={2}>{renderPopup()}</ListItem>
          </HeaderItems>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
