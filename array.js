a=[12,53,89,890,34]
console.log(a[[5]])

console.log(a[[234]])//undefined

a[2]=90 //legal
a[90]=289 //legal

console.log(a)
console.log(a[87])
console.log(a.length)

a[-23]=3489
a['place']="chennai"
b={sno:1,name:"Lokesh"}
a[b]="JavaScript Object"
a[true]="true value"

console.log(a.length,"is the size of array")
console.log(a)