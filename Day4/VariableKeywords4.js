function demoVariable(){
    var a=30
    console.log("within the outer range a is", a)
    {
        let a=90
        console.log("within the block range a is", a)
        {
            a=900
        }
    }
    console.log("Again with in the outer range a is", a)
}

demoVariable()
