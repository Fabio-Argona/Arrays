const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let nota of notas){
    somaDasNotas += nota;
}
console.log(notas);


const media = somaDasNotas / notas.length
console.log(`A media das notas é ${media}.`);