Template.add.events({
  "click .submitProduct": function (event, template) {
  },
  "submit form": function (event, template) {
     var inputValue = event.target.new_product_name.value;
	 var clientID = "NOTDEFINED";
	 var purchaseDate = event.target.purchaseDate.value;
	 var expirationDate = event.target.expirationDate.value;
	 
	 
	 
   //  alert(inputValue);
	 
	 clientID=Meteor.userId();
	 Products.insert({clientID:clientID , productName:inputValue, purchaseDate:purchaseDate, expirationDate:expirationDate});
	   }
});
