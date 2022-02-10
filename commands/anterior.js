module.exports = {
  name: 'anterior',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora! `)
    const song = queue.previous()
    message.channel.send(`${client.emotes.success} | Tocando agora\n${song.name}`)
  }
}
