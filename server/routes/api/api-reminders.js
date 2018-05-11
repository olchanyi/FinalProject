var express = require("express");
var router = express.Router();
var reminderController = require("../../controllers/reminderController");

const ReminderService = reminderController.ReminderService;

router.use((req, res, next)=>{
  res.set({
    // Allow AJAX access from any domain
    "Access-Control-Allow-Origin": "*",
    // Allow methods and headers for 'preflight'
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
    "Content-type": "application/json"
  });
  // if this is a preflight, we're done and can send the response with our headers
  if(req.method == 'OPTIONS'){
    return res.status(200).end();
  }
  next();
})

// reminder list
// WORKING
router.get("/", (req, res, next)=>{
  ReminderService.list()
    .then((todoitems)=>{
      res.status(200);
      res.send(JSON.stringify(todoitems));
    })
});

// reminder/:remindrid findOne
// WORKING
router.get("/:reminderid", (req, res, next)=>{
  ReminderService.read(req.params.reminderid)
    .then((todoitem)=>{
      res.status(200);
      console.log("here", todoitem)
      res.send(JSON.stringify(todoitem));
    }).catch((err)=>{
    	res.status(404);
    	res.end();
    });
});

// /reminders POST create
//WORKING

router.post("/", (req, res, next)=>{
	var todoitem = {
      item: req.body.toDo,
      importance: req.body.importance
  }
  	ReminderService.create(todoitem)
  	    .then((todoitem)=>{
      res.status(201);
      res.send(JSON.stringify(todoitem));
    }).catch((err)=>{
    	res.status(404);
    	res.end();
    });

});

// /reminders/:remindrid PUT - update
//WORKING
router.put("/:reminderid", (req, res, next)=>{
	console.log(`putting ${req.params.reminderid}`);
	let putdata = req.body;
	ReminderService.update(req.params.reminderid, putdata)
		.then((updatedTodoitem)=>{
      res.status(200);
      res.send(JSON.stringify(updatedTodoitem));
    }).catch((err)=>{
    	res.status(404);
    	res.end();
    });

});

// /reminders/:remindrid DELETE - delete
// WORKING
router.delete("/:reminderid", (req, res, next)=>{
	console.log(`deleting ${req.params.reminderid}`)
	ReminderService.delete(req.params.reminderid)
		.then((todoitem)=>{
      res.status(200);
      res.send(JSON.stringify(todoitem));
    }).catch((err)=>{
    	res.status(404);
    	res.end();
    });

});

// export our router
module.exports = router;