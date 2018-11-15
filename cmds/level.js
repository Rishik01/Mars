exports.run = async (bot, message, args, level) => {
    message.reply(`Your permission level is: ${bot.config.permLevel}`);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "level",
    category: "Misc",
    description: "Tells you your level",
    usage: "level"
  };