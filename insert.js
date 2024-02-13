const dbConnect = require('./mongodb');

const insertData = async () => {
  try {
    let data = await dbConnect();
    let result = await data.insertMany([
      { name: 'Bishal', branch: 'micromax', state: 'India', age: 49 },
      { name: 'Gopal', branch: 'oppo', state: 'pakistan', age: 12 },
      { name: 'Ram', branch: 'apple', state: 'America', age: 29 }
    ]);
    if (result.acknowledged) {
      console.warn("Data is inserted");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

insertData();
