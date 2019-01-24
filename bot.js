const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    int cs=0;
    if (message.content==="I wonder if Gabriel will come..."){
        //message.reply("how long do you want us to talk?")
        message.channel.send("I want games............");
        message.channel.send("Anyone have foood?");
        cs=1;
    }    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
