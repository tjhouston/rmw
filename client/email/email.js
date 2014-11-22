Template.email.events({
	"click .sendEmail": function (event, template) {
	},
		"submit form": function (event, template) {
Meteor.call('sendEmail',
            'tj@tjhouston.com',
            'Hello from meteor!',
            'This is a test of Email.send.'
			);
			console.log("Email button after method call ")
			}
		});

