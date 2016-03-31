// Bike Controller
function bikeController($scope, $http, bikeService) {
	$scope.title = "Bike";
	
	function load(){
		bikeService.get().then(function(res){
			$scope.bikes = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		bikeService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(bike){
		bikeService.update(bike._id, bike).then(function(res){
			load();
		});
	}
	$scope.delete = function(bike){
		bikeService.delete(bike._id).then(function(res){
			load();
		});
	}
	load();
}
