# Game Time Tracker

Track your playtime in any game, any console. This was mostly made for PS4 since there's no native way to do it, but it can work with any console, and with PC games that don't have supported time tracking (like pirated games).

### How to use

The GameTimeTracker is currently not online in any server, but you can run it locally!
Clone the repo, rename `src/config.js.example` and `server/config.js.example` and set your URLs (default should work if running locally). Now, run `npm install` in `./` and in `server/`, both use different `package.json`. And then you have two options: for a 'production' mode, run `npm run build` and `npm start`. If you want to run it in 'dev' mode, with live updates of your changes, just run `npm run dev` and everything should get started!
It will eventually be live and you won't have to do this, but for now this is as good as it gets.

### FAQ

- Data is saved in the browser's localStorage, which means it saves only in your current browser, and will be deleted if you delete localStorage (typically when using "Clear browsing data").
- Game results (name, image, etc) when trying to add a game are fetched from [HowLongToBeat](https://howlongtobeat.com), which means no game should really be missing.
- Time is only saved when you press the 'Finish' button, this is made so you can discard recorded time (with the 'Cancel' button) if you went afk, or if you were only testing.
- The app is currently designed for small sizes (mobile), and I'm currently working on the desktop version. That's why, on a big 1920x1080 desktop screen, it looks off, with big buttons and whatnot. [This is what the app looks like on mobile](https://i.imgur.com/5UrH0oC.png)

### Planned features

- ~~Sort games in your list~~
- Add a way to import/export data easily from localStorage.
- Account system to sync times cross-browser.
- Showing average times for Main Game and Completionist, both fetched from [HowLongToBeat](https://howlongtobeat.com).
- Easily adding your time to [HowLongToBeat](https://howlongtobeat.com) lists.
- Manually adding time, in case you forgot to start.

### Other

If you have any issue or suggestion, please use don't hesitate to tell me [here](https://github.com/mll-Kerberos/game-time-tracker/issues)!

Also if you were crazy enough, you could donate [here, through Paypal](https://www.paypal.me/Kashbel).

###
