(function(window) {
    var goodbye = new Object();

    goodbye.speak = function(name) {
      console.log("Good Bye " + name);
    }
    window.goodbye = goodbye;
})(window);