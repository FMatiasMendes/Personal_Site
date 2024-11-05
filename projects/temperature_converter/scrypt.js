var ecra = document.querySelector(".ecra");

function calculate(){

	let celsius = ecra.innerHTML;
	let saida = document.querySelector("#saida");

	let kelvin = parseFloat(celsius) + 273.15;
	let f = (parseFloat(celsius) * 1.8) + 32;

	saida.innerHTML = `<p>${parseFloat(celsius).toFixed(2)} C = ${f.toFixed(2)} F</p>`;
	saida.innerHTML += `<p>${parseFloat(celsius).toFixed(2)} C = ${kelvin.toFixed(2)} K</p>`;
}

function key(num){

	//limits to 10 characters
	if (ecra.innerHTML.length < 10){
		//keeps "0" on screen if first inserted number is 0 and also the others
		if (num == 0 && ecra.innerHTML.includes(0) && ecra.innerHTML.length == 1){
			ecra.innerHTML = 0;
		}
		//if the first number is 0 and second one different, deletes the first and writes the second
		else if (ecra.innerHTML.length == 1 && num != 0 && ecra.innerHTML.includes(0)){
			ecra.innerHTML = `${num}`;
		}
		//If the first value is '-' and the second is '0', keep '-0' as long as the entered number is not different from '0'
		else if (ecra.innerHTML.length == 2 && ecra.innerHTML.includes("-0") && num == 0){
			ecra.innerHTML = `-0`;
		}
		//If the first value is '-' and the second is '0' and the entered number is different from '0', write '-' followed by the entered number
		else if (ecra.innerHTML.length == 2 && ecra.innerHTML.includes("-0") && num != 0){
			ecra.innerHTML = `-${num}`;
		}
		//add the remaining numbers
		else{
			ecra.innerHTML += `${num}`;
		}

		calculate();
	}
}

function point(){
	if (!ecra.innerHTML.includes(".")){
			ecra.innerHTML += ".";
	}
}

function negative(){
	if (!ecra.innerHTML.includes("-") && ecra.innerHTML.length == 0 || ecra.innerHTML.includes(0) && ecra.innerHTML.length == 1){
			ecra.innerHTML = "-";
	}
}

function erase(){
	let saida = document.querySelector("#saida");

	ecra.innerHTML = "";
	saida.innerHTML = "";
}