function definition(fun){
    console.log("first 20% of the logic")
    fun("Data set 1")
    console.log("another 20% of the logic")
    fun("Data Set 2")
    console.log("we are done")
} //library

//caller
//function call
definition(
    function(data){//fun call oda values ah receive panna oru parameter kudukanum enna venum nalum kuduthukalam
     console.log("caller logic")
     console.log(data, "is processed by the caller")
    }
)