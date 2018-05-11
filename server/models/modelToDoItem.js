var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var schema = mongoose.Schema({
 		item: {type: String, required:true},
 		importance: {type: String, required:false},
	});

module.exports = mongoose.model("ToDoItem", schema);
