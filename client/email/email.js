if (Meteor.isServer) {
Email.send({
from: "tj@tjhouston.com",
to: "magicdude1@gmail.com",
subject: "Subject",
text: "Getting Closer"
});
console.log("Email Code")
}