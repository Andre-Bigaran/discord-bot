module.exports = {
  name: 'parar',
  aliases: ['disconnect', 'leave'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora!`)
    queue.stop()
    message.channel.send(`${client.emotes.success} | Parar!`)
  }
}
