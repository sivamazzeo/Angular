c=[34,23,56]
a=[3445,34,34,656,47,c]
console.log(a)
b=[...a]
c[3]=9090
console.log(a)
console.log(b)
/*
b=[...a]//copy the values of the array, not reference
b[5]=[...a[5]]
//spread operator only available in es2015 and later
c[3]=890
console.log(a)
console.log(b)
b[a]=9090
console.log(a)
console.log(b)
// a[4]=9090
// console.log(a)
// console.log(b)*/