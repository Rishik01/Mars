const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {
        if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
        const commandName = args[0];
          let response = await bot.unloadCommand(args[0]); //eslint-disable-line
        if (response) return message.reply(`Couldn't unload: ${response}`);
        message.reply(`The command ${commandName} has been reloaded`);
      }
  exports.help = {
    name: 'av',
    category: 'Bot Information',
    description: 'displays users avatar',
    usage: 'av' 
};
