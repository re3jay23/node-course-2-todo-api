const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to MongoDB',err)
	}
	console.log('Connected to Mongodb');
	
	//find One and Update
	db.collection('Todos').findOneAndUpdate({
		_id:new ObjectID("59951e793d0a2e63962060a7")
		},{
			$set:{ 
					completed:false
		}},{
			returnOriginal:false
		}).then((res)=>{
			console.log(res);
		})
})