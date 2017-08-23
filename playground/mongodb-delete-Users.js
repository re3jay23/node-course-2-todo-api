const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to mongoDB');
	}
	// db.collection('Users').deleteMany({name:'adi'}).then((res)=>{
		// console.log(res)
	// })	
	db.collection('Users').findOneAndDelete({_id: new ObjectID("599515318daf6d1f2c7a8be1")}).then((res)=>{
		console.log(JSON.stringify(res,undefined,5))
	})
})