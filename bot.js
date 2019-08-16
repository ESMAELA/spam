const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "!";


client.on('message', message => {
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    



    client.on('message', message => {
        var prefix = "!";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'كريدت')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });



client.login(process.env.BOT_TOKEN);
