Template.tinder.helpers({
  randomUser: function(){
    console.log("randomUser");
    return Meteor.users.findOne();
  }
});
