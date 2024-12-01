function getNumber(num){
    return num
}

function getFunc(callback, num){
    let a = callback(2)
    let b = num
    return function(){
        let result = a + b
        console.log(result)
    }
}

const callFunc = getFunc(getNumber, num = 5)
callFunc()