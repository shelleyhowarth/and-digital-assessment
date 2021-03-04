const functions = require("firebase-functions");

const admin = require("firebase-admin");


admin.initializeApp();

exports.sendEmail = functions.firestore
    .document("returns/{orderId}")
    .onCreate((snap, context) => {
      admin
          .firestore()
          .collection("mail")
          .add({
            to: snap.data().email,
            message: {
              subject: "Golden Shoes Return Label",
              text: "This is the plaintext section of the email body.",
              html: "This is the <code>HTML</code> section of the email body.",
            },
          })
          .then(() => console.log("Queued email for delivery!"));
    });
