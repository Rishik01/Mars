
module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You need permission to ban members");
  
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Please mention a valid user");
  if(!member.bannable) 
    return message.reply("I couldn't ban this user, check my permissions");
  
    await member.ban
    .catch(error => message.reply(`unable to ban ${message.author} ${error}`));
  message.reply(`${member.user.tag} has been succesfully banned by${message.author.tag}`);
}

  exports.help = {
    name: 'ban',
    category: 'ban',
    description: 'ban lmao',
    usage: 'ban'
  
  };