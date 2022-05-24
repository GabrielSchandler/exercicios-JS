function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    if (hora >= 0 && hora < 12){
        //Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        document.getElementById('exercicio1').style.backgroundColor = 'rgb(240, 158, 118, 50%)'
        img.src = 'images/exercicio1/dia.jpg'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        document.getElementById('exercicio1').style.backgroundColor = 'rgb(204, 109, 4, 50%)'
        img.src = 'images/exercicio1/tarde.jpg'
    } else {
        //Boa noite
        msg.innerHTML = `Boa noite! <br> Agora são ${hora} horas.`
        document.getElementById('exercicio1').style.backgroundColor = 'rgb(63, 93, 93, 50%)'
        img.src = 'images/exercicio1/noite.png'
    }

}

function ex2 (){
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/exercicio2/hcrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/exercicio2/hjovem.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'images/exercicio2/hadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'images/exercicio2/hidoso.jpg')
            }
        }else  if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/exercicio2/mcrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/exercicio2/mjovem.jpg')
            } else if (idade <50){
               //adulto
               img.setAttribute('src', 'images/exercicio2/madulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'images/exercicio2/midoso.jpg')

            }
        }
    }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
}   

function ex3 (){
    let iniciotxt = document.querySelector('#inicio')
    let fimtxt = document.querySelector('#fim')
    let passotxt = document.querySelector('#passo')
    let contador = document.querySelector('#contador')
    let display = []
    let inicio = Number(iniciotxt.value)
        let fim = Number(fimtxt.value)
        let passo = Number(passotxt.value)
    
    if(inicio == 0 || fim == 0 || passo == 0){
        window.alert('Preencha todos os dados!')
    } else if(passo > fim ){
        window.alert('Passo não pode ser maior que o fim!')
    }else if ( inicio > fim) {
        window.alert('Inicio não pode ser maior que o fim!')
    } else {
        


        console.log( inicio +' ')
        contador.innerHTML = 'Contando:'
        for (let c = inicio; c <= fim; c += passo){
            contador.innerHTML += ` ${c};`
            
        }
        

    }

    
    
}

function ex4(){
    let tabuadatxt = document.querySelector('#tabuadatxt')
    let tabuada = Number(tabuadatxt.value)
    res_tabuada = document.querySelector('#res_tabuada')
    if (tabuada == '') {
        window.alert('Numero inválido. Tente outro!')
    } else {
        res_tabuada.innerHTML = ''
        for(let i = 0; i <= 10; i++){
            res_tabuada.setAttribute('size', '10')
            console.log(i*tabuada)
            
            let option_tabuada = document.createElement('option')
            option_tabuada.text = `${tabuada} x ${i} = ${tabuada*i}`
            res_tabuada.appendChild(option_tabuada)

        }
    }
}
let caixa = []
function ex5(){
    let numerotxt = document.querySelector('#numerotxt')
    let numero = Number(numerotxt.value)  
    let caixa_resultado = document.querySelector('#caixa_resultado')


    if (caixa.includes(numero) == true)  {
        window.alert('Esse numero já foi adicionado, tente outro!')
    }else if (numero > 100 || numero <= 0)  {      
        window.alert('Numero invalido, digite um numero entre 1 á 100!')
        }else  {
            caixa.push(numero)
            console.log(caixa.length)
            caixa_resultado.setAttribute('size' ,`${caixa.length}`)
            let option_analise = document.createElement('option')
            option_analise.text = `Valor ${numero} adicionado!`
            caixa_resultado.appendChild(option_analise)
    }

}
function ex05_2() {
    if (caixa[0] < 1){
        window.alert('Erro na análise, adicione pelo menos um numero!')
    }else{
        let analise_final = document.querySelector('#analise_final')
        caixa.sort()
        let maior_numero = caixa.length
        maior_numero = 0
        let soma_caixa = 0
        let media_caixa = 0
        
        for(let contar in caixa){
            if(caixa[contar] >= maior_numero){
                maior_numero = caixa[contar]
            }
        }
        for(let cont in caixa){            
            soma_caixa += caixa[cont]
        }
        media_caixa = (soma_caixa / caixa.length)        

        analise_final.innerHTML = `<p>Foram cadastrados:                ${caixa.length} numeros;</p>`
        analise_final.innerHTML += `<p>O maior valor informado foi:      ${maior_numero};</p>`
        analise_final.innerHTML += `<p>O menor valor informado foi:      ${caixa[0]};    </p>`
        analise_final.innerHTML += `<p>Somando todos os valores, temos:  ${soma_caixa};  </p> `
        analise_final.innerHTML += `<p>A média dos valores é:            ${media_caixa.toFixed(2)}. </p>`
    }
}
