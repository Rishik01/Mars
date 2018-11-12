const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let msg = await message.channel.send("Generating avatar...");
	let botuser = message.mentions.users.first() || message.author;

    let embed = new Discord.RichEmbed();
    embed.setTitle(`${message.author.username}'s avatar`)
    embed.setImage(botuser.displayAvatarURL)
    embed.setColor('RANDOM')
    embed.setFooter(`requested by ${message.author.username} ID ${message.author.id}`)
  
   msg.edit(embed); 
  };


  exports.help = {
    name: 'av',
    category: 'Bot Information',
    description: 'displays users avatar',
    usage: 'av' 
};