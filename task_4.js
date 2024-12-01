function view_console(a, b){
    for (let i = a; i < b + 1; i++){
        console.log(i);
    }
}

const intervalID = setInterval(view_console, 1000, 5, 15)
const timeoutID = setTimeout(function(){
    clearInterval(intervalID)
}, 3000)