# iota balance tracker cross platform app

You can find a web version running [here](https://iota-ticker.vercel.app/)
I'll provide an android APK for the native android version

# Features

- Track balances: You can enter an iota address by pasting it into the box and then pressing the add '+' button. The app will poll and get the current balance of the address every 5 seconds (can adjust in the constants the interval desired)

- Remove items: To remove an entry you can swipe it to the right of the screen, you should see a red trash icon and the right and if you go far enough and release it will remove the entry from the list

- Export csv: You can export the current list to a csv file of 'address,balance' structure by clicking the export/download button on the right of the add button

# Development notes

iOS - I didn't include iOS as a target because I did this on a linux machine, would have needed to be on a mac to do this properly. 

Capacitor Plugin - I wrote a custom plugin to save the csv file, I could have used the offical filesystem plugin, but chose to do this since the task description sounded like you wanted to see me work on the native side too. The plugin is published as a seperate scoped npm package you can find [here](https://www.npmjs.com/package/@rhdj/save-csv) and on [github](https://github.com/rob-johnston/savecsv)

Design/UX - not my strong point as you can clearly tell. Just wanted to get something working that looked simple wihtout going crazy with UI libraries. Tried to consider accessibility with colors and screen reader labels, and wanted to try something new with the slide to delete. 

Testing - Didn't get around to this because of limited time and this would be a new rabbit hole of stuff to learn, so #yolo for now 

## Run locally

Install the dependencies...

```bash
cd iota-balance-tracker
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:5000). 