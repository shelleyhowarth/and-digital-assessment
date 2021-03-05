const functions = require("firebase-functions");

const admin = require("firebase-admin");


admin.initializeApp();

exports.sendReturn = functions.firestore
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

exports.sendContact = functions.firestore
    .document("contactForms/{orderId}")
    .onCreate((snap, context) => {
      admin
          .firestore()
          .collection("mail")
          .add({
            to: snap.data().email,
            message: {
              subject: "Golden Shoes: User Query",
              text: `Name: ${snap.data().firstName} ${snap.data().lastName}

                     Email: ${snap.data().email}

                     Reason: ${snap.data().reason}

                     Order Reference: ${snap.data().orderRef}

                     Description: ${snap.data().description}`,
              html: `Name: ${snap.data().firstName} ${snap.data().lastName}

                      Email: ${snap.data().email}

                      Reason: ${snap.data().reason}

                      Order Reference: ${snap.data().orderRef}
                      
                      Description: ${snap.data().description}`,
            },
          })
          .then(() => console.log("Queued email for delivery!"));
    });

