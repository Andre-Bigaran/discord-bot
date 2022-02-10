module.exports = {
  name: 'filtros',
  aliases: ['filtros'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora!`)
    if (args[0] === 'off' && queue.filtros?.length) queue.setFilter(false)
    else if (Object.keys(client.distube.filtros).includes(args[0])) queue.setFilter(args[0])
    else if (args[0]) return message.channel.send(`${client.emotes.error} | Não é um filtro válido `)
    message.channel.send(`Filtro de fila atual: \`${queue.filtros.join(', ') || 'Off'}\``)
  }
}
