    Template.chatrooms.helpers
      chatrooms: ->
        chatrooms = Chatrooms.find().fetch()
        console.log chatrooms[0]
        return chatrooms

    Template.chatrooms.onCreated ->
      self = this
      self.autorun ->
        self.subscribe 'chatrooms'
