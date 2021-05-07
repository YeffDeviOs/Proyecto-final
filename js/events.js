
// function btnClickeado() {
//   let myFirstbtn = document.getElementById("btnOn");
// myFirstbtn.addEventListener("click", benvenuto,true);
// benvenuto() }

export let btnCalcular = $('#btnCalcular');
export let alerta = $('#alert-error');
export let btnInicio = $('#btn1');
export let btnLimpiar = $('#btnLimpiar');



//------------------Boton de Calcular.----------------------

btnCalcular.on('click', () => {
    if (monto.value === '' || tiempo.value === '' || interes.value === '') {
        alerta.hidden = false;
        setTimeout(() => {
            alerta.hidden = true;
        }, 2000);
    } else {
        calcularCuotas(monto.value, interes.value, tiempo.value);
    }
});

//------------------Boton de limpiar.----------------------

// btnLimpiar.onclick = () => {
// let btnLimpiar = document.getElementById('btnLimpiar');
//     if (monto.value != '' || tiempo.value != '' || interes.value != '') {
//         inputs = reset();
//     }


// };

//-----------------Animaciones-----------------------
let MostrarOcultar = $("#btn1");
let MostrarDiv =$(".Mostrar_Div");

MostrarOcultar.on('click', () => {
  MostrarDiv.toggle("fade-in");
})

// let $(#MostrarOcultar).show();


