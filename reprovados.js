const alunos = ['Ana', 'marcos', 'maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice)=>{ //necessario nomear primeiro parametro que seria nome porem na convenção se não for usar o primeiro parametro e conselhado utilizar underline
    return medias[indice] < 7;
})
console.log(reprovados);