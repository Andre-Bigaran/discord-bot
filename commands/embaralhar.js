module.exports = {
  name: 'Embaralhar',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora! `)
    queue.shuffle()
    message.channel.send('Músicas embaralhadas na fila')
  }
}
