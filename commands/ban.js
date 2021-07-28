const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
     if(!message.member.hasPermission('BAN_MEMBERS')) {
        let Embed_NoRoleRequire = new Discord.RichEmbed()
            .setAuthor("Comando de adminstradores!")
            .setDescription("Ey! O teu cargo não tem permissões para fazer isso!\nPor isso procura um comando que de facto possas fazer.")
            .setColor("#6699FF")
            .setFooter("Fui criado e desenvolvido pela Francisca.105", client.user.avatarURL)
            .setTimestamp(new Date())
        return message.channel.send(Embed_NoRoleRequire).then(msg => msg.delete(15*1000))
    }
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !")
    if(!member.bannable)
      return message.reply("Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o: ${error}`))

      message.channel.send(`${message.author}`)

      let pEmbed = new Discord.RichEmbed()
          .setTitle(":hammer: Ban")
          .addField("Membro Banido:", `${member.user.tag}`)
          .addField("Banido por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter("Fui criado e desenvolvido pela Francisca.105", client.user.avatarURL)
          .setColor("DARK_RED").setTimestamp()

          message.channel.send(pEmbed)
          
}