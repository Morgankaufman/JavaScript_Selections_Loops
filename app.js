console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i < 100; i++){
    if(i % 2 == 0 ){
        continue;
    } else {
        console.log(i);
    }
}

let i = 1
do{
    if(i % 2 !== 0){
        console.log(i);
    }

    i++;
    
}while (i < 100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for( let x = 0; x <= 100; x++){
    if(x % 3 == 0 && x % 5 == 0){
        console.log(x, "FIZZBUZZ");
    } else if(x % 3 == 0) {
        console.log(x, "FIZZ");
    } else if (x % 5 == 0){
        console.log(x, "BUZZ");
    }
}


let x = 1;
while (x <= 100){
    if(x % 3 == 0 && x % 5 == 0){
        console.log(x, "FIZZBUZZ");
    } else if(x % 3 == 0){
        console.log(x, "FIZZ");
    } else if (x % 5 == 0){
        console.log(x, "BUZZ");
    }
    x++;
}


let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for(let i = 1; i <= n; i++){
    if(i == value){
        console.log(`found ${value}!`);
        break;
    }
    if(i == n){
        console.log(`Did not find ${value} within 1-${n}`);
    }

}


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 1) + 1); 

for(i = start; i <= end; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(i, "FIZZBUZZ");
    }else if(i % fizzDivisor == 0){
        console.log(i, "FIZZ");
    }else if(i % buzzDivisor == 0){
        console.log(i, "BUZZ");
    }
}

