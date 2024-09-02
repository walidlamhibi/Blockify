const osascript = require('node-osascript');

const restartAndPlay = () => {
  // AppleScript to quit and relaunch Spotify
  const restartSpotifyScript = `
    tell application "Spotify"
      quit
      delay 1
      activate
      play
    end tell
  `;

  osascript.execute(restartSpotifyScript, (err) => {
    if (err) {
      console.error('Error restarting Spotify:', err);
    }
  });
};

const checkForAdAndRestart = () => {
  // AppleScript to get the currently playing track URI in Spotify
  const getCurrentTrackScript = `
    tell application "Spotify"
      if player state is playing then
        set trackURI to spotify url of current track
      else
        set trackURI to ""
      end if
    end tell
    return trackURI
  `;

  osascript.execute(getCurrentTrackScript, (err, result) => {
    if (err) {
      console.error('Error:', err);
      return;
    }

    const trackURI = result;
    if (trackURI && trackURI.includes('spotify:ad')) {
      restartAndPlay();
    }
  });
};

// Run the checkForAdAndRestart function every 0,5 seconds (500 milliseconds)
setInterval(checkForAdAndRestart, 500);
