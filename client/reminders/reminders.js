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

	    // hotfix for November, need a fix for all months
	    if(n>30){
		console.log("In hotfix for Novemeber");
		m = m + 1;
		console.log("M is: " + m);
		n = n % 30;
		console.log("N is: " + n);
            console.log("A week from today's date is: " + y + "-" + m + "-" + n);
	    }

            var weekFromToday = y + "-" + m + "-" + n;

	    console.log("Week from today variable is: " + weekFromToday);

	    //var 30days = [September, April, June, November];
	    //var 31days = [January, February, March, May, July, August, October, December];
	    
//	    return Products.find({expirationDate: weekFromToday}); // find all the products
	    return Products.find(); // find all the products
	}
    });
