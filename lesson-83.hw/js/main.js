const user = {
    name: 'Дмитрий',
    age: 50,
    status: 'student',
    salutation(name) {
        return `Hello ${name}`
    }    
}

// ==========================================

let simpleUsers = 0
const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'max',
        age: 30,
        isAdmin: true
    },
    {
        name: 'den',
        age: 20,
        isAdmin: false
    },
    {
        name: 'aman',
        age: 33,
        isAdmin: false
    },
    {
        name: 'john',
        age: 28,
        isAdmin: true
    },
    {
        name: 'fil',
        age: 25,
        isAdmin: false
    }
]
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        simpleUsers = simpleUsers + 1
    }    
}
console.log(simpleUsers)