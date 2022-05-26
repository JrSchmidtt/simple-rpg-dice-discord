const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on("ready", () => {
  console.log(`Bot has been started: ${client.users.size} users, ${client.guilds.size} servers.`); 
  client.user.setPresence({ activity: { name: 'Dungeons & Dragons' }, status: 'idle' })
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
    m.edit(`**RPG Simple Dice For Discord.js**

    **🎲 GENERAL**

    **${(config.prefix)}ping** - Return Ping in ms .
    
    **🎲 DICE** 

    **${(config.prefix)}d4** -Roll **4** sided dice .
    **${(config.prefix)}d6** - Roll **6** sided dice .
    **${(config.prefix)}d8** - Roll **8** sided dice .
    **${(config.prefix)}d12** - Roll **12** sided dice .
    **${(config.prefix)}d20** - Roll **20** sided dice .
    **${(config.prefix)}d100** - Roll **100** sided dice .

    **🎲 DICE CUSTOM** 

    **${(config.prefix)}d'number'** - Roll Custom sided dice .

    Developer : Schmidt#9639
    Version 0.5
    `);
  }

  const dice = message.content.slice(config.prefix.length+1).trim().split(/ +/g);
  const roll = dice.shift().toLowerCase();

  rollDice(roll);

  async function rollDice(x) {
    const m = await message.channel.send(" 🎲 Rolling...");
    if (isNaN(x)) {
      m.edit(`Dice Returned : Not a Number 🎲`);
    }else{
      var x = Math.floor((Math.random() * x) + 1);
      m.edit(`Dice Returned : **${x}** 🎲`);
    }    
  }
});

client.login(config.token);