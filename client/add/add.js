Template.add.events({
  "click .submitProduct": function (event, template) {
    alert("My button was clicked!");
  },
  "submit form": function (event, template) {
     var inputValue = event.target.new_product_name.value;
     alert(inputValue);
	 
	   
	   }
});
