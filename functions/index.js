const functions = require("firebase-functions");

const admin = require("firebase-admin");


admin.initializeApp();

const db = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.onUserCreate = functions.firestore.document("returns/{orderId}")
    .onCreate( async (snap, context) => {
      const values = snap.data();

      // send email
      await db.collection("logging")
          .add({
            description: `Email was sent to user with username:
            ${values.username}`,
          });
    });
