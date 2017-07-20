


angular.module("feira-app").controller("loginController", function ($scope,$http,$state){
    $scope.emailLogado = "";

    $scope.cadastrar = function(email, senha,nome){

        var url = "/cadastro";

        console.log(nome);
        var data = {

            "email": email,
            "senha": senha,
            "nome":nome
        };


        $http.post(url, data).then(function (response) {
        	
            alert("Usuário cadastrado com sucesso!");

        }, function (response) {


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


            if(response.data){

                $scope.emailLogado = email;

                $state.go("home");
            }else{
                alert("Dados inválidos ou usuário não cadastrado");
            }



        }, function (response) {

            console.log("deu errado");
            $scope.postResultMessage = "Fail!";
        });
    }

});