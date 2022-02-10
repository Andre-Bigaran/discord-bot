module.exports = {
  name: 'Sair',
  run: async (client, message) => {
    client.distube.voices.leave(message)
  }
}
