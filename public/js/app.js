function config($routeProvider) {
	$routeProvider
		.when('/my-profile', {
			templateUrl: 'views/my-profile.html',
			controller: 'myprofileController'
		})
		.when('/trek', {
			templateUrl: 'views/trek.html',
			controller: 'trekController'
		})
		.when('/bike', {
			templateUrl: 'views/bike.html',
			controller: 'bikeController'
		})
		.otherwise({
			redirectTo: '/my-profile'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
		// .controller('trekController', trekController)
		// .controller('bikeController', bikeController)
		.controller('myprofileController', myprofileController)
		// .service('trekService', trekService)
		// .service('bikeService', bikeService)
		.service('myprofileService', myprofileService)
    /*.factory('', )*/
    .run(run);
