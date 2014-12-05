console.log("In products.js");
//clientID=Meteor.userId();
//console.log("ClientID = " + clientID);
//Products.insert({clientID:clientID});
//var items = Products.find({clientID:clientID});
//alert(items);



Template.products.helpers({
  products: function () {
    // this helper returns a cursor of
    // all of the posts in the collection
    console.log("in products.helpers products.js");
    
    myID=Meteor.userId();

    return Products.find({ clientID: myID});	
  }
});