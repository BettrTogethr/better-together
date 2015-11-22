Message template helpers

    Template.message.helpers
      prettyTime: ->
        (moment Template.currentData().timeCreated).format 'h:mm A'
