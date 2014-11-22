Template.add.events({
  "click .submitProduct": function (event, template) {
  },
  "submit form": function (event, template) {
      var inputValue = event.target.new_product_name.value;
      var clientID = "NOTDEFINED";
      var upc = event.target.upc.value;
      var purchaseDate = event.target.purchaseDate.value;
      var expirationDate = event.target.expirationDate.value;
      var descriptionInput = event.target.descriptionInput.value;
      var itemCost = event.target.itemCost.value;
      var receipt = event.target.receipt.value;
      var purchaseLocation = event.target.purchaseLocation.value;
      
      // get the user id
      clientID=Meteor.userId();

      console.log("In add.js");

      var numUserEnteries = 0;

      // get the number of enteries the user has already made
      //Products.count({ clientID: clientID});
      
      console.log("User has previously entered = " + numUserEnteries);

      // insert the form data to the mongodb
      Products.insert({clientID:clientID , productName:inputValue, purchaseDate:purchaseDate, expirationDate:expirationDate, descriptionInput:descriptionInput,itemCost:itemCost,receipt:receipt, purchaseLocation:purchaseLocation, upc:upc });
  }
    });
