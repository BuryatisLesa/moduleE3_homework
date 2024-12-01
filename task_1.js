let array = ['', 0, 1, '2', '3', 3, 5, 6]

function getInfoArray(arrayf){
    let value = 0
    let all_number = 0
    let undefined_value = 0
    let null_value = 0
    let string_value = 0
    for (el of arrayf){
        if (typeof el === 'number'){
            all_number += 1;
            if(el % 2 === 0){
                value += 1;
            };
        }else if ( typeof el === 'undefined'){
            undefined_value += 1;
        }else if ( typeof el === 'null'){
            null_value += 1;
        }else if ( typeof el === 'string'){
            string_value += 1;
        }
    };
    console.log(`Number even:`,value)
    console.log(`Number odd:`,all_number - value)
    console.log(`Undefined:`, undefined_value)
    console.log(`Null:`, null_value)
    console.log(`String:`, string_value)
};

getInfoArray(array)