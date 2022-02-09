
(function(window) {
    var hello = new Object();

    hello.speak = function(name) {
      console.log("Hello " + name);
    }
    window.hello = hello;
})(window);