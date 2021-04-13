const { MongoClient } = require("mongodb");

// Imports DB admin credentials and connects to MongoDB Atlas (Comment out if deploying to Heroku or serving MongoDB locally)
const dotenv = require("dotenv");
dotenv.config();

const url =
  process.env.MONGODB_URI ||
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ux7qi.mongodb.net/musicdb?retryWrites=true&w=majority`;

function myDB() {
  const mydb = {};
  const DB_NAME = "musicdb";

  mydb.getSongs = async (query) => {
    let client;
    try {
      // Connect to db
      client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      // Connect to collection
      const db = client.db(DB_NAME);
      const songsCol = db.collection("songs");
      // Query collection
      const songs = await songsCol.find({ country: query }).toArray();
      return songs;
    } catch (e) {
      console.log(e);
    } finally {
      // Disconnect from db
      client.close();
    }
  };

  mydb.addSong = async (song) => {
    let client;
    try {
      // Connect to db
      client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      // Connect to collection
      const db = client.db(DB_NAME);
      const songsCol = db.collection("songs");
      // Insert in collection
      const res = await songsCol.insertOne(song);
      return res;
    } catch (e) {
      console.log(e);
    } finally {
      // Disconnect from db
      client.close();
    }
  };

  mydb.getCapital = async (country) => {
    let client;
    try {
      // Connect to db
      client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      // Connect to collection
      const db = client.db(DB_NAME);
      const capCol = db.collection("countryinfo");
      // Insert in collection
      const res = await capCol.find({ country }).toArray();
      return res;
    } catch (e) {
      console.log(e);
    } finally {
      // Disconnect from db
      client.close();
    }
  };

  mydb.getLangs = async (country) => {
    let client;
    try {
      // Connect to db
      client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      // Connect to collection
      const db = client.db(DB_NAME);
      const langCol = db.collection("countryLanguages");
      // Insert in collection
      const res = await langCol.find({ country }).toArray();
      return res;
    } catch (e) {
      console.log(e);
    } finally {
      // Disconnect from db
      client.close();
    }
  };
  return mydb;
}
module.exports = myDB();
