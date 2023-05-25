function demoVariable(){
    let a=30// should not use like this
    console.log("within the outer range a is", a)
    {
         var a=90//should not use like this
        console.log("within the bock range a is", a)
    }
    console.log("Again with in the outer range a is", a)
}

demoVariable()
