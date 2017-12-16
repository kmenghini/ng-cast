angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<'
  },
  controller: function($scope, youTube) {

    // youTube();
 
  },
  templateUrl: 'src/templates/search.html'
});
