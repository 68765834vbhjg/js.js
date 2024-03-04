

const tinderuser={}

tinderuser.id="66545ug"
tinderuser.name="sammy"
tinderuser.isloggedin=false

//

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aman ",
            middlename:"kumar",
            lastname:"chhari"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={ 1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={4:"a",5:"b"}

const obj3=Object.assign({}, obj1,obj2,obj4)
console.log(obj3);


const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    },
    {
        id:4,
        email:"h@gmail.com"
    },
]

users[1].email

console.log(tinderuser);
console.log(Object.keys(tinderuser));

console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
