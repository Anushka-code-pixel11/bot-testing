const Discord = require('discord.js')

require('dotenv').config();
const { prefix } = require('./config.json')

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am Online!!')
})

client.on('message', message => {

    if (message.author.bot || !message.content.startsWith(prefix)) return;

    if (!message.guild) return;

    //Args - an array after the command. Example: !say 1 2 => ["1", "2"] 

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    //!ping = Pong!

    if (command === 'ping') {
        message.channel.send('!Pong')
        return
    } else if (command === 'embed') {
        const embed = new Discord.MessageEmbed()
            .setTitle('heya welcome to this server')
            .setDescription('do wutever you want as long as you dont break the rules')
            .setColor('PURPLE')
            .setTimestamp()

        message.channel.send(embed)
        return
    } else if (command === 'spam') {
        const owner = client.users.fetch(Owner)

        if (!message.author === owner) {
            return message.reply('nu spam UnU');
        }

        message.channel.send('EEEEEEEEEEEEEEEEEEEEEEEEE')
    }
})

client.login(process.env.BOT_TOKEN)
