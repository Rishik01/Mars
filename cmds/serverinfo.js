const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let msg = await message.channel.send("Searching...");
	let botuser = message.mentions.users.first() || message.author;

    let embed = new Discord.RichEmbed();
    embed.setTitle(`${message.author.username}'s avatar`)
    embed.setImage(botuser.displayAvatarURL)
    embed.setColor('RANDOM')
    embed.setFooter(`requested by ${message.author.username} ID ${message.author.id}`)
  
   msg.edit(embed); 
  };


  exports.help = {
    name: 'serverinfo',
    category: 'Bot Information',
    description: 'displays info about a server',
    usage: 'serverinfo' 
};