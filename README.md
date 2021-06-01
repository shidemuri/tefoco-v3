# Tefoco V3

a very pog raid bot

**i made it just to learn how to use js so dont expect it to update a lot**

## Command list:

$yeet (optional name for the channels)- makes a lot of text channels and vcs, changes the server's name and pings everyone on the new channels

$del - yeets all the channels and only leaves one

$admall - self explanatory

$servername (new server name) - self explanatory

$help - ...

## Selfhosting

i use [replit](https://replit.com) together with [uptimerobot](https://uptimerobot.com)

1- drag every single shit into a new node.js [repl](https://replit.com/)

2- on the shell tab, run
`npm i discord.js express path` and `npm init -y`

2- on the [secrets tab](http://prntscr.com/13o51hf), make a new secret called `token` and put your bot token in it

3- on `bot.js`, replace the `./image.png` from both lines 28 and 48 to 

`https://github.com/shidemuri/tefoco-v3/blob/master/image.png?raw=true` (because replit is blind and cant find local files lmao)

4- run `bot.js` once and copy the web link that just appeared on the side

5- go into [uptimerobot](https://uptimerobot.com), create a new account and a new monitor with these settings:

```
Monitor type: HTTP(s)

Friendly Name: (any name you want)

URL (or IP): (the website you copied on 4)

Monitoring Interval: every 5 minutes
```

6- let it run on replit and gg
