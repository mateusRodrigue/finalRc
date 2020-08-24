function enviardados(){
    if(document.getElementById("Nome").value== ""){
        document.getElementById("msgNome").innerHTML = "Campo do Nome não informado";
    }
    else{
        document.getElementById("msgNome").innerHTML = "";
    }
    if(document.getElementById("E-mail").value== ""){
        document.getElementById("msgmail").innerHTML = "Campo de E-mail não informado";
    }
    else{
        document.getElementById("msgmail").innerHTML = "";
    }
    if(document.getElementById("Telefone").value== ""){
        document.getElementById("msgtel").innerHTML = "Campo de Telefone não informado";
    }
    else{
        document.getElementById("msgtel").innerHTML = "";
    }
    if ((document.getElementById("Nome").value != "") && (document.getElementById("E-mail").value != "") && (document.getElementById("Telefone").value != "") ){
        alert(
            "Sucesso!!"
        );
    }
    return false;
}
