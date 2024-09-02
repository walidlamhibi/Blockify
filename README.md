Blockify is a simple tool that automate a process to skip Ads on the music application Spotify (Free Plan of course).
The main idea is so simple : Restart the app, whenever there is ads, which can be count as if you waited the whole time listening to ads
IMPORTANT : This works only on MAC OS !

To interact with Spotify using JavaScript on macOS, we'll use Node.js along with the "node-osascript" package,
which allows us to run AppleScript commands from Node.js. 

Once the process is launched, it ckecks for ads every 0,5 seconds (500 milliseconds)

SETUP : 
1 - Make sure having Node.js and node-osascript" package installed before.
2 - Once done, you can use tools like 'platypus' that allows you to create a native mac os app from a script.
3 - Run the app directly after launching Spotify.
