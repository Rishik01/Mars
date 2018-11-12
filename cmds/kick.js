module.exports.run = async (bot, message) => {

  if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You need permission to kick members');
  
  const member = message.mentions.members.first();
  if (!member)
    return message.reply('Please mention a valid user');
  if (!member.kickable) 
    return message.reply('I couldn\'t kick this user, check my permissions');
  
  await member.kick
    .catch(error => message.reply(`unable to kick ${message.author} ${error}`));
  message.reply(`${member.user.tag} has been succesfully kicked by ${message.author.tag}`);
};

exports.help = {
  name: 'kick',
  category: 'kick',
  description: 'kicks a member',
  usage: 'kick'
};