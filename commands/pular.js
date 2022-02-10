module.exports = {
  name: 'Pular',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora! `)
    try {
      const song = await queue.skip()
      message.channel.send(`${client.emotes.success} | Pular! Nova música:\n${song.name}`)
    } catch (e) {
      message.channel.send(`${client.emotes.error} | ${e}`)
    }
  }
}
