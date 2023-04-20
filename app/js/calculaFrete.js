//Desenvolvimento pausado...

function ConsultarValor() {
	const CampoValorFrete = document.querySelector('#valor-frete')
	const frete = require('./correios-data/CalcPrecoPrazo.xml');
	
	frete()
		.cepOrigem('13480-010')
		.peso(1)
		.formato(frete.formatos.caixaPacote)
		.comprimento(16)
		.altura(28)
		.largura(21)
		.diametro(4)
		.valorDeclarado(50)
		.servico(frete.servicos.sedex)
		.preco('66077110', function (err, results){
		
		const valorFrete = results[0].valor;
		CampoValorFrete.innerHTML = valorFrete;
		
	});

}

botaoForm.addEventListener('click',ConsultarValor);
