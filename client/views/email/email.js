Template.email.events({
    "click .sendEmail": function(event, template) {},
    "submit form": function(event, template)

    {
        var betaName = event.target.betaName.value;
        var betaEmail = event.target.betaEmail.value;
        var message = 'Their Name is:'  + betaName + '\n Their Email is:'  + betaEmail;

        Meteor.call('sendEmail',
            'tj@tjhouston.com, skrieder@gmail.com',
            'You have a new beta tester! ', message
        );
        console.log("Email button for beta form ")
        alert('Houston, we have liftoff. \n We will be in touch! \n Thanks TJ & Scott')
    }
});