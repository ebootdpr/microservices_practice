const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/env");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  characters: conn.model("characters", require("./schemas/charactersSchema")),
  films: conn.model("films", require("./schemas/filmsSchema")),
  planets: conn.model("planets", require("./schemas/planetsSchema")),
};

//characters.find().populate("films", ["_id", "title"]).then(log);
