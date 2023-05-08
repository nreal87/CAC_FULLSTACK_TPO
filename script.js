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
    document.fvalida.submit()
    
    return true;
  }


  window.onload = Init;

  

