
const { Schema } = require("mongoose");

const filmsSchema = new Schema({
_id: String,
title: String,
opening_crawl: String,
producer: String,
release_date: String,
characters: [{type: String,ref: "characters"}],
planets: [{type: String,ref: "planets"}],
})

filmsSchema.statics.list = async function (){
    return await this.find()
    .populate("characters", ["_id","name"])
    .populate("planets", ["_id","name"])
}

filmsSchema.statics.get = async function (_id) {
    return await this.findOne({_id})
    .populate("characters", ["_id","name"])
    .populate("planets", ["_id","name"])
}

filmsSchema.statics.create = async function (data) {
    return await this.crete(data)
}

module.exports = filmsSchema