//global,function scope and local scope

a=20
function printer(){
    //a=35
    console.log("a:", a)
    a=50
}
printer()
console.log("global a:",a)