let number = prompt('Entry any number'); 
let num = parseFloat(number)
console.log(num);

if (typeof num === "number"){
    console.log('True');
    if (num % 2 == 0){
        console.log('It is num even');
    } else {
        console.log('It is num odd');
    }
} else {
    console.log('False');
};


