const {ShardingManager} = require(`discord.js`)

const shards = new ShardingManager("./bot.js", {
    token: process.env.token,
    totalShards: "auto"
})

shards.on(`shardCreate`, async shard =>{
    console.log(`[${new Date().toString().split(' ', 5).join(` `)}] Launched shard #${shard.id}\n`)
})

shards.spawn(shards.totalShards, 10000)

//cuz ratelimit is gay
