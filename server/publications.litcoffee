# Publications

    Meteor.publish 'chatMessages', ->
      criteria = {}
      options =
        limit: 10
        sort:
          timeCreated: -1

      Chats.find criteria, options
