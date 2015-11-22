# Chat Collection

    @chatroomSchema = new SimpleSchema
      chatroom:
        type: String

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
      createchatroom: (doc) ->
        doc.owner = Meteor.user().username
        Chatrooms.insert doc
