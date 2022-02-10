module.exports = {
  name: 'fila',
  aliases: ['q'],
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada tocando! `)
    const q = queue.songs
      .map((song, i) => `${i === 0 ? 'Tocando:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
      .join('\n')
    message.channel.send(`${client.emotes.queue} | **Fila do Servidor**\n${q}`)
  }
}
