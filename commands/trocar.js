module.exports = {
  name: 'trocar',
  aliases: ['ps'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const string = args.join(' ')
    if (!string) return message.channel.send(`${client.emotes.error} | Insira um URL de música ou uma consulta para pesquisar. `)
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message,
      skip: true
    })
  }
}
