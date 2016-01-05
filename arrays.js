exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {      
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] === item) {
              return i;
          }
      }
      return -1;
  },

  sum : function(arr) {      
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
          sum += arr[i]
      }
      return sum;
  },

  remove : function(arr, item) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] !== item) {
              ret.push(arr[i]);
          }          
      }
      return ret;
  },

  removeWithoutCopy : function(arr, item) {
      // this will change
      var len = arr.length;
      for (var i = 0; i < len; i++) {
          if (arr[i] === item) {
              arr.splice(i, 1);
              i = i -1;
              len = len -1;
          }
      }
      return arr;
  },

  append : function(arr, item) {
      arr.splice(arr.length, 0, item);
      return arr;
  },

  truncate : function(arr) {
      arr.splice(arr.length -1, 1);
      return arr;
  },

  prepend : function(arr, item) {
      arr.splice(0, 0, item);
      return arr;
  },

  curtail : function(arr) {
      arr.splice(0, 1);
      return arr;
  },

  concat : function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
      var count = 0;
      for(var i = 0; i < arr.length; i++) {
          if (arr[i] === item) count++;
      }
      return count;
  },

  duplicates : function(arr) {
      var exists = {};
      var dupes = [];
      
      for (var i = 0; i < arr.length; i++) {
          exists[arr[i]] = exists[arr[i]] ? exists[arr[i]] + 1: 1; 
      }
      console.log(exists);
      for (var item in exists) {
          if (exists.hasOwnProperty && exists[item] > 1) {
              // For some reason after the push they are strings...
              if (typeof exists[item] === "number") {
                dupes.push(Number(item));
              } else {
                dupes.push(item);
              }
          }
      }
      return dupes;
  },

  square : function(arr) {
      var ret = [];
      for(var i = 0; i < arr.length; i++) {
          if (typeof arr[i] === "number") {
              ret.push(arr[i] * arr[i]);
          }
      }
      return ret;
  },

  findAllOccurrences : function(arr, target) {
      var ret = [];
      for(var i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
              ret.push(i);
          }
      }
      return ret;
  }
};
