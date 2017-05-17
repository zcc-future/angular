var myModule=angular.module('myModule',[]);
	myModule.controller('helloAngular',['$scope',
		function HelloAngular($scope){
		$scope.greeting={
			text:'hello'
		};
	}

	])

