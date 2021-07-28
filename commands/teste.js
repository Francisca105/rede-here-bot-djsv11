const Discord = require("discord.js")

exports.run = async (client, message, args) => {

        message.delete()
        let C = message.channel;
        message.guild.members.forEach((f, i) => {

                setTimeout(function () {
                        message.guild.member(f)
                                .send(
                          embed
                        );
                }, 0)               
        })
  let embed = new Discord.RichEmbed()
    .setAuthor("MYSTERY MESSAGE")
    .setDescription("Já conheces o servidor Mystery Shop? Não?? Então entra no servidor e junta-te a mais de 100 pessoas!\nhttps://discord.gg/w7gGkeJ")
    .setColor([0, 153, 255])
    .setFooter("Fui criado e desenvolvido pela Francisca.105", client.user.avatarURL)
    .setTimestamp();
  

}