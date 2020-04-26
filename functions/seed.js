const admin = require('firebase-admin');
admin.initializeApp();

const faker = require('faker');

const db = admin.firestore();

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0);
}

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

const fakeIt = () => {
    return db.collection('posts').add({
        type: coinFlip() ? "diagnosis" : "custom",
        title: faker.lorem.sentence(),
        message: faker.lorem.paragraphs(),
        _geoloc: {
          "lat":getRandomInRange(-180, 180, 3), 
          "lng":getRandomInRange(-180, 180, 3)
        },
        author: {
          
        }
    });
}

[...Array(10)].forEach(fakeIt)