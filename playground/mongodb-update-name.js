const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Cannot connect to MongoDB',err);
	}
	db.collection('Users').update({
		name:'ari'
	},{$set:{
		name:'Kang Ari'
	},$inc:{
		age:1
	}},{
		returnOriginal:true
	}).then((res)=>{
		console.log(res)
	})
})