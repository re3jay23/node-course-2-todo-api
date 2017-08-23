// const MongoClient = require('mongodb').MongoClient;

const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to MongoDB')
	}
	console.log('Connected to MongoDB server')
	
	// db.collection('Todos').insertOne({
		// text:"Something to do",
		// complete:false
	// },(err, result)=>{
		// if(err){
			// return console.log('unable to connect to Todos',err)
		// }
		// console.log(JSON.stringify(result.ops, undefined,2))
	// })
	
	//insert new docs into Users collection {name, age, location}
	db.collection('Users').insertOne({
		name:"Ari",
		age:32,
		location:"USA"
	},(err,result)=>{
		if(err){
			return console.log('Cannot connect to Users collection');
		}
		console.log(JSON.stringify(result.ops, undefined,2))
	})
	
	db.close();
})