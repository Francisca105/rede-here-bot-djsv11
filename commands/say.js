const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não tem permissão!');
  
   let N = args.slice(0)
                .join(" ");
        if (!N) return message.reply("Por favor escreva alguma coisa!!!")

  message.channel.send(N);
  message.delete()
}