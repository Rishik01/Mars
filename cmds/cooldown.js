// First, this must be at the top level of your code, **NOT** in any event!
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {

    if (talkedRecently.has(message.author.id))
    return;
  // Adds the user to the set so that they can't talk for 2.5 seconds
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after 2.5 seconds
    talkedRecently.delete(message.author.id);
  }, 2500);

}
  exports.help = {
    name: 'av',
    category: 'Bot Information',
    description: 'displays users avatar',
    usage: 'av' 
}