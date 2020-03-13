const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//MAP

var arrMap = usuarios.map(function(item){
    return item.idade;
})

console.log(arrMap);

//filter

var arrFilter = usuarios.filter(function(item){
    return item.idade > 18 && item.empresa == "Rocketseat";
})

console.log(arrFilter);

//find

var arrFind = usuarios.find(function(item){
    return item.empresa == "Google";
})

console.log(arrFind);

//Função Final

function joinArr(){
    var arrFinal = usuarios.filter(function(final){
        return (final.idade * 2) <= 50; 
    })
    return arrFinal;
}

console.log(joinArr());