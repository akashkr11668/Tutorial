const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/tut", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Succesfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

  const student = new mongoose.Schema({
    name:String,
    sex:String,
    height:Number,
    workout:Boolean,
  })

  const Student = new mongoose.model("Student" ,student)

  const adder = async () =>{

  // const Data = await Student.create ({
  //   name:"Ritik",
  //   sex:"F",
  //   height:6,
  //   workout:false,
  // })

  // const find1 = await Student.find()
    
    /* 
      not a function just usecases, not use as code =>    operators  {
          eq => equal
          gt = greater than
          gt => greater than queal to
          lt => less than

          refer for all operators =>  https://www.mongodb.com/docs/manual/reference/operator/
    }
    */

    const find1 = await Student.find({height:{$in:[5.6,7]}})
        console.log(find1)

} 
adder()