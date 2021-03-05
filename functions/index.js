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
              text: "Print out your return label attached.",
              html: "Print out your return label attached.",
            },
          })
          .then(() => console.log("Queued email for delivery!"));
    });
