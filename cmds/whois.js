const Discord = require('discord.js');
const status = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline/Invisible'
};

module.exports.run = async (bot, message) => {
  
  const msg = await message.channel.send("Loading...");
  let botuser = message.mentions.users.first() ? message.guild.members.get(message.mentions.users.first().id) : message.member
  let planet = message.mentions.users.first() ? message.guild.members.get(message.mentions.users.first().id).roles.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1) : message.member.roles.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1)
let rolesList = "";
for(let i = 0; i < planet.length; i++) {
  rolesList += "<@&" + planet[i] + ">";
  if(planet.length != (i+1))
    rolesList += ", ";
}

function checkUserPermission(guild, message) {
  const arrayOfPerms = [];
  if (message.member.hasPermission('ADMINISTRATOR')) {
    arrayOfPerms.push('Administrator');
  }
  if (message.member.hasPermission('MANAGE_GUILD')) {
    arrayOfPerms.push('Manage Server');
  }
  if (message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    arrayOfPerms.push('Manage Roles');
  }
  if (message.member.hasPermission('MANAGE_CHANNELS')) {
    arrayOfPerms.push('Manage Channels');
  }
  if (message.member.hasPermission('VIEW_AUDIT_LOG')) {
    arrayOfPerms.push('View Audit Logs');
  }
  if (message.member.hasPermission('KICK_MEMBERS')) {
    arrayOfPerms.push('Kick Members');
  }
  if (message.member.hasPermission('BAN_MEMBERS')) {
    arrayOfPerms.push('Ban Members');
  }
  if (message.member.hasPermission('MANAGE_NICKNAMES')) {
    arrayOfPerms.push('Manage Nicknames');
  }
  if (message.member.hasPermission('MANAGE_EMOJIS')) {
    arrayOfPerms.push('Manage Emojis');
  }
  if (message.member.hasPermission('MANAGE_WEBHOOKS')) {
    arrayOfPerms.push('Manage Webhooks');
  }
  if (message.member.hasPermission('MANAGE_MESSAGES')) {
    arrayOfPerms.push('Manage Messages');
  }
  if (message.member.hasPermission('MENTION_EVERYONE')) {
    arrayOfPerms.push('Mention Everyone');
  }


  return arrayOfPerms;
}

  const embed = new Discord.RichEmbed()
  .setAuthor(botuser.user.username)
  .setColor('RANDOM')
  .setThumbnail(botuser.user.avatarURL)  
  .addField("Username", `${botuser.user.username}`)
  .addField("Status", `${status[botuser.user.presence.status]}`, true)
  .addField("ID", botuser.id, true)
  .addField("Nickname", botuser.nickname || "None", true)
  .addField("Joined At", `${botuser.joinedAt.toLocaleString('en-UK')}`, true)
  .addField("Created At", `${botuser.user.createdAt.toLocaleString('en-UK')}`, true) 
  .addField("Playing", `${botuser.user.presence.game ? `${botuser.user.presence.game.name}` : "Not playing anything."}`, true)
  .addField("Roles", `${rolesList}` || "None", true)
  if (checkUserPermission(message.guild, message).length > 0) {
    embed.addField('Key Permissions', `${checkUserPermission(message.guild, message).join(', ')}`, true);
  }

  msg.edit(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['e'],
  permLevel: "User"
};

exports.help = {
  name: 'whois',
  category: 'whois',
  description: 'shows yours or a mentioned members information',
  usage: 'whois'
};

