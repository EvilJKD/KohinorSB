

const apiOptions = {
    server: 'http://localhost:3000' // servidor local - desarrollo
};


//Planes
let propiedadesComprar = [];
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

//Funciones Planes
const guardarNumUsuario = () => {
    let inputNumUsuarios = document.querySelector('#numeroUsuarios');
    numeroUsuarios = inputNumUsuarios.value;
    sessionStorage.setItem('numUsuarios', parseInt(inputNumUsuarios.value,10));
}

const guardarModulos = () => {
    let checksModulos = document.querySelectorAll('.seleccionModulo');
    checksModulos.forEach( (modulo) => {
        if(modulo.checked==true){
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
}

const crearFactura = () => {
    const path = `/api/factura`;

    axios.post(`${apiOptions.server}${path}`, {
            telefono: sessionStorage.getItem('telefono'),
            direccion: sessionStorage.getItem('direccion'),
            codPostal: sessionStorage.getItem('codPostal'),
            ciudad: sessionStorage.getItem('ciudad'), 
            provincia: sessionStorage.getItem('provincia'),
            pais: sessionStorage.getItem('pais'), 
            listaModulos: JSON.parse(sessionStorage.getItem('propiedadComprar')),
            numUsuarios: sessionStorage.getItem('numUsuarios')
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
    postData(`${apiOptions.server}${path}`,  {
        telefono: sessionStorage.getItem('telefono'),
        direccion: sessionStorage.getItem('direccion'),
        codPostal: sessionStorage.getItem('codPostal'),
        ciudad: sessionStorage.getItem('ciudad'), 
        provincia: sessionStorage.getItem('provincia'),
        pais: sessionStorage.getItem('pais'), 
        listaModulos: JSON.parse(sessionStorage.getItem('comprarModulos')),
        numUsuarios: sessionStorage.getItem('numUsuarios')
    }).then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        sessionStorage.clear();
        window.redirect();
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
  
