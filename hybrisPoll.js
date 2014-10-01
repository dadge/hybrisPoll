Polls = new Meteor.Collection("polls");

  Polls.attachSchema(new SimpleSchema({
        email: {
            type: String,
            regEx: SimpleSchema.RegEx.Email,
            label: "Email"
        },
        ecranV: {
            type: Number,
            allowedValues: [1, 2, 3, 4, 5],
            label: "Ecran ventes",
            optional:true
        },
        ecranP: {
            type: Number,
            allowedValues: [1, 2, 3, 4, 5],
            label: "Ecran P - Produits",
            optional:true
        },
        ecranU: {
            type: Number,
            allowedValues: [1, 2, 3, 4, 5],
            label: "Ecran U - Arborescence",
            optional:true
        },
        ecranF: {
            type: Number,
            allowedValues: [1, 2, 3, 4, 5],
            label: "Ecran F - Famille des produits",
            optional:true
        },
        preview: {
            type: Number,
            allowedValues: [1, 2, 3, 4, 5],
            label: "Preview",
            optional:true
        },
        commentaire: {
            type: String,
            label: "Commentaires",
            optional:true
        }
    }));

if (Meteor.isClient) {
  Template.viewAll.val = function () {
    
    console.log(this);

    return this;
  };

  Template.pollUpdate.editingDoc = function(){
    var poll = Session.get("currentPoll");
    console.log(poll);
    return poll;
  }

Template.home.events({
  'click #action':function(){
    var email = $("#myEmail")[0].value;
    var poll = Polls.findOne({email:email});
    if (poll)
    {
      Session.set("currentPoll", poll);
      $('#pollUpdate').modal('toggle');
    }
    else
    {
      $('#createEmail')[0].value = email;
      $('#pollCreate').modal('toggle');
    }

    //Session.set("currentEmail", $("#myEmail")[0].value);
    //Router.go('/update/'+ $("#myEmail")[0].value);
  }
});
  // Template.update.events({
  // 'click #update':function(){
  //   Router.go('home');
  // }
  //});



  AutoForm.hooks({
  "insertPollForm":{
    after: {
      insert: function(error, result, template) {console.log(result)},
      
    },

    // Called when any operation succeeds, where operation will be
    // "insert", "update", or the method name.
    onSuccess: function(operation, result, template) 
    {
      console.log(result)
      Session.set("currrentPoll", result)

    }, 

  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
