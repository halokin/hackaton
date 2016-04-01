<<<<<<< HEAD
// trek CONTROLLER
<<<<<<< HEAD
function trekController($scope, $http, trekService) {
=======
// function mainController($scope, $http, todoService) {
// 	$scope.title = "Todo List";

// 	function load(){
// 		todoService.get().then(function(res){
// 			$scope.todos = res.data;
// 		});
// 	}
// 	$scope.add = function(){
// 		var data = {};
// 		data.description = $scope.description;
// 		todoService.create(data).then(function(res){
// 			load();
// 		});
// 		$scope.description = "";
// 	}
// 	$scope.update = function(todo){
// 		todoService.update(todo._id, todo).then(function(res){
// 			load();
// 		});
// 	}
// 	$scope.delete = function(todo){
// 		todoService.delete(todo._id).then(function(res){
// 			load();
// 		});
// 	}
// 	load();
// }


// INVITES CONTROLLER
function trekController($scope, $http, trekService, meteoService) {

    $scope.cities=['Paris', 'London','Barcelona'];
    $scope.citiesres=[];
    $scope.citii= function(){
        for( var i = 0; i < $scope.cities.length; i++){
        meteoService.get($scope.cities[i]).then(function(res){
          $scope.citiesres.push(res.data);
>>>>>>> 5289ac8d198d12564d898fd7160b3ca88e9321f0
=======



// INVITES CONTROLLER
function trekController($scope, $http, trekService, NgMap) {
>>>>>>> edbcd059523abb11653f57ee05f5b6124dc7482e


        });
      }
  };

    $scope.title = "Trek List";

    NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

      var kmlUrl = 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml';
  
  $scope.kmlLayerOptions = {
    url: kmlUrl,
  };
  $scope.map = {
    //Chicago
    center: {
      latitude: 41.875696,
      longitude: -87.624207
    },
    zoom:8,
    showWeather: false,
    showTraffic: false,
    showCloud: false,
    showKml: true,
  };


    function load() {
        trekService.get().success(function (res) {
            $scope.treks = res.data;
        });

    }

    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.distance = $scope.distance;
        data.time = $scope.time;
        data.badge = $scope.badge;
        data.image = $scope.imageFile;
        trekService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.distance = "";
        $scope.time = "";
        $scope.badge = "";
        $scope.imageFile = "";
        location.reload();
    }
    $scope.update = function (trek) {
        trekService.update(trek._id, treks).then(function (res) {});
    }
    $scope.delete = function (trek) {
        trekService.delete(trek._id).then(function (res) {
            load();
        });
    }
    $scope.previewFile = function () {
        var preview = document.querySelector('#preview');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
            $scope.imageFile = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    $scope.content = '';

    load();
}
