angular.module('starter').controller('ListagemController', function ($scope) {

	$scope.listaDeCarros = [
		{nome: 'Palio', preco: 20000},
		{nome: 'Gol', preco: 21000},
		{nome: 'Peugeot', preco: 22000},
	];

	$scope.tituloRodape = 'Alura Car';
});

angular.module('starter').controller('CarroEscolhidoController', function ($stateParams, $scope) {

	$scope.carroEscolhido = angular.fromJson($stateParams.carro);

	$scope.listaDeAcessorios = [
		{nome: 'Freio ABS', preco: 800},
		{nome: 'Ar-condicionado', preco: 1000},
		{nome: 'MP3 player', preco: 500}
	];

	$scope.mudou = function (acessorio, isMarcado) {
		if (isMarcado) {
			$scope.carroEscolhido.preco += acessorio.preco;
		} else {
			$scope.carroEscolhido.preco -= acessorio.preco;
		}
	};
});