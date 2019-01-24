const Discord = require('discord.js');
const client = new Discord.Client();
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
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
        message.channel.send("I want my computer games............");
        message.channel.send("Anyone have foood?");
        //cs=1;
    }    
    if(message.content==="Gabriel, you want this メロンパン™?"){
           cs=getRandomInt(2);
        if(cs===0){
            message.channel.send("hAI YeS PLAESE GIMMe");
        }
        else if(cs===1){
            message.channel.send("no you probably poisoned it satan");
        }
        else{
            message.channel.send("mlep nep e");
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
