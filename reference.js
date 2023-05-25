a=[45,87,98]

console.log(a)

b=a//pass by reference
console.log(b)
b[4]=900
console.log(a)

c=[]
for(let x in a)
c[x]