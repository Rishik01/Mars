const Discord = require("discord.js");
const superagent = require ('superagent');

module.exports.run = async (bot, message, args) => {

    const msg = await message.channel.send('Loading...');
          
    const {body} = await superagent
      .get('http://aws.random.cat/meow');
    const catembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('Your welcome :3')
      .setImage(body.file);
      msg.edit(catembed);
      message.channel.send<':worryThonk:446067825673633794>';
    }

  exports.help = {
    name: 'av',
    category: 'Bot Information',
    description: 'displays users avatar',
    usage: 'av' 
};