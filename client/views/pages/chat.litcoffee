    Template.chat.helpers
      messages: -> Chats.find().fetch()

    Template.chat.onCreated ->
      self = this
      self.autorun ->
        self.subscribe 'chatMessages'
