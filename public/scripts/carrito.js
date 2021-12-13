var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];



const apiOptions = {
    server: baseUrl.substring(0, baseUrl.length - 1)
};

//Planes
let propiedadesComprar = [];
let lstModulos;
let numeroUsuarios;

//Factura
let nombre;
let apellido;
let email;
let telefono;
let direccion;
let codPostal;
let ciudad;
let pais;
let provincia;
let usuario;

//Funciones Planes
const guardarNumUsuario = () => {
    let inputNumUsuarios = document.querySelector('#numeroUsuarios');
    numeroUsuarios = inputNumUsuarios.value;
    sessionStorage.setItem('numUsuarios', parseInt(inputNumUsuarios.value, 10));
}

const guardarModulos = () => {
    let checksModulos = document.querySelectorAll('.seleccionModulo');
    checksModulos.forEach((modulo) => {
        if (modulo.checked == true) {
            propiedadesComprar.push(modulo.id);
        }
    });
    sessionStorage.setItem('comprarModulos', JSON.stringify(propiedadesComprar));
    
}

const guardarVistaPlanes = () => {
    console.log("Entro");
    guardarNumUsuario();
    guardarModulos();
};

lstModulos = JSON.parse(sessionStorage.getItem('comprarModulos'));
const modulosFactura = () => {
    for (let m=0; m<lstModulos.length; m++) {
        let modulo = JSON.parse(lstModulos[m]);
        document.getElementById('cardModulo').innerHTML += `<div class="card col-md-13" >
                                                                <div class="row">
                                                                    <div class="col-md-5">
                                                                        <img src="Icon/Menu125/${modulo.img}" class="img-thumbnail" width="120px" height="120px">
                                                                    </div>
                                                                    <div class="col-md-4 d-flex justify-content-center align-items-center">
                                                                        <div class="card-body">
                                                                        <h5 class="card-title">${modulo.nombre}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-2 d-flex justify-content-center align-items-center">
                                                                        <p class="card-text">${modulo.precio} USD</p>
                                                                    </div>
                                                                </div>
                                                            </div>`;
    };
};
//Funciones Factura

const guardarInfoPersona = () => {
    let informacion = document.querySelectorAll(".infoPersona");

    sessionStorage.setItem('nombre', informacion[0].value);
    sessionStorage.setItem('apellido', informacion[1].value);
    sessionStorage.setItem('email', informacion[2].value);
    sessionStorage.setItem('telefono', informacion[3].value);
    sessionStorage.setItem('direccion', informacion[4].value);
    sessionStorage.setItem('codPostal', informacion[5].value);
    sessionStorage.setItem('ciudad', informacion[6].value);
    sessionStorage.setItem('pais', informacion[7].value);
    sessionStorage.setItem('provincia', informacion[8].value);
    sessionStorage.setItem('usuario', informacion[9].value);
}

const crearFactura = () => {
    const path = `/api/factura`;
    axios.post(`${apiOptions.server}${path}`, {
            nombre: sessionStorage.getItem('nombre'),
            apellido: sessionStorage.getItem('apellido'),
            email: sessionStorage.getItem('email'),
            telefono: sessionStorage.getItem('telefono'),
            direccion: sessionStorage.getItem('direccion'),
            codPostal: sessionStorage.getItem('codPostal'),
            ciudad: sessionStorage.getItem('ciudad'),
            provincia: sessionStorage.getItem('provincia'),
            pais: sessionStorage.getItem('pais'),
            listaModulos: JSON.parse(sessionStorage.getItem('propiedadComprar')),
            numUsuarios: sessionStorage.getItem('numUsuarios'),
            usuario: req.user._id
        }) //Primer parametro es el url del request y el segundo es el body con los parametros
        .then((response) => { //Si el request es exitoso
            console.log("AXIOS REQUEST --- Modulo EDITADO");
            console.log(req.body);

        })
        .catch((error) => { //Si es que hay algun error en el request
            console.log('AXIOS - statusCode: ', error.status);
            console.log('AXIOS - Error: ', error);
            console.log('AXIOS - Req.Body', req.body);
        })
}

const crearFactura2 = () => {
    const path = `/api/factura`;
    console.log(`${apiOptions.server}${path}`);
    postData(`${apiOptions.server}${path}`, {
        nombre: sessionStorage.getItem('nombre'),
        apellido: sessionStorage.getItem('apellido'),
        email: sessionStorage.getItem('email'),
        telefono: sessionStorage.getItem('telefono'),
        direccion: sessionStorage.getItem('direccion'),
        codPostal: sessionStorage.getItem('codPostal'),
        ciudad: sessionStorage.getItem('ciudad'),
        provincia: sessionStorage.getItem('provincia'),
        pais: sessionStorage.getItem('pais'),
        listaModulos: JSON.parse(sessionStorage.getItem('comprarModulos')).map(modulo => JSON.parse(modulo).id),
        numUsuarios: sessionStorage.getItem('numUsuarios'),
        usuario: sessionStorage.getItem('usuario')
    }).then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        sessionStorage.clear();
    });
}

async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}