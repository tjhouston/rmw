Products = new Meteor.Collection('products');
if (Meteor.isServer) {
	process.env.MAIL_URL="smtp://theremebermywarranty%40gmail.com:R3member1@smtp.gmail.com:465/";
	
};
Meteor.methods({
  sendEmail: function (to, subject, text) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    // don’t allow sending email unless the user is logged in
    // if (!Meteor.user())
   //   throw new Meteor.Error(403, “not logged in”);

    // and here is where you can throttle the number of emails this user
    // is allowed to send per day

    Email.send({
      to: to,
      from: "theremembermywarrenty@gmail.com",
      subject: subject,
      text: text
    });
	console.log("Sent from button click");
  }
});

