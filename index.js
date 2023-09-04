const mongoose = require("mongoose");

// connection creation and creatin a new db
// mongoose.connect("mongodb://localhost:27017/firstdb") // its show error but thapa use like this
mongoose.connect("mongodb://127.0.0.1:27017/firstdb")
    .then(() => console.log("Connection Successfull...."))
    .catch((error) => console.log("Error agaya bhai ", error))

// Schema
// A Mongoose schema defines the structure of document,default values,validators etc


const mySchema = new mongoose.Schema({ // schema create kr k MySchema me uska instense create kiya hai
    // object ki trha 
    name: {
        type: String,
        required: true
    },
    roll: Number,
    active: Boolean,
    subject: String,
    date: {
        type: Date,
        default: Date.now
    }
})

// Model : (Collection ) jhn apka Data inter hoga
// ( ye by default collection k name ko plural krdyga)

const myCollection = new mongoose.model("MyCollection", mySchema);

// Create Documents and inserting


/*
  //1st Method to insert data

const fieldOne = new myCollection({
    name: "Sajid",
    roll: 231,
    active: true,
    subject: "Maths",
    title: "Level-1",
})

fieldOne.save()
// .save promise return krta hai.

*/

/* 2nd Method async await */

const insertFunc = async () => {
    try {   //it use for error handling
        // upper ki sb chezen try me hai.
        const fieldOne = new myCollection({
            name: "Sajid",
            roll: 231,
            active: true,
            subject: "Maths",
            title: "Level-1",
        })
        const result = await fieldOne.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

insertFunc();