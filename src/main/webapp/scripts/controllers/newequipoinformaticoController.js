
angular.module('inventario').controller('NewequipoinformaticoController', function ($scope, $location, locationParser, flash, equipoinformaticoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.equipoinformatico = $scope.equipoinformatico || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The equipoinformatico was created successfully.'});
            $location.path('/equipoinformaticos');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        equipoinformaticoResource.save($scope.equipoinformatico, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/equipoinformaticos");
    };
});