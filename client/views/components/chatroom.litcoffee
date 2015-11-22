helpers for the chatroom template

    Template.chatroom.helpers
      showMembers: ->
        members = Template.currentData().members
        membersl = members?.length
        if membersl > 1
          chatMembers = 'There are ' + membersl + ' members in room'
        else
          chatMembers = "You are chatting with " + members
        return chatMembers.toString()
