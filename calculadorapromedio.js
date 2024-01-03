let nombre = prompt("Ingrese el nombre del alumno");
let materia = prompt("Ingrese la materia");
let nota1 = parseInt(prompt("Ingrese la primera nota: "));
let nota2 = parseInt(prompt("Ingrese la segunda nota: "));
let nota3 = parseInt(prompt("Ingrese la tercera nota: "));

let promedio;

if (nota1 <0 || nota2 <0 || nota3 <0) {
    alert("Ingrese un numero valido entre 0 y 10");
} else{
    if(nota1 >10 || nota2 >10 || nota3 >10 ) {
        alert("Ingrese un numero valido entre 0 y 10");
    }
    else{
        if( (promedio= (nota1 + nota1 + nota3)/3)> 7) {  
        alert(
        `${nombre}, ¡felicidades! Has aprobado en  ${materia}  con un promedio de  ${promedio}`);
        }
        else{
            alert(
           `${nombre}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ${materia} es de ${promedio}`);
           } ;
    } ;     
};