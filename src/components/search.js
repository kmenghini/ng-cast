angular.module('video-player')

.component('search', {
  controller: function($scope) {
    this.result = function() {
      //searchText
    };
  },
  templateUrl: 'src/templates/search.html'
});
