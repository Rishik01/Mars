exports.run = async (bot, message) => {
  function doRandHT() {
    var rand= ['HEADS!','TAILS!'];
    
    return rand[Math.floor(Math.random()*rand.length)];
    }
    
     const embed = {
    "title": `Here is the winner!`,
    "description": doRandHT(),
    "color": 7584788,
    };
    message.channel.send({ embed });
    };
    exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: [],
      permLevel: "User"
    };
  exports.help = {
    name: 'flipcoin',
    category: 'misc',
    description: 'flips a coin',
    usage: 'flipcoin'
  };