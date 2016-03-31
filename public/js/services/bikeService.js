// BIKE SERVICE
function bikeService($http) {
    return {
        get : function() {
            return $http.get('/bike');
        },
        update : function(id, data){
            return $http.put('/bike/' + id, data);
        },
        create : function(data) {
            return $http.post('/bike', data);
        },
        delete : function(id) {
            return $http.delete('/bike/' + id);
        }
    }
};
