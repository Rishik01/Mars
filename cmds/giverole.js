module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("The manage roles permission is required to give a role from a user!.");
  const rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.reply("Please specify a user!.");
  const role = args.join(' ').slice(22);
  if (!role) return message.reply('Please specifiy a role!');
  const gRole = message.guild.roles.find((r) => r.name === role);
  if (!gRole) return message.reply('Could not find that role.');

  if (rMember.roles.has(gRole.id)) return message.reply('They already have that role!');
  await(rMember.addRole(gRole.id));
    
  message.channel.send(`<@${rMember.id}> has been given the ${gRole.name} role.`)
}

exports.help = {
  name: 'giverole',
  category: 'role management',
  description: 'gives a role to a specified user',
  usage: 'giverole' 
};