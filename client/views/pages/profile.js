Template.profile.events({
  'submit form': function(){
    event.preventDefault();
    var name = event.target.name.value
    var story = event.target.story.value
    console.log("submitted: ");
    console.log(name);
    console.log(story);

    console.log(Meteor.user());

    Meteor.users.update(
      { _id: Meteor.userId() },
      {
        $set: {
          'profile.name': name,
          'profile.story': story
        }
      }
    );

    event.target.name.value = "Your story";
    event.target.story.value = "Your name";

    FlowRouter.go('chat_selection');
  }
});
