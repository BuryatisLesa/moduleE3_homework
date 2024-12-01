
function checkingNumber(num){
    let array = []
    if (num <= 1000 && num % 2 != 0 || num === 2){
        for (let i = 1; i < num + 1; i++){
            let result = num / i;
            array.push(result)
        }
    } else {
        console.log('You is entry very more num or hard num')
    }
    let count = 0
    for (item of array){
        if (Number.isInteger(item)){
            count += 1
        };
    };
    if (count == 2){
        console.log('Is a prime number')
    }else {
        console.log('It is a not prime number')
    }
}

checkingNumber(15)