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