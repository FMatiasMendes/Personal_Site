var ecra = document.querySelector(".ecra");

function calcular(){

	let celsius = ecra.innerHTML;
	let saida = document.querySelector("#saida");

	let kelvin = parseFloat(celsius) + 273.15;
	let f = (parseFloat(celsius) * 1.8) + 32;

	saida.innerHTML = `<p>${parseFloat(celsius).toFixed(2)} C = ${f.toFixed(2)} F</p>`;
	saida.innerHTML += `<p>${parseFloat(celsius).toFixed(2)} C = ${kelvin.toFixed(2)} K</p>`;

}

function teclar(num){

	//executar limitando a um maximo de 10 caracteres
	if (ecra.innerHTML.length < 10){
		//mantém "0" no ecrã se o primeiro numero inserido for "0" e os restantes também
		if (num == 0 && ecra.innerHTML.includes(0) && ecra.innerHTML.length == 1){
			ecra.innerHTML = 0;
		}
		//se o primeiro numero for 0 e o segundo for diferente, escreve o segundo e apaga o primeiro
		else if (ecra.innerHTML.length == 1 && num != 0 && ecra.innerHTML.includes(0)){
			ecra.innerHTML = `${num}`;
		}
		//se o primeiro valor for "-" e o segundo for "0", mantém "-0" enquanto o numero inserido não for diferente de "0"
		else if (ecra.innerHTML.length == 2 && ecra.innerHTML.includes("-0") && num == 0){
			ecra.innerHTML = `-0`;
		}
		//se o primeiro valor for "-" e o segundo for "0" e o numero inserido for diferente de "0", escreve "-" seguido do numero inserido
		else if (ecra.innerHTML.length == 2 && ecra.innerHTML.includes("-0") && num != 0){
			ecra.innerHTML = `-${num}`;
		}
		//acrescenta os restantes numeros
		else{
			ecra.innerHTML += `${num}`;
		}

		calcular();
	}
}

function virgula(){
	if (!ecra.innerHTML.includes(".")){
			ecra.innerHTML += ".";
	}
}

function negativo(){
	if (!ecra.innerHTML.includes("-") && ecra.innerHTML.length == 0 || ecra.innerHTML.includes(0) && ecra.innerHTML.length == 1){
			ecra.innerHTML = "-";
	}
}

function apagar(){
	let saida = document.querySelector("#saida");

	ecra.innerHTML = "";
	saida.innerHTML = "";
}