//program demonstrating sync 
function greet(cb){
    setTimeout(() => {
        cb();
    },1000)
    console.log("Greeting!!!!");
}

function welcome(){
    console.log("Welcome to relevel")
}

greet(welcome);
//program demonstrating async
let add =  async  function (x,y) {
    return new Promise((resolve, reject) => {
        let sum = x + y;
        if(sum) {
            setTimeout(() => {
                resolve(sum);
            },3000)
        } else {
            reject("Error : Cannot add")
        }
    })
}

let sum =  await add(3,5);
console.log(sum)
