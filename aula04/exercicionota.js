let nota = 5
let situacao;

if (nota < 5){
    situacao = "Reprovado";
    
}else if (nota >= 7) {
    situacao = "Aprovado";
    
} else {
    situacao = "Recuperacao";

}
console.log(situacao);
