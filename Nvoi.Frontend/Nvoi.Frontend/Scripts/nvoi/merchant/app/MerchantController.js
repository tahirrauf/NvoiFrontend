MerchantApp.controller('MerchantController', function ($scope, $http) {

    

   

    $scope.Merchant = {
        displayName: '',
        registeredName: '',
        email: '',
        phone: '',
        webURL: '',
    };

    //Add Mercahnt
    $scope.save = function () {
        if ($scope.Merchant.displayName != "" && $scope.Merchant.registeredName != "" && $scope.Merchant.email != ""
            && $scope.Merchant.phone != "" && $scope.Merchant.webURL != "") {
            
            console.log($scope.Merchant);
            $scope.Merchant.status = true;
            $scope.Merchant.addressId = 1;
            $scope.logo = "";
            //$scope.dateModified = ;
            ////$scope.dateCreated = ;

            $http({
                method: 'POST',
                url: 'http://localhost:50134/api/merchants',
                data: $scope.Merchant
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.productsData.push(response.data);
                $scope.clear();
                alert("Merchant Added Successfully !!!");
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

});
