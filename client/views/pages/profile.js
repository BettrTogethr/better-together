Template.profile.events({
  'submit form': function(){
    event.preventDefault();
    var name = event.target.name.value
    var story = event.target.story.value
    console.log("submitted: ");
    console.log(name);
    console.log(story);

    return false;
    
  }
});
