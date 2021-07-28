module.run = async (message, ) =>{

    let embed = new Discord.RichEmbed()
.setAuthor("Ajuda")
.setDescription("Lista de comandos:")
.setField("Ajuda", "Manda esta lista de comandos.")
.setField("Alerta", "")
.setField("Anuncio", "Manda um anúncio no canal onde o comando foi realizado.")
.setField("Avatar", "Manda o avatar de um usuário do servidor.")
.setField("Ban", "Permite banir um usuário.")
.setField("Clear", "Apaga as mensagens de um chat.")
.setField("Kick", "Kicka um usuário.")
.setField("Mute", "Muta permanentemente um usuário.")
.setField("Ping", "Manda o ping do bot.")
.setField("Say", "O bot manda o texto que tu mandares.")
.setField("Servericon", "Manda o icon do servidor.")
.setField("Serverinfo", "Manda as informações do servidor.")
.setField("Unban", "Permite desbanir um usuário.")
.setField("Unmute", "Permite desmutar um usuário.")
.setField("Userinfo", "Manda as informações de um usuário.")
.setColor([200, 73, 10])
.setFooter("Fui criado e desenvolvido pela Francisca.105", client.user.avatarURL)
.setTimestamp();

message.channel.send("Mandei os meus comandos no teu privado!");

}
