a=[34,356,29,209]

a[8]=989
//not iseful if you gave properties[string index of object to be 
//iterated
//not good if elemetns are place in rendom indexes

for(let x=0;x<a.length;x++)
    console.log(a[x])

//the most appropriate for loop for processing
//array with random index and array with properties
for(let x in a)
console.log(x)

a[-349]="Roger"
b={sno:1, name:"Roger"}
a[JSON.stringify(b)]="Javascript object value part"

for(let x in a)
console.log(x,a[x])

