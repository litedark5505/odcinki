const Discord = require('discord.js');
const client = new Discord.Client(); 
client.on ("ready", () => {
console.log ("Zalogowano jako ${client.user.tag}!");
}); 

client.on ('message', msg => {
    if (msg.content === 'komenda') {
    msg.reply ('odpowiedź');
    }
}); 

client.login ("token")