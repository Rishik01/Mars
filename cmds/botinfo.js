const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt.toLocaleString('en-UK'), true)
    .addField("Servers", bot.guilds.size)
    .addField("Description", 'Osiris is a bot built by planetzsky Ψ#6959.')
     
    message.channel.send(embed);
}
  exports.help = {
    name: 'botinfo',
    category: 'Bot Information',
    description: 'info about the bot',
    usage: 'botinfo' 
};