const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
        const modRole = message.guild.roles.find("name", "Moderator");
        if (!modRole) 
          return console.log("The Moderator role does not exist.");
      
        if (!message.member.roles.has(modRole.id))
          return message.reply("You can't use this command.");
      
         // Verandert de prefix van de command (vb. "!prefix +" ontvangt de "+" dus word het "+prefix").
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            // Verandert de configuratie in memory
            bot.config.prefix = newPrefix;
            // Slaat het bestand op.
            fs.writeFile("./config.json", JSON.stringify(bot.config), (err) => console.error);
  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${newPrefix}`);

  message.channel.send(sEmbed);
}
exports.help = {
  name: 'prefix',
  description: 'changes the bots default prefix',
  usage: 'prefix [desired prefix]'
};
