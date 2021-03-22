import React, {useState, useMemo} from 'react'
import { createMuiTheme, ThemeProvider} from '@material-ui/core';
import {TopBar} from './components/header/Header'
import {Banner} from './components/banner/Banner'
import {CenteredTabs} from './components/tabs/Tabs'
import Image from "./images/music_image_black_and_white.jpg"
import {TopSongs} from './compositions/top-songs/TopSongs'
import {TopAlbuns} from './compositions/top-albuns/TopAlbuns'
import {FavoritesContext} from './providers/Favorites';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#302E2E"
    },
    secondary: {
      main: "#EB0CEF"
    },
    text: {
      primary: "#E5E5E5",
      secondary: "#EB0CEF"
    }
  }
});

function App() {
  const [favorites, setFavorites] = useState([])
  const providerValue = useMemo(()=> ({favorites, setFavorites}), [favorites, setFavorites])

  return (

      <ThemeProvider theme={theme}>
        <FavoritesContext.Provider value={providerValue}>
          <TopBar/>
          <Banner backgroundImage={Image}/>
          <CenteredTabs firstTab={<TopAlbuns/>} secondTab={<TopSongs/>}/>
        </FavoritesContext.Provider>
      </ThemeProvider>

  );
}

export default App;
