# FlowRouter

## Helpers

    userAccountsRoutes = ['signIn', 'signUp', 'verifyEmail', 'sendAgain', 'changePwd', 'enrollAccount', 'forgotPwd', 'resetPassword']

    renderMainLayoutWithContent = (content) -> -> BlazeLayout.render 'mainLayout', content: content

### Create Flow Route

Creates a basic flow route, a common pattern.
`routeName` is all that is required

    createFlowRoute = (routeName, options={}) ->
      path = options.path or "/#{routeName}"
      templateName = options.templateName or routeName
      renderLayoutWithContent = options.renderLayoutFunction or renderMainLayoutWithContent
      FlowRouter.route path,
        name: routeName
        action: renderLayoutWithContent templateName

## Routes

    createFlowRoute 'home', path: '/'
    createFlowRoute 'about'
    createFlowRoute 'assessment', path: '/assessment'
    createFlowRoute 'profile', path: '/profile'
    createFlowRoute 'chat_selection', path: '/chat_selection'
    createFlowRoute 'chat'
    createFlowRoute 'desktopChatHolder'

## Triggers

### requireLoggedIn

    requireLoggedIn = (context, redirect) ->
      if not (Meteor.user()? or Meteor.loggingIn())
        redirect 'signIn'

    FlowRouter.triggers.enter [requireLoggedIn], except: _.union ['home', 'assessment', 'profile', 'chat_selection', 'chat'], userAccountsRoutes
