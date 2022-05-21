function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    if (hora >= 0 && hora < 12){
        //Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        document.body.style.backgroundColor = 'rgb(240, 158, 118, 100%)'
        img.src = 'images/dia.jpg'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        document.body.style.backgroundColor = 'rgb(204, 109, 4, 100%)'
        img.src = 'images/tarde.jpg'
    } else {
        //Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        document.body.style.backgroundColor = 'rgb(63, 93, 93, 100%)'
        img.src = 'images/noite.png'
    }

}






