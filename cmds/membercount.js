
const Discord = require('discord.js');

module.exports.run = async (bot, message) => {

  function checkBots(guild) {
    let botCount = 0; // This is value that we will return
    guild.members.forEach(member => { // We are executing this code for every user that is in guild
      if (member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
    });
    return botCount; // Return amount of bots
  }
  //Okay, so now we will do same method, but to check how many humans are in guild
      
  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if (!member.user.bot) memberCount++; // If user isn't bot, add 1 to value. 
    });
    return memberCount;
  }
    
  // eslint-disable-next-line no-undef
  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription('membercount')
    .setColor('RANDOM')
    .addField('Humans', checkMembers(message.guild), true)
    .addField('Bots', checkBots(message.guild), true)
    .addField('Total member count', message.guild.memberCount) // Will add in-line field with total member count
    .setThumbnail(bot.avatarURL);
    
  message.channel.send(embed);
};
exports.help = {
  name: 'membercount',
  category: 'Bot Information',
  description: 'displays the amount of members in the server',
  usage: 'membercount' 
};