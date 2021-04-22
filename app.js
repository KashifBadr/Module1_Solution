(function () {
    'use strict';
    var x;

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
   // LunchCheckController.$inject = ['scope'];
     function  LunchCheckController ($scope) {
      $scope.name = "Kashif";

      $scope.feedkashif = function(){
        // x = document.getElementById("lunch-menu").value;
        x = document.getElementById("lunch-menu").placeholder;
        const word = x.split(',');
           console.log(word);
           console.log(word.length);
           if(word.length < 4)
           {
             x="Enjoy"
            document.getElementById("demo").innerHTML = x;
           }
           else{
            x="Too much"
            document.getElementById("demo").innerHTML = x;
           }
      };
      
    }

})();
    