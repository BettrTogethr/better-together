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

var updateUser = function(context, delta){
  users = Meteor.users.find({}).fetch();
  index = (Session.get('userIndex') + delta) % users.length;
  if (index < 0) {
    index = users.length - 1;
  }
  if (index % 2 == 0) {
    Session.set('gifUrl', '/boy_avatar.png');
  }
  else {
    Session.set('gifUrl', 'girl_avatar.png');
  }
  Session.set('userIndex', index);
};

Template.userCard.helpers({
  templateGestures: {
    'swipeleft img': function (event, templateInstance) {
      console.log('swipe left!');
      updateUser(this, -1);
    },
    'swiperight img': function (event, templateInstance) {
      console.log('swipe right!');
      updateUser(this, 1);
    }
  },
  gifUrl: function(){
    return Session.get('gifUrl');
  }
});

Template.chat_selection.rendered = function(){
  var gifUrl = '/boy_avatar.png';
  Session.set('gifUrl', gifUrl);
  Session.set('userIndex', 0);
  $('.fa-arrow-circle-right').click(function(){
    console.log("clicked swipe link");
    location.reload();
  });

  $('.chat').click(function(e){
    e.preventDefault();
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

Template.userCard.onCreated(function(){
  var self = this;
  console.log(Template.currentData());
  self.autorun(function(){
    Session.set('chatting_with', Meteor.users.find({username: Template.currentData().username}).fetch()[0]);
    console.log('autorun ran');
  });
  console.log('session set');
});

