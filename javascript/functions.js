function print(x){
    console.log(x)
};


console.log(print())



 //rest or dot opreator its add vlaue in arrays.
function calculatecartprice(...num1){
    return num1
}


console.log(calculatecartprice(200,400,500))

// passing object in functions
const user={
    username:"hitesh",
    price:199

}

function handleOject(anyobject){
    console.log(`user is ${anyobject.username} and price is ${anyobject.price}`);
}

handleOject(user)
// passing arrays in functions

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));
