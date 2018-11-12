const Discord = require('discord.js');
 const message = require('discord.js');
  module.exports = async bot => {

    console.log(`${bot.user.tag}, ready to serve ${bot.users.size} users in ${bot.guilds.size} servers.`, 'ready');
    bot.user.setActivity(`${bot.config.prefix}help | ${bot.users.size} users`, {type: 'PLAYING'});
    const embed = new Discord.RichEmbed()
      .setTitle('Ready Event')
      .setThumbnail(bot.user.avatarURL)
      .addField('Status', bot.user.presence.status, true)
      .addField('Users', bot.users.size, true)
      .addField('Servers', bot.guilds.size, true)
      .addField('Ready At', bot.readyAt.toLocaleString('en-UK'))
      .setFooter(bot.user.username, bot.user.avatarURL)
      .setTimestamp();
     let chann = bot.channels.get('511171142439141389');
    chann.send(embed);
  };