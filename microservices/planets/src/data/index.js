module.exports = {
  list: async () => {
    const planets = await fetch("http://database:3004/characters").then(resp => {
      return resp.json()
    }).then(decoded => {
      return decoded
    })
    return planets;
  },
}
