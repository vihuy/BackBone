var myRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'home': 'index',
      'users': 'heo',
      'new': 'new_user',
      '/contact': 'index',
      'contact/:id': 'show',

    },
    index: function(){
        this.view = new BackBone.Views.Users.IndexView();
      return $("#users").html(this.view.render().el);
    },
    heo: function(){
      console.log('heo');
    },
    new_user: function(){
      console.log("New");
      this.view = new BackBone.Views.Users.NewView();
      return $("#users").html(this.view.render().el);

    },
    show: function(){
       this.view = new BackBone.Views.Users.ShowView();
      return $("#users").html(this.view.render().el);
    },
  });



