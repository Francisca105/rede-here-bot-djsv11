const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission('ADMIN'))
    return message.reply("Não tens permissão para isso!");
    
  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name}`)
    .setImage(message.guild.iconURL)
    .setColor([54, 57, 64])
    .setFooter("Fui criado e desenvolvido pela Francisca.105", client.user.avatarURL)
    .setTimestamp();
  
  message.channel.send(embed);
}