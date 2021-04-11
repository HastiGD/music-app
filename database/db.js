const { MongoClient } = require("mongodb");

// Imports DB admin credentials and connects to MongoDB Atlas (Comment out if deploying to Heroku or serving MongoDB locally)
const dotenv = require("dotenv");
dotenv.config();
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ux7qi.mongodb.net/musicdb?retryWrites=true&w=majority`;

function myDB() {
  const mydb = {};
  const DB_NAME = "musicdb";

  mydb.getSongs = async (query) => {
    console.log("In mydb.getUrl");
    let client;
    try {
      // Connect to db
      client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connecting to db: ", DB_NAME);
      await client.connect();
      console.log("Connected!");
      // Connect to collection
      const db = client.db(DB_NAME);
      const songsCol = db.collection("songs");
      console.log("Collection ready, querying with ", query);
      // Query collection
      const songs = await songsCol.find({ country: query }).toArray();
      console.log("Got songs", songs);
      return songs;
    } catch (e) {
      console.log(e);
    } finally {
      // Disconnect from db
      console.log("Closing connection");
      client.close();
    }
  };

  mydb.addSong = async (song) => {
    console.log("In mydb.addSong");
    let client;
    try {
      // Connect to db
      client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connecting to db: ", DB_NAME);
      await client.connect();
      console.log("Connected!");
      // Connect to collection
      const db = client.db(DB_NAME);
      const songsCol = db.collection("songs");
      console.log("Ready to insert", song);
      // Insert in collection
      const res = await songsCol.insertOne(song);
      return res;
    } catch (e) {
      console.log(e);
    } finally {
      // Disconnect from db
      console.log("Closing connection");
      client.close();
    }
  };

  return mydb;
}
module.exports = myDB();
