function meteoService($http) {
    return {
        get : function(city) {
            return $http.get("api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=295594b2f0f74cb1eafdf26d818de19b"+"&units=metric");


    }
};
}
