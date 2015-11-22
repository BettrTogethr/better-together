Template.tinder.helpers({
  randomUser: function(){
    console.log("randomUser");
    return Meteor.users.findOne();
  },
  'button .swipe': function(){
    console.log("clicked swipe link");
  }
});

Template.tinder.rendered = function(){
  $('.swipe').click(function(){
    console.log("clicked swipe link");
    //FlowRouter.go('tinder')
    location.reload();
  });
};

