function compare (){
    const a  = parseFloat(document.getElementById("n1").value);
    const b  = parseFloat(document.getElementById("n2").value);
    const c  = parseFloat(document.getElementById("n3").value);
    const result = document.getElementById('result');

    result.style.display = "block";

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        result.textContent  = "porfavor escriba los 3 numeros";
        return;
    }
    const order = [a,b,c].sort((x,y) => x-y);
    const lesser = order[0];
    const medium = order[1];
    const greater = order[2];

    let message = "";
    
    
    if(a === b  || a === c ||  b  === c ){
        message = "<em>Hay dos números iguales.</em><br><br>";
    }
        
    result.innerHTML = 
        "MAyor: <strong>" + greater + "<strong/><br>" +
        "Medio: <strong>" + medium + "<strong/><br>" +
        "Menor: <strong>" + lesser + "<strong/><br>" +
        "De mayor a menos : <strong>" + greater + ", "+  medium + ", "+ lesser + "<strong><br>" +
        "De menor a mayor: <strong>" + lesser + ", " + medium + ", " + greater + "<strong>"
    

    
}