// MAIN CONTROLLER
function mainController($scope, $http, bikeService) {
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
	$scope.update = function(todo){
		bikeService.update(todo._id, bike).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		bikeService.delete(bike._id).then(function(res){
			load();
		});
	}
	load();
}
