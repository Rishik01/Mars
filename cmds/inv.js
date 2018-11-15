const Discord = require('discord.js');

module.exports.run = async (bot, message) => {

   let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor(0x00AE86)
    .addField('invite', 'https://discordapp.com/oauth2/authorize?client_id=503005931999854592&permissions=8&scope=bot')
    .setThumbnail(bot.avatarURL);
  message.channel.send(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};
exports.help = {
  name: 'inv',
  category: 'Bot Information',
  description: 'sends an invite link for the bot',
  usage: 'inv' 
};



