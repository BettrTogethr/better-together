Template.chat_selection.helpers({
  randomUser: function(){
    console.log("randomUser");
    index = _.random(0,Meteor.users.find().count() - 1)
    user = Meteor.users.find().fetch()[index];
    Session.set('chatting_with', user);
    return user;
  },
  user: function(){
    var users = Meteor.users.find().fetch();
    var user = users[Session.get('userIndex')];
    return user;
  }
});

var updateUser = function(context){
  users = Meteor.users.find({}).fetch();
  index = (Session.get('userIndex') + 1) % users.length;
  var gifUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=med&time='+(new Date().getTime()).toString();
  Session.set('gifUrl',gifUrl);
  Session.set('userIndex', index);
};

Template.userCard.helpers({
  templateGestures: {
    'panleft img': function (event, templateInstance) {
      console.log('swipe left!');
      updateUser(this);
    },
    'panright img': function (event, templateInstance) {
      console.log('swipe right!');
      updateUser(this);
    }
  },
  gifUrl: function(){
    return Session.get('gifUrl');
  }
});

Template.chat_selection.rendered = function(){
  var gifUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=med&time='+(new Date().getTime()).toString();
  Session.set('gifUrl',gifUrl);
  Session.set('userIndex', 0);
  $('.fa-arrow-circle-right').click(function(){
    console.log("clicked swipe link");
    location.reload();
  });

  $('.chat').click(function(){
    console.log("clicked check link");
    console.log(Session.get('chatting_with'));
    FlowRouter.go('chat')
  });
};

Template.chat_selection.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('users');
  });
});
