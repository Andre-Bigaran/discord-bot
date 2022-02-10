module.exports = {
  name: 'procurar',
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | Não há nada na fila agora! `)
    if (!args[0]) {
      return message.channel.send(`${client.emotes.error} | Por favor, forneça a posição (em segundos) para procurar! `)
    }
    const time = Number(args[0])
    if (isNaN(time)) return message.channel.send(`${client.emotes.error} | Por favor insira um número válido! `)
    queue.seek(time)
    message.channel.send(`Procurar por ${time}!`)
  }
}
