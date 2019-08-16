const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['609770616480071681'];// ايدي حسابك
const prefix = ['#'];
 
client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Esmael `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});
 
client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});
 
 

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
         ** ** بريفكـس البوت  #

1. البريفكس + راتب ( لأخذ المكافـأة اليومية 600-300 ) ,,

2. البريفكس + مبلغ ( لرؤيـة عدد الكريديت التي يمتلكهـا البوت ) ,,

3. البيرفكس + ريب ( لأعطاء ريب لنفسك ) ,, 

4. البيرفكس + spam ( لأمر البوت بعمـل السبام لجمـع الكريديـت ) ,, 

5. البيرفكس + تحدث ( لأمر البوت بتحويـل الكريديت لك ) ,,

๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛๛

" ملاحظة "

- البيرفكس + تحدث + امر التحويل ,, مثل
#تحدث #credits @Raaaaz 5000
- البيرفكس + تحدث + الكود ,, مثل
#تحدث 9973.

{ أسہمہأعہيہل ألدليہمہيہ#8226 } , { ๖ۣۜ༻- Rààààààààz $!#8898 } 🔱  **
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  


 
client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**- الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'vipesmael'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`** الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'vipesmael');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
 
client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN);
