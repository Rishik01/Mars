const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need manage message permissions to do that!.');

    const sayMessage = args.join(' ');
    message.delete().catch(() => { }); 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(sayMessage,)
    message.channel.send(embed);   
  }; 


  exports.help = {
    name: 'av',
    category: 'Bot Information',
    description: 'displays users avatar',
    usage: 'av' 
};