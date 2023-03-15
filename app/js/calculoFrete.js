const botaoForm = document.querySelector('#submit-form');

botaoForm.addEventListener('click', (event)=>{
    event.preventDefault();
});


const preencherEndereco = (endereco) => {
    document.querySelector('#logradouro').innerHTML = endereco.logradouro + ',';
    document.querySelector('#bairro').innerHTML = endereco.bairro + ',';
    document.querySelector('#cidade').innerHTML = endereco.localidade + '-';
    document.querySelector('#estado').innerHTML = endereco.uf;

}

const pesquisarCep = async() => {
    const cep = document.querySelector('#cep').value; 
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherEndereco (endereco);
}

const inputCep = document.getElementById('cep');
inputCep.addEventListener('focusout',pesquisarCep);

