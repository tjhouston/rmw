Template.add.helpers({
	todayDate: function () {
	    console.log("In add.js todayDate helper.");
	    var d = new Date();
	    var y = d.getFullYear();
	    var m = d.getMonth()+1;
	    var n = d.getDate();
	    console.log("Today's date is: " + y + "-" + m + "-" + n);
	    var today = y + "-" + m + "-" + n;
	    return today;
	}
    });

Template.add.helpers({
	nextYearDate: function () {
	    console.log("In add.js todayDate helper.");
	    var d = new Date();
	    var y = d.getFullYear();
	    var m = d.getMonth()+1;
	    var n = d.getDate();
	    console.log("Today's date is: " + y + "-" + m + "-" + n);
	    var yearFromToday = y + 1 + "-" + m + "-" + n; // add one to the year.
	    return yearFromToday;
	}
    });

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
      var receiptNumber = event.target.receiptNumber.value;
      var purchaseLocation = event.target.purchaseLocation.value;
      
      // get the user id
      clientID=Meteor.userId();

      console.log("In add.js event handler form submit.");

      var numUserEnteries = 0;

      // get the number of enteries the user has already made
      var numUserEnteries = Products.find({ clientID: clientID}).count();
      
      console.log("User has previously entered = " + numUserEnteries);

      var newItemNumber = numUserEnteries + 1;

      console.log("NewItemNumber = " + newItemNumber);

      // insert the form data to the mongodb
      Products.insert({clientID:clientID , productName:inputValue, purchaseDate:purchaseDate, expirationDate:expirationDate, descriptionInput:descriptionInput,itemCost:itemCost,receiptNumber:receiptNumber, purchaseLocation:purchaseLocation, upc:upc , itemNumber:newItemNumber});
	    }
    });
