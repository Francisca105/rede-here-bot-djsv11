const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Não tens permissão para executar o comando.")
  try {
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);
      if (member) {
        if (!message.guild.roles.find(r => r.name == "Mute")) {
          message.guild.createRole({
            name: 'Mute',
            color: '#eeeeee',
            permissions: ['READ_MESSAGES']
          }).catch();
        }
        
        
        member.addRole(message.guild.roles.find(r => r.name == "Mute")).then(async () => {
        message.reply(`**Successfully muted ${user.tag}**`);

          {
            let embed = new Discord.RichEmbed()
            .setTitle('Mute')
            .setColor('#eeeeee')
            .setDescription(`Mutado: ${user.username}\nAutor do mute: ${message.author.username}`);

            message.guild.channels.get("650879647537692702").send(embed).catch(console.error);
          }
        }).catch(err => {
          message.reply('Não consegui mutar o usuário.\n' + err);
        });
      } else {
        message.reply('O usuário não está no servidor!');
      }
    } else {
      message.reply('Não mecionas-te um usuário para mutar!');
    }
  } catch (err) {
    message.channel.send('Ups, ocorreu um erro!\n' + err.stack).catch();
  }
};