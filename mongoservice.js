const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://takkella:<Rupa0624>@mongodb-r8p14.mongodb.net/<mongoDb>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("authentication").collection("testcollection");
  console.log(collection.find("Name"));
  client.close();
});