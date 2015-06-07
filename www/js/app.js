angular.module( 'ngPhonetest', [
	//'restangular'
])

.controller( 'PhonetestCtrl', function AppCtrl ( $scope /*, Restangular */) {
	
	console.log('controller start');
	
	$scope.newItem = {}
	$scope.newItem.lng = 0;
	$scope.newItem.lat = 0;
	$scope.newItem.img = [];
	

    $scope.getList = function() {
		console.log('getlist');
		var rest = Restangular.oneUrl("test",'http://test47.zendos.org'+"/test");
		//var rest = Restangular.oneUrl("skill",'https://calm-cliffs-1325.herokuapp.com'+"/skill");
		rest.get().then( function(data){
			console.log("DATA=",data);
			data = Restangular.stripRestangular(data);
			$scope.itemList = data;
		});
    };

	$scope.addItem = function(){
		newItem = {title:'xxx',lat:48, lng:35};
		console.log('additem');
		var rest = Restangular.oneUrl("test",'http://test47.zendos.org'+"/test");
			rest.customPOST( newItem, "", {}, {}).then(function (data) {
				console.log('added');
				console.log(data);
			});			
	};
})

;
