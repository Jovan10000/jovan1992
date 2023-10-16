var sum = 0; 

for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        sum = sum + i; 
    console.log(i,sum);
}

var sum = 0; 
var product = 1;
for (var i = 1; i < 6)  {
    sum = sum + i;
    product = product * i;

}

console.log(sum,product
    )