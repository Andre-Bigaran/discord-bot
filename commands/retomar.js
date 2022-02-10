module.exports = {
  name: 'Retomar',
  aliases: ['resume', 'unpause'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora! `)
    queue.resume()
    message.channel.send('Retomou a música para você :)')
  }
}
