// require('../src/db/mongoose')
// const Task= require('../src/models/task')

// Task.findByIdAndDelete('5cf5450cbd504b08e017aa26').then((task) =>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })


//ASYNC/AWAIT
const dowork = async () =>{
    return 'Ruksz'
}
console.log(dowork())