
    // document.getElementById("simulador-btn").addEventListener("click", function alertbuttom() {
    //     alert("Hola mundo");
    // });

function simulador(){
    const campoNombre = document.getElementById('nombres').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const montoInvertir = parseInt(document.getElementById ('inversion').value);
    const tiempoInversion = parseInt(document.getElementById('tiempo').value)
    const tiempoShow = document.getElementById('tiempo-show')
    const interesShow = document.getElementById('interes-show')
    const nombreShow = document.getElementById('nombres-show')
    const correoShow = document.getElementById('email-show')
    const totalShow = document.getElementById('total-show')
    const gananciaShow = document.getElementById('ganancia-show')

    const pre = document.getElementById('pre');
    pre.classList.add('disabled');
    const post = document.getElementById('post');
    post.classList.remove('disabled');
    let totalGanacia = (montoInvertir  * 0.096) + montoInvertir;
    let Ganacia = (montoInvertir * 0.096)
    let totalGanacia1 = (montoInvertir * 0.0312) + montoInvertir;
    let Ganacia1 = (montoInvertir * 0.0312)
    let totalGanacia2 = (montoInvertir * 0.0612) + montoInvertir;
    let Ganacia2 = (montoInvertir * 0.0612)

    switch (tiempoInversion) {
        case 1:
            tiempoShow.innerText = "12 meses"
            interesShow.innerText = "0,8%"
            totalShow.innerText = (totalGanacia)
            gananciaShow.innerText = (Ganacia)
            break;
        case 2:
            tiempoShow.innerText = "24 meses"
            interesShow.innerText = "1,3%"
            totalShow.innerText = (totalGanacia1)
            gananciaShow.innerText = (Ganacia1)
            break;
        case 3:
            tiempoShow.innerText = "36 meses"
            interesShow.innerText = "1,7%"
            totalShow.innerText = (totalGanacia2)
            gananciaShow.innerText = (Ganacia2)
            break;
    
        default:
            break;
    }

    nombreShow.innerText = (campoNombre)
    correoShow.innerText = (email)
    
}

const boton = document.getElementById ('simulador-btn')
boton.addEventListener ("click", simulador)