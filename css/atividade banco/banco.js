function comprar(){

    let produto = document.getElementById('orfeu').value;
    let produto2 = document.getElementById('smith').value;
    let produto3 = document.getElementById('neo').value;
    let produto4 = document.getElementById('trinity').value;
    let produto5 = document.getElementById('oraculo').value;
    let valortotal = 0.0
    let nomeProduto = ""
    switch (produto) {
        case"0":
        nomeProduto += "dorril "
            valortotal += 72
            break;
        case"1":
        nomeProduto += "dipirona "
            valortotal +=43
            break;
        case"2" :
        nomeProduto += "dramin "
            valortotal +=45
            break;
        case"3" :
            nomeProduto += "buscopan "
            valortotal +=77
            break;
        case"4":
            nomeProduto += "gardenal "
            valortotal +=66
            break
        default:
            break;  
    }
    switch (produto2)  {
        case"0":
        nomeProduto += "dorril "
            valortotal += 72
            break;
        case"1":
        nomeProduto += "dipirona "
            valortotal +=43
            break;
        case"2":
        nomeProduto += "dramin "
            valortotal +=45
            break;
        case"3":
        nomeProduto += "buscopan "
            valortotal +=77
            break;
        case"4":
        nomeProduto += "gardenal "
            valortotal +=66
            break;
        default:
            break;  
    }
    switch (produto3)  {
        case"0":
        nomeProduto += "dorril "
            valortotal += 72
            break;
        case"1":
        nomeProduto += "dipirona "
            valortotal +=43
            break;
        case"2":
        nomeProduto += "dramin "
            valortotal +=45
            break;
        case"3":
        nomeProduto += "buscopan "
            valortotal +=77
            break;
        case"4":
        nomeProduto += "gardenal "
            valortotal +=66
            break;
        default:
            break;  
    }
    switch (produto4)  {
        case"0":
        nomeProduto += "dorril "
            valortotal += 72
            break;
        case"1":
        nomeProduto += "dipirona "
            valortotal +=43
            break;
        case"2":
        nomeProduto += "dramin "
            valortotal +=45
            break;
        case"3":
        nomeProduto += "buscopan "
            valortotal +=77
            break;
        case"4":
        nomeProduto += "gardenal "
            valortotal +=66
            break;
        default:
            break;  
    }
    switch (produto5)  {
        case"0":
        nomeProduto += "dorril "
            valortotal += 72
            break;
        case"1":
        nomeProduto += "dipirona "
            valortotal +=43
            break;
        case"2":
        nomeProduto += "dramin "
            valortotal +=45
            break;
        case"3":
        nomeProduto += "buscopan "
            valortotal +=77
            break;
        case"4":
        nomeProduto += "gardenal "
            valortotal +=66
            break;
        default:
            break;  
    }
    alert(`Você comprou ${nomeProduto} Valor total: R$${valortotal} `)


}



