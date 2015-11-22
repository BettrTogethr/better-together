Template.tinder.helpers({
  randomUser: function(){
    console.log("randomUser");
    return Meteor.users.findOne();
  },
  'swipe click': function(){
    console.log("clicked swipe link");
  }
});
