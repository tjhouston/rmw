console.log("In reminders.js");

Template.reminders.helpers({
  reminders: function () {
    // this helper returns a cursor of
    // all of the posts in the collection
    console.log("in reminders.helpers reminders.js");
    
    myID=Meteor.userId();

    return Products.find(); // find all the products	
  }
});