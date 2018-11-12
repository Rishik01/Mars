const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const bot = new Discord.Client({
fetchAllMembers: true});
const config = require("./config.json");
bot.config = config;
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});
bot.commands = new Enmap();
fs.readdir("./cmds/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./cmds/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    bot.commands.set(commandName, props);
  });
});

bot.login(config.token);