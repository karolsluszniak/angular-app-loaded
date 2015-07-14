(function() {'use strict';
  angular.module('cloudless.app-loaded', []).directive('ngApp', function() {
    return {
      restrict: 'A',
      link: function (_, element) {
        element.addClass('ng-app-loaded');
      }
    };
  });
})();
