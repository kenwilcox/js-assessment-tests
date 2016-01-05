exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction : function(str) {
      return function(arg) {
          return str + ', ' + arg;
      };
  },

  makeClosures : function(arr, fn) {
      // still not sure why you'd want to do this
      var ret = [];
      var func = function(val) {
          return function () { return fn(val); };
      };
      
      for (var i = 0; i < arr.length; i++) {
          ret.push(func(arr[i]));
      }
      return ret;
  },

  partial : function(fn, str1, str2) {
      return function(str3) {
        return fn.call(null, str1, str2, str3);  
      };
  },

  useArguments : function() {
      var sum = 0; // The test didn't help with this / what it was doing
      for (var i = 0; i < arguments.length; i++) {
          sum += arguments[i]
      }
      return sum;
  },

  callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
      
  },

  curryIt : function(fn) {
      
  }
};
