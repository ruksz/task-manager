const mongoose=require('mongoose')
// const validator= require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
})


// const me= new User({
//     name: '  Rukshar  ',
//     age: 23,
//     email: 'R.98@gmail.com  ',
//     password:'pas@1234'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const Task = mongoose.model('Task', {
//     desc: {type: String, required: true, trim: true},
//     completed: {type: Boolean, default: false}
// })

// const task1 = new Task({
//     desc: 'Sleep @ 10.00    ',
    
// })

// task1.save().then(() => {
//     console.log(task1)
// }).catch((error) => {
//     console.log('Error', error)
// })