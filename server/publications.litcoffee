# Publications

    Meteor.publish 'chatMessages', ->
      criteria = {}
      options =
        limit: 10
        sort:
          timeCreated: -1

      Chats.find criteria, options

    Meteor.publish 'users', ->
      criteria = {}
      options =
        fields:
          username: 1
      Meteor.users.find criteria, options

    Meteor.publish 'chatrooms', ->
      criteria = {}
      options =
        limit: 10
        sort:
          timeCreated: -1

      Chatrooms.find criteria, options
