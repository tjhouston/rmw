console.log("In reminders.js");

Template.reminders.helpers({
	reminders: function () {
	    // this helper returns a cursor of
	    // all of the posts in the collection
	    console.log("in reminders.helpers reminders.js");
	    
	    myID=Meteor.userId();

            var d = new Date();
            var y = d.getFullYear();
            var m = d.getMonth()+1;
            var n = d.getDate()+7;
            console.log("A week from today's date is: " + y + "-" + m + "-" + n);
            var weekFromToday = y + "-" + m + "-" + n;
	    
	    return Products.find({expirationDate: weekFromToday}); // find all the products
	}
    });