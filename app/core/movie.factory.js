(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieFinder', MovieFinder);

    MovieFinder.$inject = ['$http'];

    /* @ngInject */
    function MovieFinder($http) {
        var vm = this;
        vm.callMovieFinder = callMovieFinder;
        vm.results = [];


        function callMovieFinder(title) {
            $http
                .get('http://www.omdbapi.com/?s=' + title)
                .then(function(response) {
                    vm.movies = response.data.Search;
                    // vm.results.push({title: vm.movieinfo.title})



                })
                .catch(function(error) {


                });
        }
    }
})();
