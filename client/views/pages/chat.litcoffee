    Template.chat.helpers
      messages: ->
        messages = Chats.find().fetch()
        console.log messages[0]
        return messages

    Template.chat.onCreated ->
      self = this
      self.autorun ->
        self.subscribe 'chatMessages'
