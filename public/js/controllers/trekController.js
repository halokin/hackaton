


// INVITES CONTROLLER
function trekController($scope, $http, trekService, NgMap) {


    $scope.title = "Trek List";

    NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

    function load() {
        trekService.get().then(function (res) {
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
