const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.guilds.size} servidores.`); 
  client.user.setPresence({ activity: { name: 'Dungeons & Dragons' }, status: 'idle' })
  //.then(console.log)
  .catch(console.error);
});


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // ping
  if(comando === "ping") {
    const m = await message.channel.send("Pong ");
    m.edit(`Pong! Latency is **${m.createdTimestamp - message.createdTimestamp}**ms.`);
  }

  if(comando === "help") {
    const m = await message.channel.send(" 📚 Consulting oracle..");
    m.edit(`**RPG Simple Dice For Discord**

    **🎲 GERAL**

    **${(config.prefix)}ping** - Return Ping in ms .

    
    **🎲 DICE** 

    **${(config.prefix)}d4** -Roll **4** sided dice .
    **${(config.prefix)}d6** - Roll **6** sided dice .
    **${(config.prefix)}d8** - Roll **8** sided dice .
    **${(config.prefix)}d12** - Roll **12** sided dice .
    **${(config.prefix)}d20** - Roll **20** sided dice .
    **${(config.prefix)}d100** - Roll **100** sided dice .

    Developer : TioSchmidt#6110
    Version 0.1
    `);
  }



  if(comando === "d4") {
    const m = await message.channel.send(" 🎲 Rolling...");
    var x = Math.floor((Math.random() * 4) + 1);
    m.edit(`Dice Returned : **${x}** 🎲`);
  } 

  if(comando === "d6") {
    const m = await message.channel.send(" 🎲 Rolling...");
    var x = Math.floor((Math.random() * 6) + 1);
    m.edit(`Dice Returned : **${x}** 🎲`);
  } 

  if(comando === "d8") {
    const m = await message.channel.send(" 🎲 Rolling...");
    var x = Math.floor((Math.random() * 8) + 1);
    m.edit(`Dice Returned: **${x}** 🎲`);
  } 

  if(comando === "d12") {
    const m = await message.channel.send(" 🎲 Rolling...");
    var x = Math.floor((Math.random() * 12) + 1);
    m.edit(`Dice Returned : **${x}** 🎲`);
  } 

  if(comando === "d20") {
    const m = await message.channel.send(" 🎲 Rolling...");
    var x = Math.floor((Math.random() * 20) + 1);
    m.edit(`Dice Returned : **${x}** 🎲`);
  } 

  if(comando === "d100") {
    const m = await message.channel.send(" 🎲 Rolling...");
    var x = Math.floor((Math.random() * 100) + 1);
    m.edit(`Dice Returned : **${x}** 🎲`);
  } 
  
});

client.login(config.token);