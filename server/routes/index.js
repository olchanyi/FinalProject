var express = require("express");
var router = express.Router();
var ToDoItem = require("../models/modelToDoItem");
const util = require("util");

var mongoose = require("mongoose");

var connectionString = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0-shard-00-00-yg55d.mongodb.net:27017,cluster0-shard-00-01-yg55d.mongodb.net:27017,cluster0-shard-00-02-yg55d.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
mongoose.connect(connectionString);
var Item = mongoose.model("todoitems", ToDoItem.schema);

var reminderController = require('../controllers/reminderController');
const ReminderService = reminderController.ReminderService;


router.get("/", function(req, res, next) {
    Item.find({}, (err, items)=>{
      if (err){console.log(err)}
      res.render("index", { myToDoList: items});
    });
});

//Add Reminder
router.post("/add", function (req, res) {
    var reminder = {
      item: req.body.toDo,
      importance: req.body.importance}
    var memo = new ToDoItem(reminder);
    console.log(reminder);
    console.log(memo);
    memo.save()
      .then(()=>{
        res.redirect("/");
      })
      .catch((err)=>{
        if (err){
          console.log(err);
          res.redirect("/");
        }
      });
});

//Delete Reminder
router.get("/delete/:reminderid", (req, res, next)=>{
  Item.remove({"_id": req.params.reminderid})
          .then(()=>{
        res.redirect("/");
      })
      .catch((err)=>{
        if (err){
          console.log(err);
          res.redirect("/");
        }
      });
  });

//Update Reminder
router.get("/update/:reminderid", (req, res, next)=>{
  Item.findOne({"_id": req.params.reminderid})
          .then((todoitem)=>{
        res.render("update", {update_item: todoitem});
      })
      .catch((err)=>{
        if (err){
          console.log(err);
          res.redirect("/");
        }
      });
  });

router.post("/update/:reminderid", (req, res, next)=>{
  Item.findOne({"_id": req.params.reminderid})
          .then((todoitem)=>{
            var update_info = {
              item: req.body.toDo,
              importance: req.body.importance
            }
            todoitem.set(update_info);
            todoitem.save();
            res.redirect("/");
      })
      .catch((err)=>{
        if (err){
          console.log(err);
          res.redirect("/");
        }
      });
    
  });

module.exports = router;
