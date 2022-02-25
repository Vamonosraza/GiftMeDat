var path = require('path');
var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');

/* GET users listing. */
// When I enter these pages, It will show it's corresponding View (line 10)
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.sendFile('giftlist.html', { root: path.join(__dirname, '../views')});
  
});
router.post('/', function(req, res, next) {
  addGift(name, item)
});

module.exports = router;

async function addGift(name, item) {
  const uri = "mongodb+srv://Vamonosraza:Mongojessy$2@cluster0.aboc8.mongodb.net/regifts?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await addGiftClient(client, name, item);
  } finally {
    await client.close();
  }
}

async function addGiftClient(client, name, item) {
  const session = client.startSession();
  const giftCollection = client.db("regifts").collection("listings");

try {
    const testObj = {
      name: name,
      item: item
    }
      const result = await giftCollection.insertOne(testObj);
      console.log(`New gift created with the following id: ${result.insertedId}`);


    if (result) {
        console.log("The gift was successfully created.");
    } else {
        console.log("The transaction was intentionally aborted.");
    }
} catch(e){
    console.log("The transaction was aborted due to an unexpected error: " + e);
} finally {
    await session.endSession();
}

}