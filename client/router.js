Router.configure({

layoutTemplate: 'layout'

});

Router.map (function(){
	this.route('home',{path:'/'});
	this.route('about',{path:'/about'});
	this.route('products',{path:'/products'});
	this.route('add',{path:'/add'});
	this.route('reminders',{path:'/reminders'});
	this.route('email',{path:'/email'});
	
	
	
	

})