// BIKE SERVICE
function bikeService($http) {
    return {
        get : function() {
            return $http.get('/bikes');
        },
        update : function(id, data){
            return $http.put('/bikes/' + id, data);
        },
        create : function(data) {
            return $http.post('/bikes', data);
        },
        delete : function(id) {
            return $http.delete('/bikes/' + id);
        }
    }
};
