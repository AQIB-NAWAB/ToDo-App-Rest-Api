const { getToDo, saveTodo, updateToDo, deleteToDo } = require("./controller");

const router=require("express").Router();


router.get("/",getToDo)
router.post("/save",saveTodo)
router.post("/update",updateToDo);
router.post("/delete",deleteToDo)
module.exports=router