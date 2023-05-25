function demoVariable(){
    const a=30
    console.log("within the outer range a is", a)
    {
        let a=90
        console.log("within the block range a is", a)
    }
    console.log("Again with in the outer range a is", a)
}

demoVariable()
