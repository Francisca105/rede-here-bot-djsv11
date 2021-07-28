

const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Não tens permissão para executar o comando.")
  try {
    const user = args[0];

    if (user) {
        message.guild.unban(user).then(() => {
          message.reply(`Usuário desbanido com sucesso!`);

        {
            let embed = new Discord.RichEmbed()
            .setTitle('Unban')
            .setColor('#eeeeee')
            .setDescription(`Autor do unban: ${message.author.username}\nUsuário desbanido: ${user.tag}`)
            .setFooter("Fui criado e desenvolvido pela Francisca.105", client.user.avatarURL);

            message.guild.channels.get("650879647537692702").send(embed);
        }
        }).catch(err => {
         message.reply('Ocorreu um erro e não consegui desbanir o usuário' + err + '').catch();
        });
    } else {
      message.reply('Não deste o id do usuário para banir!');
    }
  } catch (err) {
    message.channel.send('Ocorreu um erro!\n' + err +'').catch();
  }
};
