const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "characters" }],
  films: [{ type: String, ref: "films" }],
});

planetSchema.statics.list = async function (){
  return await this.find()
  .populate("residents",["_id","name"])
  .populate("films",["_id","title"])
}
planetSchema.statics.list = async function (a){
  return await this.findOne(a)
  .populate("residents",["_id","name"])
  .populate("films",["_id","title"])
}
planetSchema.statics.list = async function (a){
  return await this.create(a)
}

module.exports = planetSchema;
