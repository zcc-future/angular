var app=angular.module('myModule',[]);
	app.controller('helloAngular',['$scope',function($scope){
		$scope.colors=["purple","green","blue","yellow","brown","red","orange"];
		$scope.name='';
		$scope.date={
			text:"hello"
		};
	
	}])

