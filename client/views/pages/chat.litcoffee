    Template.chat.helpers
      messages: -> Chats.find().fetch()
      chatting_with: -> Session.get 'chatting_with'

    Template.chat.onCreated ->
      self = this
      self.autorun ->
        self.subscribe 'chatMessages'
