// подключаем кастомный модуль(файл) data
const MongoClient=require("mongodb").MongoClient;
const data = require("./data.js").data
const mongoClient = new MongoClient("mongodb://localhost:8080",{useNewUrlParser: true});

mongoClient.connect(function(err,client){
  if(err) return console.log(err);
  // работа с БД

  const db=client.db("all");
  const collection = db.collection("players");
  collection.insertMany(data, function(err,result){
    if(err) console.log(err);
    console.log(result.ops);
    client.close();
  })
})
