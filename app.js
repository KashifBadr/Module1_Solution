// (function () {
//     'use strict';
//     var x;

//     angular.module('LunchCheck', [])
//     .controller('LunchCheckController', ['$scope',LunchCheckController]);
    
//    // LunchCheckController.$inject = ['scope'];
//      function  LunchCheckController ($scope) {
//       // $scope.name = "Kashif";

//       $scope.feedkashif = function(){
//          x = document.getElementById("lunch-menu").value;
//         // x = document.getElementById("lunch-menu").placeholder;
//         const word = x.split(',');
//            console.log(word);
//            console.log(word.length);
//            if(word.length < 4)
//            {
//              x="Enjoy"
//             // document.getElementById("demo").innerHTML = x;
//             $scope.y = x;
//            }
//            else{
//             x="Too much"
//             // document.getElementById("demo").innerHTML = x;
//             $scope.y = x;
//            }
//       };
      
//     }

// })();

!function(){"use strict";var n;
    angular.module("LunchCheck",[]).controller("LunchCheckController",
    ["$scope",function(o){o.feedkashif=function(){const e=(n=document.getElementById
      ("lunch-menu").value).split(",");console.log(e),console.log(e.length),e.length<4?
      (n="Enjoy",o.y=n):(n="Too much",o.y=n)}}])}();