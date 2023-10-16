var a = "Beograd"
result = "";

switch(a) {
    case "Beograd":
    case "Nis":
    case "Novi sad":
    case "valjevo":
    case "krusevac":
        result = "Srbija"
    
        break;

    case "Podgorica":
    case "Budva":
    case "Niksic":
    case "Herceg Novi":
        resuult = "Crna gora"
        break;
}
console.log(result)

var operation = "/"
var num1 = 5
var num2 = 0

switch(operation) {
    case "+":
    result = num1 + num2;
    break;
    case "-":
    result = num1 - num2;
    break;
    case "*":
    result = num1 * num2;
    break; 
    case "/":
    result = num2 == 0? console.log("nije deljivo"):num1/num2
}
console.log(result)
    var niz = ["jan" , "feb", "mar" , "apr"]
    console.log(niz[2]) 