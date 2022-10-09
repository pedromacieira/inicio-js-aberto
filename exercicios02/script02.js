function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('iano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        let fsex = document.getElementsByName('sex')
        let idade = ano - Number(fano.value)
        let gen = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade <18) /*Criança*/{
                img.setAttribute('src','cadeia.jpg')

            } else if (idade >= 18 && idade < 60)/*Adulto*/{
                img.setAttribute('src', 'eu.jpg')
            } else /*Véi*/{
                img.setAttribute('src', 'veio.jpg')
            }
        } else {
            gen = 'Mulher'
            if (idade >=0 && idade <18) /*Criança*/{
                img.setAttribute('src', 'cadeia.jpg')

            } else if (idade >= 18 && idade < 60)/*Adulta*/{
                img.setAttribute('src', 'iza.jpg')
            } else /*Véia*/{
                img.setAttribute('src', 'veia.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade}`
        res.appendChild(img)
    }

}