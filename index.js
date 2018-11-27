const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setStatus('dnd')
    client.user.setPresence({
         game: {
             name: 'Trial PvP | bit.ly/stgta',
             type: "playing",
             url: "https://bit.ly/stgta"
         }
})
})

client.on('message', message => {

      if (message.content === '.help') {
        let helpthumb = message.guild.iconURL
        let helpembed = new Discord.RichEmbed()
        .addField("Help Menu by typical Gta", "**   **")
        .setColor("f0f25c")
        .setThumbnail(helpthumb)
        .addField("Commands", "These are my commands :smile:")
        .addField("My prefix is  - .", "**    **")
        .addField(".subtorid", "This command will tell you the like to Ridpack's youtube channel but if you rate his 9/10 i am sure that if you vist bit.ly/ytgta you will rate it 10/10 jk everyone has their own opinion.")
        .addField("Made by", "typical Gta |bit.ly/ytgta")

        message.channel.send(helpembed)


      }



    if (message.content === '.subtorid') {
      let subThumb = message.guild.iconURL
      let subembed = new Discord.RichEmbed()
      .setColor("00c5ff")
      .setThumbnail(subThumb)
      .addField("uhh...", "Tell AmazingKoala or RidPack to give me link cauz idk lol")
      .addField("Help , Help", "Someone help this poor bot get his link so when someone asks it can tell that person the link")
      .addField("help", "Help me plzzzz")
      .addField("Command requested by", `${message.author}`)

      message.channel.send(subembed)

    }

    if (message.content.startsWith('.slay')) {


      if(!message.member.hasPermission("MANAGE_MESSAGES")) return  message.reply("You don't have perms to do this");
      const prefix = '.'
      const lollol = message.content.slice(prefix.length).split(/ +/);
          const amount = parseInt(lollol[1]) + 0;
      message.channel.bulkDelete(amount)
      }

    if (message.content === 'lol') {
      message.channel.send("haha")
      message.channel.send("lol..... lol")
    }

})


//client.login("ooooooooooooooooooooooooooooooo my token")
client.login(process.env.TOKEN)
