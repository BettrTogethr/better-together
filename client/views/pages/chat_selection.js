Template.chat_selection.helpers({
  randomUser: function(){
    console.log("randomUser");
    index = _.random(0,Meteor.users.find().count() - 1)
    user = Meteor.users.find().fetch()[index];
    Session.set('chatting_with', user);
    return user;
  }
});

Template.chat_selection.rendered = function(){
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

