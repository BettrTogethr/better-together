    Template.chatrooms.helpers
      chatrooms: -> Chatrooms.find({owner: Meteor.user().username}).fetch()

    Template.chat.onCreated ->
      self = this
      self.autorun ->
        self.subscribe 'chatrooms'
