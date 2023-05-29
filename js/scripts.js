window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// Easter Egg
let previousTitle = document.title;

window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = '¡ V u e l v e !';
});

window.addEventListener('focus', () => {
    document.title = previousTitle;
});

// Toogler Dark-Light Mode
let element = document.body;

function anochecer(){
    element.classList.toggle('dark-theme');
};

function amanecer(){
    element.classList.toggle('light-theme');
};

var hora = new Date();
var horaActual = [`${hora.getHours()}:${hora.getMinutes()}`];
console.log(horaActual);
// Hacer que entre las 21:00h - 06:00h se ponga por defecto en modo noche
if (horaActual >= "21:00" || horaActual <= "06:00"){
    anochecer();
    console.log(true);
}else{
    amanecer();
    console.log(false);
};

// Etiqueta del botón de descarga
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Descargar archivo pdf
var btnDescargar = document.querySelector('.descarga-btn');
btnDescargar.addEventListener('click', function() {
    let enlaceDescarga = document.getElementById('cv_pdf');
    enlaceDescarga.click();
    let elementoAlerta = document.querySelector('.alertaDescarga');
    elementoAlerta.classList.remove('alertaDescarga');
});

// Validación Formulario
// Función mensaje de error
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    // Colecta los valores introducidos en el formulario
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.phone.value;
    var message = document.contactForm.message.value;

    // Define los errores
    var nameErr = emailErr = mobileErr = messageErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Por favor, introduzca un nombre");
    } else {
        let regexName = /^[a-zA-Z\s]+$/;
        if (regexName.test(name) === false) {
            printError("nameErr", "Introduzca un nombre válido");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validar email
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        let regexEmail = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (regexEmail.test(email) === false) {
            printError("emailErr", "Introduzca un email válido");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validación telefono
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        let regexMobile = /^[1-9]\d{8}$/;
        if (regexMobile.test(mobile) === false) {
            printError("mobileErr", "Introduzca un número de teléfono válido");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validar el mensaje
    if (message == "") {
        printError("messageErr", "Por favor, debes escribir algún mensaje.");
    } else {
        let regexMessage = /^.{9,150}$/;
        if (regexMessage.test(message) === false) {
            printError("messageErr", "Mensaje demasiado corto");
        } else {
            printError("messageErr", "");
            messageErr = false;
        }
    }

    // Cancelar envio si no se valida
    if ((nameErr || emailErr || mobileErr || messageErr) == true) {
        return false;
    } else {
        alert('Tu mensaje se ha enviado con éxito');
    };

};

// Footer
let fecha = document.querySelector('#fecha');
let año = new Date();
fecha.innerHTML = `&copy; ${año.getFullYear()}`;