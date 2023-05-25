person={
    sno:1,
    name: "peter",
    city:"Mumbai"
}
person.skils =["java","css","javascript"]
list =[34,67,89]
list["sno"]=35
list["name"]="Arjun"

for(let x in person)
console.log(x)

for(let x in person)
console.log(x,"=>", person[x])

console.log(Object.keys(person))
console.log(Object.keys(list))
