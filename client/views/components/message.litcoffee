Message template helpers

    Template.message.helpers
      prettyTime: ->
        (moment Template.currentData().timeCreated).format 'h:mm A'
      otherUsername: ->
        Session.get('chatting_with').username
