function sample()
{
    return function(a,b){
        return a+b;
    }
}//function return function

//console.log(sample())
console.log(sample()(23,56))// oru function innoru function eh return pannum in js la
// and more over we can pass the parameter to the return function throught the parent function
//soo function kula innoru fucntion ku parameter pass pandrathala than namma innoru braces ku ulla
//parameter pass pandrom

function sample(option){
    console.log("sample logic")
    if(option==1)
    return function(a,b)
    {
        return a-b
    }
    else 
    return function(a,b)
    {
        return a+b;
    }
}
console.log(sample(1)(23,56))

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function sample(option){
    if(option==1)
        return sub
    
    else
        return add
}   
console.log(sample(1)(83,56))