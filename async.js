exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      var pro = $.Deferred();
      setTimeout(function() {
          pro.resolve(value);
      }, 1);
      return pro.promise();
  },

  manipulateRemoteData : function(url) {
      var pro = $.Deferred();
      
      $.ajax(url).then(function(resp) {
         var value = $.map(resp.people, function(person) {
             return person.name;
         });
         pro.resolve(value.sort());
      });
      return pro.promise();
  }
};
