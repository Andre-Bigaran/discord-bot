module.exports = {
  name: 'pause',
  aliases: ['pause', 'hold'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora!`)
    if (queue.pause) {
      queue.resume()
      return message.channel.send('Reiniciou a música para você :)')
    }
    queue.pause()
    message.channel.send('Pausou a música para você :)')
  }
}
