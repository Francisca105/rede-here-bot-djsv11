const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();
client.prefix = config.prefix;

const active = new Map();

client.on("ready", () => {
  console.log('Bot iniciado com ' + client.users.size + ' usuários, em ' + client.channels.size + ' canais de ' + client.guilds.size + ' servidores.');
  client.user.setActivity(`SevenUP`, {type: "Playing"});
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;
  let user = message.author;

  let convite = /(discord.gg|discordapp.com)\/(invite)?/ig.test(message.content)
if(convite === true) {
if(message.member.hasPermission('BAN_MEMBERS')) return;
message.delete()
message.reply('Não pode divulgar convites de outros servidores aqui!!! 😡')

  let msg =  message.content.toLowerCase();
  if (message.content.startsWith(`<@${client.user.id}>`)){
    message.channel.send(` :robot: Olá! Eu sou o bot da **Rede Here** e estou aqui para te ajudar! :robot:\nPara começar, o meu prefixo é ``-`` e com o comando -ajuda consegues ver todos os comandos disponiveis! `)
  }
}


client.on("guildMemberAdd", async member => {
  member.send("Bem-vindo!");
  member.addRole('651565337942425647')
  client.channels.get('650373401965232162').send(`😄 **${member.user.username}** juntou-se ao servidor ${member.guild.name}!`);
  client.guilds.get("650373401965232154").channels.get("657655224550555648").setName(`Membros: ${message.guild.memberCount}`);
  client.user.setActivity(`a RedeHere com ${message.guild.memberCount} membros`, {type: "Watching"});
});

client.on("guildMemberRemove", async member => {
  client.channels.get('650373401965232162').send(`😢 *${member.user.username}* saiu do servidor ${member.guild.name}.`);
  client.guilds.get("650373401965232154").channels.get("657655224550555648").setName(`Membros: ${message.guild.memberCount}`);
  client.user.setActivity(`a RedeHere com ${message.guild.memberCount} membros`, {type: "Watching"});
});


  if (message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    
    let ops = {
      active: active
    }
    
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args, ops);
    
  } catch (e) {
    console.log(e);
  } finally {}

});

client.login(config.token);