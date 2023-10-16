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
    var i = 10;

    do {
        i++

    } while (i < 10);

  
console.log(i);

var punishment = "jjjjjjj"
for (var b = 0; b < 10; i++) {
    punishment  = "ppppppp"

}
console.log(punishment)
console.log(i)

for (var i = 2; i <= 10; i = i + 2 ) {
    console.log(i)
}