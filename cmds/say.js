module.exports.run = async (_bot, message, args) => {

  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need manage message permissions to do that!.');

  const sayMessage = args.join(' ');
  message.delete().catch(() => { }); 
    
  message.channel.send(sayMessage);   
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};
exports.help = {
  name: 'say',
  category: 'random',
  description: 'says a message',
  usage: 'say' 
};