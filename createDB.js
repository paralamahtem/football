var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:8080/all', {useNewUrlParser: true});
var async = require('async')
var Player = require('./models/player').Player;
// очистим бд
// вставим 5 героев
// закроем соединение с бд
function open(callback){
  mongoose.connection.on('open', callback)
}

function dropDB(callback){
  var db = mongoose.connection.db
  db.dropDatabase(callback)}

function insertPlayer(callback){
    async.parallel([
      function(callback){
        var messi = new Player({
          nick: "Messi"
        })
        messi.save(function(err,messi){
          callback(err, "Messi")
        })
      },
      function(callback){
        var suarez = new Player({
          nick: "Suarez"
        })
        suarez.save(function(err,suarez){
          callback(err,"Suarez")
        })
      },
      function(callback){
        var coutinho =new Player({
          nick: "Coutinho"
        })
        coutinho.save(function(err,coutinho){
          callback(err,"Coutinho")
        })
      },
      function(callback){
        var terstegen =new Player({
          nick: "Ter Stegen"
        })
        terstegen.save(function(err,terstegen){
          callback(err,"Ter Stegen")
        })
      },
      function(callback){
        var pique =new Player({
          nick: "Pique"
        })
        pique.save(function(err,pique){
          callback(err,"Pique")
        })
      }
    ],
    function(err,result){
      callback(err)
    })
  }
  function close(callback){
    mongoose.disconnect(callback)
  }

  async.series([
    open,
    dropDB,
    insertPlayer,
    close
  ],
function(err,result){
  if(err) throw err
  console.log("OK!!!")
}
)
