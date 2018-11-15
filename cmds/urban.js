const Discord = require("discord.js");
const urban = require('urban');
module.exports.run = async (bot, message, args) => {
if(args.length < 1) return message.channel.send('Please enter something for me to search');
let str = args.join(' ');

urban(str).first(json => {
    if(!json) return message.channel.send("No results found");
console.log(json);
    let embed = new Discord.RichEmbed()
    .setTitle(json.word)
    .setColor('RANDOM')
    .setDescription(json.definition)
    .addField("Upvotes", json.thumbs_up, true)
    .addField("Downvotes", json.thumbs_down, true)
    .setFooter(`Written by ${json.author}`)
message.channel.send(embed);
});
}


  exports.help = {
    name: 'urban',
    category: 'Misc',
    description: 'Searches the urban dictionary for whatever you want',
    usage: 'urban' 
};