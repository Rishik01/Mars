const Discord = require('discord.js')
const superagent = require ('superagent');

module.exports.run = async (bot, message, args) => {

    const msg = await message.channel.send('Loading...');
      
    const {body} = await superagent
    .get ('https://random.dog/woof.json');

    const dogembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(':eyes:')
      .setImage(body.url);
  
    msg.edit(dogembed);
  }


  exports.help = {
    name: 'doge',
    description: 'sends a randomly generated picture of a dog',
    usage: 'doge' 
};