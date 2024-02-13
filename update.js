const dbConnect = require('./mongodb');

const updateData = async () => {
  
    let data = await dbConnect();
    let result=await data.updateMany(
        {name:'Bishal'},{
        $set:{name:'Likhita'}
    }
    );
    console.warn(result)
}
updateData();