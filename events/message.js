module.exports = (bot, message) => {
  const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this server is \`${bot.config.prefix}\``);
  }
  if (message.author.bot) return;
  if (message.content.indexOf(bot.config.prefix) !== 0) return;
  const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = bot.commands.get(command);
  if (!cmd) return;
  cmd.run(bot, message, args);
}
