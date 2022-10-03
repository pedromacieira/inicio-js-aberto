var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 6 && hora < 12){
    console.log('Logo, bom dia!')
}

else if (hora >= 12 && hora <= 18){
    console.log('Logo, boa tarde!')
}
else {
    console.log('Logo, boa noite!')
}