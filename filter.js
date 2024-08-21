var humanNames = ["sur","sun","sham","yuvi","yogi","shre"]

var result = humanNames.filter(name => name.length >3)

console.log(result);

//filter useing another way

var users = [
    {
        id:1,
        name: "Babu",
        active: true,
    },

    {
        id:2,
        name: "Anushka",
        active: true,
    },

    {
        id:3,
        name: "Trisha",
        active: false,
    },

]

var activeUsers = users.filter(user =>user.active === true)

console.log(activeUsers)
