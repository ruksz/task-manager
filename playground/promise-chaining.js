require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5cf5440dd70f1e1314663f07', { age: 15 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 15 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})