const cep = document.getElementById('cep');

const showData = (result) => {
    for(elemento in result){
        if (document.getElementById(`${elemento}`)){
            document.getElementById(`${elemento}`).value = result[elemento]
        }
    }
}


cep.addEventListener('blur', function(){
    let cepValor = cep.value;

    const options ={
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${cepValor}/json/`, options)
        .then(response => { response.json()
            .then(data => showData(data))
        })
        .catch( e => window.alert('Não foi possível encontrar os valores'))
    
})