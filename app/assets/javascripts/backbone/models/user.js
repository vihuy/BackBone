var extend = function(child, parent)
{
  for (var key in parent)
    {
      if (hasProp.call(parent, key)) child[key] = parent[key];
    }
    function ctor()
    {
      this.constructor = child;

    }
    ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child;
},
  hasProp = {}.hasOwnProperty;

BackBone.Models.User = (function(superClass) {

  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.paramRoot = 'user';

  return User;

})(Backbone.Model);

BackBone.Collections.UsersCollection = (function(superClass) {
  extend(UsersCollection, superClass);

  function UsersCollection() {
    return UsersCollection.__super__.constructor.apply(this, arguments);
  }

  UsersCollection.prototype.model = BackBone.Models.User;

  UsersCollection.prototype.url = '/users';

  return UsersCollection;

})(Backbone.Collection);
