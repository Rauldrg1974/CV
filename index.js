let clave = prompt("Escribe la clave por favor.");

let destrabar = "#Miqueas68";

if(clave === destrabar){
    alert("Bien venido, seleccione aceptar");
}else{
    for(i=0; i < 200; i++){
        let otraClave = prompt("No es la clave, tipee de nuevo");
        if(otraClave === destrabar){
            break;
        }
    };
}