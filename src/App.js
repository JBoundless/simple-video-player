import React, { useState } from 'react';
import './style.css';
import ReactPlayer from 'react-player';

export default function App() {
  const [url, setUrl] = useState();
  const handleSubmit = () => {
    setUrl(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Video Player</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="url"
          name="url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </form>
      <ReactPlayer
        id="player"
        controls
        url={url}
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  );
}
