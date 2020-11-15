const Todos =require('../models/Todos')



exports.getTodos = async(req,res,next)=>{
    try{
        const todos =await Todos.find({})
        return res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
          });
    }catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
}
exports.addTodo = async (req,res,next)=>{
    try{
     
       const newtodo = await Todos.create(req.body)
  
        return res.status(201).json({
          success: true,
          data:newtodo
        }); 
    }catch (err) {
     
        return res.status(500).json({
          success: false,
          error: req.body
        });
      }
}

exports.deleteTodo = async(req,res,next)=>{
    try {
        const todo = await Todos.findById(req.params.id);
    
        if(!todo) {
          return res.status(404).json({
            success: false,
            error: 'No todo found'
          });
        }
    
        await todo.remove();
    
        return res.status(200).json({
          success: true,
          data: {}
        });
    
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
}