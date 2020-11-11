import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';

const spotify = new SpotifyWebApi();


function App() {
  const [token,setToken] = useState(null);
  //use effect runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('🧑 ',user);
      })
    }
    console.log('I have a token :point ',token);
  }, []);

  return (
    <div className="app">
      {
        token ? 
          <Player/>
         : 
          <Login/>
        
      }
      <Login/>
    </div>
  );
}

export default App;
