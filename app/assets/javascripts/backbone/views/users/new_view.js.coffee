BackBone.Views.Users ||= {}

class BackBone.Views.Users.NewView extends Backbone.View
  template: JST["backbone/templates/users/new"]

  initialize: () ->
    # @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (user) =>
    view = new BackBone.Views.Users.UserView({model : user})
    @$("tbody").append(view.render().el)

  render: =>
    # this.$el.html("Greeting Area");
    this.$el.html(this.template());
    return this;

    return this
