person ={ sno:1, name:"Rajesh", city:"Chennai"}

console.log(person.name)

const {sno,name,city} = person

//destructing with alias
const{sno: id, name:fname, city:place} = person
console.log(name)
console.log(place)
console.log(sno)

