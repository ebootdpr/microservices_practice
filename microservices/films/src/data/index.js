module.exports = {
  list: async () => {
    const films = await fetch("http://database:3004/films").then(resp => {
      return resp.json()
    }).then(decoded => {
      return decoded
    })
    return films;
  },
}
