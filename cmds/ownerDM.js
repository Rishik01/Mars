module.exports.run = async (bot, message) => {

  message.guild.member.get('454749660041707531').send(`Come get online fucker, ${message.author}need help with mars on ${message.member.guild.owner}'s server`);
  message.channel.send('A message has been sent to the owner requesting for help');
};

exports.help = {
  name: 'owenrDM',
  category: 'idk',
  description: 'sends the bot owner a DM when they need help with the bot',
  usage: 'ownerDM' 
};