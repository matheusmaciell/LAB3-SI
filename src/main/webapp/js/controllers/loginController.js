

var login = angular.module('login', []);

angular.module("login").controller("loginController", function ($scope,$http){


    $scope.cadastrar = function(email, senha){

        var url = "/cadastro";


        var data = {

            "email": email,
            "senha": senha
        };


        $http.post(url, data).then(function (response) {


            console.log(response);

        }, function (response) {

            console.log(response);
            $scope.postResultMessage = "Fail!";
        });
    }



    $scope.logar = function(email,senha){
        var url = "/logar";


        var data = {

            email: email,
            senha: senha
        };

        $http.post(url, data).then(function (response) {


            console.log(response);

        }, function (response) {

            console.log("deu errado");
            $scope.postResultMessage = "Fail!";
        });
    }

});