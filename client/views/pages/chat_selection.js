Template.chat_selection.helpers({
  randomUser: function(){
    console.log("randomUser");
    user = Meteor.users.findOne();
    Session.set('chatting_with', user);
    return user;
  }
});

Template.chat_selection.rendered = function(){
  $('.fa-arrow-circle-right').click(function(){
    console.log("clicked swipe link");
    location.reload();
  });

  $('.fa-check-circle').click(function(){
    console.log("clicked check link");
    console.log(Session.get('chatting_with'));
    FlowRouter.go('chat')
  });
};

