  import {btnCalcular, btnInicio, btnLimpiar} from './events.js';

 $ (document).ready (function()
 {
     console.log ("El DOM está cargado");
 });

  
  //-----------Bienvenida-----------------------------------------
//  function benvenuto() {
//    let Name = prompt("Ingrese su nombre: ");
//    if (Name == "") {
//        alert("Estamos probando","Porfavor completar....");
//    } else {
//        alert(  "Hola " + Name +"!!" + " bienvenido a una nueva experiencia de Autogestión en tu economía 🛒🛒🙋🙋 ");
//    }
//  }


 //----------------DOM------------------------
const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const interes = document.getElementById('interes');
const llenarTabla = document.querySelector('#lista-tabla tbody');


//------------Funcion de cuotas--------------------------
function calcularCuotas(monto, interes, tiempo) {

    while(llenarTabla.firstChild) {
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let mesActual = dayjs().add(1, 'month');
    let amortizacionConstante, pagoInteres, cuota;
    amortizacionConstante = monto / tiempo;

    for (let i = 1; i <= tiempo; i++) {
        pagoInteres = monto * (interes / 100);
        cuota = amortizacionConstante + pagoInteres;
        monto = monto - amortizacionConstante;

       let fecha = mesActual.format('DD-MM-YYYY');
       mesActual = mesActual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fecha}</td>
            <td>${amortizacionConstante.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row);
        
    }
}