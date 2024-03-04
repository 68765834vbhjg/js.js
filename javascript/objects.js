//singleton
// Object.create


// object literals 
// by defaut object cosndir key as string.


const mySym=Symbol("key1")

const jsUser={
    name:"aman",
    [mySym]:"mykey1",
    middle_name:"kumar",
    last_name:"chhari",
    email:"amankumarchhari@gmail.com",
    age:"21",
    last_log_inday:["monday","satuday"]
}

console.log(jsUser["last_name"]);
console.log(jsUser.last_name);
console.log(jsUser[mySym]);

jsUser.email="amankumarchhari07gmail.com"

jsUser.greeting=function(){
    console.log("hello js user");

}
console.log(jsUser.greeting());

//