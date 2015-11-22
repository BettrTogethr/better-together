# Chat Collection

    @ChatroomSchema = new SimpleSchema
      chatName:
        type: String
      members:
        type: [String]

    @ChatroomsSchema = new SimpleSchema
      chatName:
        type: String
      owner:
        type: String
      members:
        type: [String]

    @Chatrooms = new Mongo.Collection 'chatrooms'
    Chatrooms.attachSchema ChatroomsSchema


    Chatrooms.allow
      insert: (userId, doc) -> userId?
      update: (userId, doc, fields, modifier) -> userId?
      remove: (userId, doc) -> userId?

    Meteor.methods
      createChatroom: (doc) ->
        console.log doc
        doc.owner = Meteor.user().username
        Chatrooms.insert doc
