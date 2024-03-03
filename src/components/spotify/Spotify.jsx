import React, { useEffect } from 'react';

const Spotify = ({ trackUri }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = 'BQCMbmIPxH_HSJWbMAiA9SQ23JwcAE_HOojCOg4yp6MX_CCy3rPUTLLZcehvn5fTCjr0iYUQlZHznFrSaOMMAh6phByCyn2MtoJ9KGijB6yqZ2pTHvVnyINEnhSyYymubuPTDTuA2_fNh2Y4dB1dAFQp5Jlk6FTpqmvT5JN2fHlAIeiqAVE7WrJNnqA-Y8pA-HafzRbwQVHl5XFXNo43u-C10bCiJ_SVfK9LAjmVUer5k_TKyWCvigEDJoy0I2yBKt5RWd8VGD_3lKmxtaGv8Fcm_FOAx5vn9QofprTLHtUh7wMOKTn5xiHpAiC8IvZgTxknpR9gAvOYqrDI4DTA';
     const player= new window.Spotify.Player({
       name: 'Spotify Player',
       getOAuthToken: cb => { cb(token); },
       volume: 0.5
     });
     player.addListener('player_state_changed', state => {
       console.log('Player state changed:', state);
     })
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);

        player._options.getOAuthToken((accessToken) => {
          fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [trackUri] }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
          }).then(response => {
            if (!response.ok) {
              throw new Error('Error playing track');
            }
          }).catch(error => {
            console.error('Error playing track:', error.message);
          });
        });
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('initialization_error', ({ message }) => {
        console.error('Initialization error:', message);
      });

      player.addListener('authentication_error', ({ message }) => {
        console.error('Authentication error:', message);
      });

      player.addListener('account_error', ({ message }) => {
        console.error('Account error:', message);
      });

      player.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });
    };
  }, [trackUri]);

  return <div id="spotify-player"></div>;
};

export default Spotify;
