//Variables
const token = '8|GPTSaip8DsorIHpIS2rxzJgEbW76U2GdjWPvyGlj';

//Event Listeners
document.querySelector('#pais').addEventListener('change', (e) => {
    searchStates(e.target.value);
});

//On Document Ready
$(document).ready(() => {
    getCountries();
})
 
//Funciones
//Recuperar Paises
const getCountries = () => {
    $.ajax({
        url: 'https://restfulcountries.com/api/v1/countries',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        },
        data: {},
        success: function (response) {
            var arregloNombresPaises = []
            response.data.forEach(element => {
                arregloNombresPaises.push(element.name);
            });

            anadirPaises(arregloNombresPaises);
        },
        error: function () { },
    });
}
//Recuperar estados
const searchStates = (pais) => {
    $.ajax({
        url: `https://restfulcountries.com/api/v1/countries/${pais}/states`,
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        },
        data: {},
        success: function (response) {
            var arregloNombresEstados = []
            response.data.forEach(element => {
                arregloNombresEstados.push(element.name);
            });
    
            anadirEstados(arregloNombresEstados);
        },
        error: function () { },
    });
    
}

const anadirPaises = (paises) => {
    let selectPais = document.querySelector('#pais');

    for (let pais in paises) {
        var option = document.createElement('option');
        option.value = paises[pais];
        option.label = paises[pais];

        selectPais.appendChild(option);
    }
}

const anadirEstados = (estados) => {
    let selectEstado = document.querySelector('#estado');

    for (let estado in estados) {
        var option = document.createElement('option');
        option.value = estados[estado];
        option.label = estados[estado];

        selectEstado.appendChild(option);
    }
}