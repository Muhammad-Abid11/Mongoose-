// --------------------x----------------
// Connection   Video 1


const mongoose = require("mongoose");

// connection creation and creatin a new db
// mongoose.connect("mongodb://localhost:27017/firstdb") // its show error but thapa use like this
mongoose.connect("mongodb://127.0.0.1:27017/firstdb")
    .then(() => console.log("Connection Successfull...."))
    .catch((error) => console.log("Error agaya bhai ", error))


// --------------------x----------------


// Schema Video 2
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


// --------------------x----------------
// Models Video 2

// Model : (Collection ) jhn apka Data inter hoga
// ( ye by default collection k name ko plural krdyga)

const myCollection = new mongoose.model("MyCollection", mySchema);


// --------------------x----------------
// Create Documents and inserting Video 12(3)


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

/* 

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

 */

// Insert Many Fields  Video 13(4)


const insertFunc = async () => {
    try {
        const fieldOne = new myCollection({
            name: "MutiOne",
            roll: 231,
            active: true,
            subject: "Maths",
            title: "Level-1",
        })

        const fieldTwo = new myCollection({
            name: "Muti_Two",
            roll: 231,
            active: true,
            subject: "Maths",
            title: "Level-1",
        })
        const fieldThree = new myCollection({
            name: "Muti_Three",
            roll: 231,
            active: true,
            subject: "Maths",
            title: "Level-1",
        })
        const fieldFour = new myCollection({
            name: "Muti_Four",
            roll: 231,
            active: true,
            subject: "Maths",
            title: "Level-1",
        })

        // const result = await fieldOne.save() ye line me change ayega
        const result = await myCollection.insertMany([fieldOne, fieldTwo, fieldThree, fieldFour])
        //myCollection k ander sb fields add krdo
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// insertFunc();    //ye line comment krne sy mongoose bar bar data enter nhi kryga

// --------------------x----------------
// Read Documents 1 Video 14
//Un-Comment it when other Comparions Operation not use
/*

const getDocument = async () => {
    // const result = await myCollection.find()                 //for all data
    // const result = await myCollection.find({ name: "Abid" });   // for query search
    const result = await myCollection.find({ name: "Abid" }, { name: 1 });   // for query search only show name field
            // or both up down same
    const result = await myCollection.find({ name: "Abid" }).select({ name: 1 });   // for query search only show name field
    console.log(result)
}
getDocument();

*/
// --------------------x----------------

// Read Documents 2 With Comparion Operator Query Video 15
//Un-Comment it when other Comparions Operation not use

// $eq equalto
// $gt greaterThan
// $gte greaterThan equalto
// $in In
// $lt  lessthan
// $lte  lessthan equalto
// $ne not equalto
// $nin not in

/*

const getDocument = async () => {
    try {
        const result = await myCollection
            // .find({ roll: { $gt: 50 } });    //greaterthan 50
            .find({ subject: { $in: ["English", "Maths"] } }) //in operator can take multiple search in an array
            .select({ name: 1, subject: 1 });
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
getDocument();

 */
// --------------------x----------------

// Read Documents 3 with Logical Operator Query Video 16
//Un-Comment it when other Comparions Operation not use

// $and
// $or
// $nor
// $not
/* 

const getDocument = async () => {
    try {
        const result = await myCollection
            .find({
                $nor: [ // $and take an array jis me ap condition rakho jo wo check kr k search kry 
                    { name: "Abid" }, { roll: { $gt: 50 } }
                ]
            })
            .select({ name: 1, roll: 1 });
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
getDocument();

 */


// --------------------x----------------

// Read Documents 3 with Logical Operator Query Video 17
//Un-Comment it when other Comparions Operation not use


const getDocument = async () => {
    try {
        const result = await myCollection
            .find()
            .select({ name: 1 })
            // .countDocuments();// for counting documents only show number
            .sort({ name: 1 }) //arrange according to "name" field (1 AtoZ)(-1 ZtoA) 
        // first capital A to Z
        // Second small a to z
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
// getDocument();  //Un-comment it when you want fetch data


// --------------------x----------------

// Update Document Video 18

const updateDoc = async (_id) => {
    try {
        // const result = await myCollection.updateOne({ _id: _id }, { $set: { name: "Muti_Two_Updated1" } }) //ye update krne k bad console me Done keh dyga just
        //same updateOne({_id}) hoto usy single use kro
        // const result = await myCollection.findByIdAndUpdate({ _id }, { $set: { name: "Muti_Two_Mongoose2" } }) //ye update krne k bad OLD result show kryga
        // const result = await myCollection.findByIdAndUpdate({ _id }, { $set: { name: "Muti_Two_Update_hogya3" } }, { new: true })//ye update krne k bad NEW result show kryga
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
}

// updateDoc("64f657f1b81ceacfebd22b93"); //id ap dogy


// --------------------x----------------

// Delete Documents Video 19

const deleteDoc = async (_id) => {
    try {
        // const result = await myCollection.deleteOne({ _id: _id }) // ye sirf delete kr k OK show krdyga
        const result = await myCollection.findByIdAndDelete({ _id: _id })// delete kr k bad "deleted" value bhi show kryga 
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
}

deleteDoc("64f657f1b81ceacfebd22b94"); //id ap dogy
