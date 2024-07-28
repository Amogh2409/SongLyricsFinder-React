
import './App.css';
import Axios from 'axios';
import { useState } from 'react';


function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");


  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    })
  }
  return (
    <div className='App'>
      <h1>Lyrics Finder</h1>
      <input className="inp" placeholder='Artist name' onChange={(e) => { setArtist(e.target.value) }} type="text" />
      <input className="inp" placeholder='Song name' onChange={(e) => { setSong(e.target.value) }} type="text" />
      <button className='btn' onClick={() => searchLyrics()}>Search</button>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default App;
