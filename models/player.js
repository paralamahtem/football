var mongoose = require('mongoose');
var playerShema = mongoose.Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created:{
    type: Date,
    default: Date.now()
  }
})

module.exports.Player = mongoose.model("Player", playerShema)
