angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<',
    searchObj: '<',
    videos: '<'
  },
  templateUrl: 'src/templates/search.html'
});
