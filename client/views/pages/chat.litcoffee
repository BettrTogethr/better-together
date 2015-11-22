    Template.chat.helpers

      messages: ->
        messages = Chats.find().fetch()
        console.log messages[0]
        return messages

      chatting_with: -> Session.get 'chatting_with'

    Template.chat.onCreated ->
      self = this
      self.autorun ->
        self.subscribe 'chatMessages'
