const mongoose   =require('mongoose')


const todoSchema  = new mongoose.Schema({
    todo:{
        type:String,
        trim:true,
       
    },
    day:{
        type:String,
        trim:true
    }
},{timestamps:true})

const Todos = mongoose.model('Todo',todoSchema)

module.exports = Todos;