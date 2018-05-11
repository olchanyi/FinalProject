var ToDoItem = require("../models/modelToDoItem");

class ReminderService{
// list
static list(){
  		return ToDoItem.find({})
    		.then((todoitem)=>{
      		return todoitem;
    });
}

// findOne

static read(id){
  		return ToDoItem.findOne({"_id": id})
    		.then((todoitem)=>{
      		return todoitem;
    });
}

// create

static create(obj){
   var todoitem = new ToDoItem(obj);
   return todoitem.save();
}

// update

static update(id, data){
    return ToDoItem.findOne({"_id": id})
     .then((todoitem)=>{
       todoitem.set(data);
       todoitem.save();
       return todoitem;
     });
}

// delete

static delete(id){
  return ToDoItem.remove({"_id": id})
    .then((obj)=>{
      return obj;
  })
}

}

module.exports.ReminderService = ReminderService;