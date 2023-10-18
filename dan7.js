

var avg = 90

switch(true) {
    case avg < 60:
        console.log("f");
        break;
    case avg >= 60 && avg < 70:
        console.log("d");
        break;
    case avg >= 70 && avg < 80:
        console.log("c");
        break;
    default: 
       console.log("nothing");
    
}

for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log();("fiz buzz")
    }
    else if (i % 3 === 0) {
        console.log("fizzz");
    }
    else if (i % 5 === 0) {
        console.log("buzz");
    }
}

var e = 3;
var a = [5, - 4.2, 3, 7 ]

for(var i = 0; i < a.length; i++) {
  if (a[i] == e) {
    console.log("yes")
  }

    console.log(a[i])

    }



   var Inputarray = [-3, 11, 5, 3.4, -8]


for (var j = 0; i < Inputarray.length; j++ ) {
    if (Inputarray[j] > 0) {
        Inputarray[j] *= 2;
    }
    
}
console.log(Inputarray)
