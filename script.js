console.log("ejecutando script...")
// contactForm = document.getElementById("contactForm");
// console.log(contactForm);

function validateForm() {
    let contactName = document.getElementById("name").value;
    let contactEmail = document.getElementById("email").value;
    let contactTel = document.getElementById("tel").value;
    // let phoneNumberRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    let contactCountry = document.getElementById("country").value;
    let contactMsg = document.getElementById("msg").value;
    
    // Validacion del nombre: que no dejen el campo vacio
    if(contactName==""){
        alert("Nombre vacio. Por favor complete el campo antes de enviar el formulario.");
        return false;
    }
    // Validacion del email: que no dejen el campo vacio
    if(contactEmail==""){
        alert("Email vacio. Por favor complete el campo antes de enviar el formulario.");
        return false;
    }
    // Validacion del email: que en el string este presente el @ y el .
    if(!String(contactEmail).includes("@") || !String(contactEmail).includes(".")){
        alert("Email invalido. Por favor complete el campo con un email valido antes de enviar el formulario.");
        return false;
    }
    // Validacion del campo telefono: que no este vacio
    if(contactTel==""){
        alert("Teléfono vacio. Por favor complete el campo antes de enviar el formulario.");
        return false;
    }
    // Validacion con regex del formato de numero telefonico. 
    // Se saco de un ejemplo y no esta funcionando como me gustaria y no me da el tiempo para investigarlo mas a fondo asi que prefiero dejarlo comentado por ahora.
    /*if(phoneNumberRegex.test(contactTel)){
        alert("Teléfono invalido. Por favor complete con un numero de telefono valido antes de enviar el formulario.");
        return false;
    }*/
    // Validacion del campo mensaje: que no este vacio
    if(contactMsg==""){
        alert("Mensaje vacio. Por favor complete el campo antes de enviar el formulario.");
        return false;
    }
    // Impresiones por consola para debug
    console.log("Nombre: " + contactName);
    console.log("Email: " + contactEmail);
    console.log("Telefono: " + contactTel);
    console.log("Pais: " + contactCountry);
    console.log("Mensaje: " + contactMsg);

    //Finalmente, si llegó hasta aqui, se envia el form.
    alert("Muchas gracias por su mensaje, en breve nos pondremos en contacto con usted.")
    document.contact-form.submit()
    
    return true;
  }

// let url = 'https://jsonplaceholder.typicode.com/albums' //variable donde hacemos referencia al origen de los datos
// let url = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=15d874b6180f351475e038f406300468'
let url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.09272368943704&lon=-69.220885&appid=b8641a40995a53dc166e6c5b0cd66e5d'
fetch(url) //solicitud a la url
    .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json). Extraemos el contenido JSON desde la respuesta.
    .then(data => {
        console.log(data) //mostramos el objeto data por consola
        console.log("Temperatura actual: " + Math.round((data.main.temp-273.15)*10)/10 + "º") //mostramos el objeto data por consola
        // document.getElementById("datos").innerHTML = `ID: ${data[11].id} <br> USER ID: ${data[11].userId} <br> TITLE: ${data[11].title}` //Mostramos datos del array
    })
    .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch