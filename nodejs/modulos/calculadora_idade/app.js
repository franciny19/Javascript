//const funcoes_matematicas = requise('./funcoes_matematicas');
//const calculadora_idade = requise('./calculadora_idade');
import {somar,subtrair,multiplicar,dividir} from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';

console.log("soma: " + somar(5, 5, 5));
console.log("Subtrair: " + subtrair(5, 3));
console.log("Multiplicar: " + multiplicar(5, 3));
console.log("Dividir: " + dividir(5, 10));

console.log(calculadora_idade.idade("Franciny", 2008, 2100)); 