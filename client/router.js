Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: '404',
	yieldTemplates: {
		'header': {to: 'header'},
		'footer': {to: 'footer'}
	}


});

Router.map(function() {
	this.route('home', {path: '/'});
	// this.route('update', 
	// 	{path: '/update/:email',
	//      data: function()
	//      {
	//      	console.log(Polls.findOne({email:this.params.email}));
	//      	return Polls.findOne({email:this.params.email});
	//      }
	//     });
	this.route('viewAll', 
		{path: '/viewAll/',
	     data: function(){
	     	return Polls.find({}).fetch()
	     }
        });
}
)