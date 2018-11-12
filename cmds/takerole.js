const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("The manage roles permission is required to take a role from a user!.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Please specify a user!.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Please specifiy a role!");
    let gRole = message.guild.roles.find((r) => r.name === role);
    if(!gRole) return message.reply("Couldn't find that role.");
    
    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rMember.removeRole(gRole.id));
    
      message.channel.send(`<@${rMember.id}> was removed from the ${gRole.name} role.`)
    }


  exports.help = {
    name: 'takerole',
    category: 'role management',
    description: 'takes a role from the specified user',
    usage: 'takerole' 
};