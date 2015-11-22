# Chat Collection

    @MessageSchema = new SimpleSchema
      message:
        type: String


    @ChatSchema = new SimpleSchema
      username:
        type: String
        optional: yes
      message:
        type: String
      timeCreated:
        type: Date
        autoValue: ->
          if this.isInsert
            return moment.utc().toDate()
          else
            this.unset()

    @Chats = new Mongo.Collection 'chats'
    Chats.attachSchema ChatSchema

    Chats.allow
      insert: (userId, doc) -> userId?
      update: (userId, doc, fields, modifier) -> userId?
      remove: (userId, doc) -> userId?

    Meteor.methods
      createMessage: (doc) ->
        doc.username = Meteor.user().username
        console.log doc
        Chats.insert doc
      removeAllChats: () ->
        return if not Meteor.user()?
        Chats.remove {}
