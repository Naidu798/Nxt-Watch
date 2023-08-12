import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkModeActive: false,
  toggleThemeMode: () => {},
  savedVideosList: [],
  saveVideo: () => {},
  isBannerShowed: true,
  toggleBanner: () => {},
  pathNamesList: [],
  refreshPage: () => {},
})

export default NxtWatchContext
