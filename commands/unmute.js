const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Não tens permissão para executar o comando.")
  try {
    const user = message.mentions.users.first();
    const settings = client.getSettings(message.guild.id);

    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.removeRole(message.guild.roles.find(r => r.name == settings.muteRole)).then(() => {
          message.reply(`Usuário mutado com socesso!`);

          {
            let embed = new Discord.RichEmbed()
            .setTitle('Unmute')
            .setColor('#eeeeee')
            .setDescription(`Usuário: ${user.username}\nAutor do desmute: ${message.author.username}`);

            message.guild.channels.get("650879647537692702").send(embed).catch(console.error);
          }
        }).catch(err => {
         message.reply('Ocorreu um erro e não consegui mutar o membro!');
        });
      } else {
        message.reply('Este usuário não se encontra na guild!');
      }
    } else {
      message.reply('Não mencionas-te um usuário para mutar!');
    }
  } catch (err) {
    message.channel.send('Ocorreu um erro!\n' + err).catch();
  }
};