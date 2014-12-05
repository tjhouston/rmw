Products = new Meteor.Collection('products');
//set global mail url to gmail smtp
process.env.MAIL_URL = "smtp://theremebermywarranty%40gmail.com:R3member1@smtp.gmail.com:465/";



Meteor.methods({

    sendEmail: function(to, subject, text) {
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        // don’t allow sending email unless the user is logged in
        // if (!Meteor.user())
        //   throw new Meteor.Error(403, “not logged in”);


        Email.send({
            to: to,
            from: "theremembermywarrenty@gmail.com",
            subject: subject,
            text: text
        });
        console.log("sent Email");
    }
});


//Send email daily	
var daily = function() {

    // week from expiration date logic goes here. 
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    var n = d.getDate() + 7;

    //console.log("A week from today's date is: " + y + "-" + m + "-" + n);

    // hotfix for November, need a fix for all months
    // if(n>30){
    // 		 console.log("In hotfix for Novemeber");
    // 		 m = m + 1;
    // 		 console.log("M is: " + m);
    // 		 n = n % 30;
    // 		 console.log("N is: " + n);
    //      console.log("A week from today's date is: " + y + "-" + m + "-" + n);
    //  	   			}

    var weekFromToday = y + "-" + m + "-" + n;

    // hotfix for day less than 10
    if (n < 10) {
        weekFromToday = y + "-" + m + "-0" + n;
    }
    console.log("a week from today is " + weekFromToday);

    Reminders = Products.find({
        expirationDate: weekFromToday
    }); // find all the products with warranty's that expire a week from today
    Reminders.forEach(function(product) {
        var currentUser = Meteor.users.findOne({
            _id: product.clientID
        });
        var userEmail = currentUser.emails[0].address;
        console.log(userEmail);
        console.log(product);

        Meteor.call('sendEmail', userEmail, "Reminding you about your warranty!",
            "This is a friendly reminder that your product warranty is expiring soon. Thanks the RMW Team");

        // FUTURE ADD LINK TO PRODUCT ON WEBSITE



        console.log("Sent User Email to: " + userEmail);
    });
}


var cron = new Meteor.Cron({
    events: {
        "00 20 * * *": daily

    }
});