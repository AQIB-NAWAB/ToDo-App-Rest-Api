const ToDoModel=require("./model")


module.exports.getToDo=async(req,res)=>{
    const ToDo=await ToDoModel.find({})
    res.send(ToDo)
}




module.exports.saveTodo= async (req, res) => {
   const {text}=req.body;
   ToDoModel.create({text}).then((data)=>{
    console.log("Added sucessfully")
    res.send(data)
   })
  }





  module.exports.updateToDo=async(req,res)=>{
    const {_id,text}=req.body;
    ToDoModel.findByIdAndUpdate(_id,{text}).then(()=>{
        res.send("Updated Succesfully")
    }).catch((e)=>{
        console.log(e)
    })
  }













  module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body;
    ToDoModel.findByIdAndDelete(_id).then(()=>{
        res.send("Deleted Succesfully")
    }).catch((e)=>{
        console.log(e)
    })
  }