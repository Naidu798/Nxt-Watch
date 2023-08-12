import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from './NxtWatchContext'

import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here

const pathNamesList = [
  {
    id: 'HOME',
    displayText: 'Home',
    IconName: AiFillHome,
    pathUrl: '/',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    IconName: HiFire,
    pathUrl: '/trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    IconName: SiYoutubegaming,
    pathUrl: '/gaming',
  },
  {
    id: 'SAVED_VIDEOS',
    displayText: 'Saved videos',
    IconName: CgPlayListAdd,
    pathUrl: '/saved-videos',
  },
]

class App extends Component {
  state = {
    isDarkModeActive: false,
    savedVideosList: [],
    isBannerShowed: true,
  }

  toggleThemeMode = () => {
    this.setState(prevState => ({
      isDarkModeActive: !prevState.isDarkModeActive,
    }))
  }

  toggleBanner = () => {
    this.setState({isBannerShowed: false})
  }

  saveVideo = videoItem => {
    const {savedVideosList} = this.state
    const savedItem = savedVideosList.filter(
      eachItem => eachItem.id === videoItem.id,
    )

    if (savedItem[0] === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItem],
      }))
    } else {
      const updatedList = savedVideosList.filter(
        eachItem => eachItem.id !== videoItem.id,
      )
      this.setState({savedVideosList: updatedList})
    }
  }

  refreshPage = () => <Redirect to="/" />

  render() {
    const {isDarkModeActive, savedVideosList, isBannerShowed} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkModeActive,
          toggleThemeMode: this.toggleThemeMode,
          savedVideosList,
          saveVideo: this.saveVideo,
          isBannerShowed,
          toggleBanner: this.toggleBanner,
          pathNamesList,
          refreshPage: this.refreshPage,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
