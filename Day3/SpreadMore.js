person = {sno:1,name:"Rahul",city:"Chennai"}
candidate = person //pass by reference
candidate.skills=["Java","c#","PHP"]

/*console.log(person)
console.log(candidate)*/

member = {...person, city:"Mumbai", interests: ["Singing","Cricket", "Gaming"] }

console.log(person)
console.log(candidate)
console.log(member)