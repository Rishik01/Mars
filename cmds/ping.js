exports.run = async (bot, message) => {
    
    let msg = await message.channel.send('poggers');
        
      msg.edit(`Pong! latency is \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
    };

  exports.help = {
    name: 'ping',
    category: 'Bot Information',
    description: 'ping command with latency',
    usage: 'ping'
  };
  