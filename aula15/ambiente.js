let num = [5, 8, 9, 3, 'abacaxi', 'ovo', 'amor']
num.push('morango')

console.log(`O vetor tem ${num.length} posições`)

console.log(`Nosso vetor é o ${num}`)


console.log(`Em ordem crescente fica assim: ${num.sort()}`)

for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}


for (let p in num){

    console.log(num[p])

}