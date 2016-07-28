
angular.module('myApp').service('news', function() {
    this.myFunc = function (msg) {
        return "Hey " + msg ;
    }
});