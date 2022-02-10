const { Constants } = require('discord.js')

module.exports = {
  name: 'entrar',
  aliases: ['move'],
  run: async (client, message, args) => {
    let voiceChannel = message.member.voice.channel
    if (args[0]) {
      voiceChannel = await client.channels.fetch(args[0])
      if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
        return message.channel.send(`${client.emotes.error} | ${args[0]} não é um canal de voz válido!`)
      }
    }
    if (!voiceChannel) {
      return message.channel.send(
        `${client.emotes.error} | Você deve estar em um canal de voz ou inserir um id de canal de voz!`
      )
    }
    client.distube.voices.join(voiceChannel)
  }
}
