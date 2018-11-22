const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setStatus('online')
    client.user.setPresence({
         game: {
             name: 'Trial PvP | bit.ly/stgta',
             type: "playing",
             url: "https://bit.ly/stgta"
         }
})
})

client.on('message', message => {

    if (message.content === '.subtorid') {
      let subThumb = message.guild.iconURL
      let subembed = new Discord.RichEmbed()
      .setColor("00c5ff")
      .setThumbnail(subThumb)
      .addField("uhh...", "Tell AmazingKoala or RedPack to give me link cauz idk lol")
      .addField("Help , Help", "Someone help this poor bot get his link so when someone asks it can tell that person the link")
      .addField("help", "Help me plzzzz")
      .addField("Command requested by", `${message.author}`)

      message.channel.send(subembed)

    }

})



client.login(bot_secret_token)
