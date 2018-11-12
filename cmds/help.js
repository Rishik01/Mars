exports.run = (bot, message, args, level) => {
  // If no specific command is called, show all filtered commands.
  if (!args[0]) {
    // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
    const myCommands = message.guild ? bot.commands.filter(cmd => bot.levelCache[cmd.conf.permLevel] <= level) : bot.commands.filter(cmd => bot.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);

    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = '';
    let output = `__**Command List**__\n\n[Use ${message.settings.prefix}help <commandname> for details]\n`;
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.help.category.toProperCase();
      if (currentCategory !== cat) {
        output += `\u200b\n **${cat}** \n`;
        currentCategory = cat;
      }
      output += `${message.settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: *${c.help.description}*\n`;
    });
    const Discord = require('discord.js');
    if (output.length > 2048) {
      const loe = new Discord.RichEmbed()
        .setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
        .setDescription('Sorry, but the embed is too long to be sent. We are working on a website for a list of commands, please be patient.')
        .addField('Workaround', 'In the meantime, however. You\'re more than welcome to use help to lookup information on individual commands.')
        .setTitle(`${bot.user.username} Help Manual`)
        .setFooter(`${bot.user.username} | Beta - Master`)
        .setTimestamp();
      message.channel.send(loe);

    } else {
      const embed1 = new Discord.RichEmbed();
      embed1.setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`);
      embed1.setColor('RANDOM');
      embed1.setDescription(output, {code: 'asciidoc', split: { char: '\u200b' }});
      embed1.setTitle(`${bot.user.username} Help Manual`);
      embed1.setFooter(`${bot.user.username} | Beta - Master`);
      embed1.setTimestamp();
      message.channel.send(embed1);
    }
  //  message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
  } else {
    // Show individual command's help.
    let command = args[0];
    if (bot.commands.has(command)) {
      command = bot.commands.get(command);
      if (level < bot.levelCache[command.conf.permLevel]) return;
      const Discord = require('discord.js');
      const embed2 = new Discord.RichEmbed();
      embed2.setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`);
      embed2.setTitle(`${bot.user.username} Help Manual`);
      embed2.setColor('RANDOM');
      embed2.addField('Command', `${command.help.name}`);
      embed2.addField('Description', `${command.help.description}`);
      embed2.addField('Usage', `${command.help.usage}`);
      embed2.setFooter(`${bot.user.username} | Beta - Master`);
      embed2.setTimestamp();
      message.channel.send(embed2);

      // message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\naliases:: ${command.conf.aliases.join(", ")}\n= ${command.help.name} =`, {code:"asciidoc"});
    }
  }
};

/* This was an idea by Flatbird, making this an embed, thank him. Not me.
*/

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 'User'
};

exports.help = {
  name: 'help',
  category: 'System',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};