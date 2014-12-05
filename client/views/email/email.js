Template.email.events({
    "click .sendEmail": function(event, template) {},
    "submit form": function(event, template)

    {
        var betaName = event.target.betaName.value;
        var betaEmail = event.target.betaEmail.value;
        var message = "Their name is: " + betaName + "Their Email is: " + betaEmail;

        Meteor.call('sendEmail',
            'tj@tjhouston.com, skrieder@gmail.com',
            'You have a new beta tester! ', message
        );
        console.log("Email button for beta form ")
        alert("Houston, we have liftoff. We will be in touch! Thanks TJ & Scott")
    }
});