/*Conversor de moneda*/

const monedaDisponibles = ['peso', 'euro', 'dolar', 'libra esterlina'];
const tasaPeso = 0.0011;
const tasaEuro = 1.08;
const tasaDolar = 1;
const tasaLibraEsterlina = 1.25;

let monedaOrigen;
let monedaDestino;
let cantidad;

function validarMoneda(moneda) {
	return monedaDisponibles.includes(moneda);
}


function conversorMoneda(monedaDestino, cantidad) {
	let tasa;

	switch (monedaDestino) {
		case 'dolar':
			tasa = tasaDolar; 
			break;
		case 'euro':
			tasa = tasaEuro;
			break;
		case 'peso':
			tasa = tasaPeso;
			break;
		case 'libra esterlina':
			tasa = tasaLibraEsterlina;
			break;
	}

	const cantidadConvertida = cantidad / tasa;
	return cantidadConvertida;
}

function solicitarDatos() {
	const cancelMsg = 'Recargar pagina para intentar de nuevo ';

	cantidad = parseFloat(prompt('Ingrese la cantidad de dinero a convertir:'));

	
	if (!cantidad) {
		alert(cancelMsg);
		return;
	}


	if (isNaN(cantidad)) {
		alert(`El importe a convertir debe ser un numero.`);
		return solicitarDatos();
	}

	monedaOrigen = prompt('Ingrese la moneda que desea convertir');

	if (!monedaOrigen) {
		alert(cancelMsg);
		return;
	}

	if (!validarMoneda(monedaOrigen.toLowerCase().trim())) {
		alert(`${monedaOrigen} no es una moneda válida.`);
		return solicitarDatos();
	}

	monedaDestino = prompt('Ingrese la moneda por la que desea convertir ');

	if (!monedaDestino) {
		alert(cancelMsg);
		return;
	}

	if (!validarMoneda(monedaDestino.toLowerCase().trim())) {
		alert(`${monedaDestino} no es una moneda válida.`);
		return solicitarDatos();
	}

	return { cantidad, monedaOrigen, monedaDestino };
}

function ejecutarConversor() {
	const result = solicitarDatos();

	if (!result) {
		return;
	}

	const { cantidad, monedaOrigen, monedaDestino } = result;
	const cantidadConvertida = conversorMoneda(monedaDestino, cantidad);

	if (!isNaN(cantidadConvertida)) {
		alert(
			`${cantidad} ${monedaOrigen} equivale a ${cantidadConvertida.toFixed(2)} ${monedaDestino}`,
		);
	}
}

if (confirm('¿Quiere saber el valor de su moneda?')) {
	ejecutarConversor();
} else {
	alert('Recargar pagina para intentar de nuevo ');
}
