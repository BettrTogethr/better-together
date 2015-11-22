Template.chat_selection.helpers({
  randomUser: function(){
    console.log("randomUser");
    return Meteor.users.findOne();
  }
});

Template.chat_selection.rendered = function(){
  $('.fa-arrow-circle-right').click(function(){
    console.log("clicked swipe link");
    location.reload();
  });

  $('.fa-check-circle').click(function(){
    console.log("clicked check link");
    FlowRouter.go('chat')
  });
};

