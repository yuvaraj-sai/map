var fruits=["apple","banana","orange"]

var modified = fruits.map((fruit)=>{
    return fruit.toUpperCase()
})

console.log(modified);

//map 2ed model

var number = [1,2,3,4]

var doubleNo = number.map((num)=>{
    return num * 2; 
})

console.log(number, doubleNo);
