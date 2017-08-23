const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to MongoDB')
	}
	
	// db.collection('Todos').find({
		// _id: ObjectID('59951e793d0a2e63962060a7')
	// }).toArray().then((docs)=>{
		// console.log('Todos');
		// console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
		// console.log('Unable to fetch Todos',err);
	// });
	
	// db.collection('Todos').find({
		
	// }).count().then((count)=>{
		// console.log(`Todos count:${count}`);
	// },(err)=>{
		// console.log('Unable to fetch Todos',err);
	// });
	
	db.collection('Users').find({
		name:"adi"
	}).toArray().then((docs)=>{
		console.log('Users');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to fetch Users')
	})
	
	//db.close();
})