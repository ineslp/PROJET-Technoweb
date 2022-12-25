const Users = require('../models/users');

//POST users
const newUsers = (req, res) => {
    //check if the tea name already exists in db
    Users.findOne({ name: req.body.name }, (err, data) => {

        //if users not in db, add it
        if (!data) {
            //create a new tea object using the Tea model and req.body
            const newUsers = new Users({
                name:req.body.name,
                age: req.body.age, // placeholder for now
                sexe: req.body.sexe,
                country: req.body.country,
            })

            // save this object to database
            newUsers.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if there's an error or the user is in db, return a message         
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"User already exists"});
        }
    })    
};


//GET all users
const getAllUsers = (req, res) => {
    Users.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//DELETE users
const deleteAllUsers = (req, res) => {
    Tea.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Complete delete failed"});
        }
        return res.json({message: "Complete delete successful"});
    })
};


const getOneUsers = (req, res) => {
    let name = req.params.name; //get the users name

    //find the specific users with that name
    Users.findOne({name:name}, (err, data) => {
    if(err || !data) {
        return res.json({message: "User doesn't exist."});
    }
    else return res.json(data); //return the user object if found
    });
};

//POST 1 users comment
const newComment = (req, res) => {
    let name = req.params.name; //get the users to add the comment in
    let newComment = req.body.comment; //get the comment
    //create a comment object to push
    const comment = {
        text: newComment,
        date: new Date()
    }
    //find the users object
    Users.findOne({name:name}, (err, data) => {
        if(err || !data || !newComment) {
            return res.json({message: "User doesn't exist."});
        }
        else {
            //add comment to comments array of the users object
            data.comments.push(comment);
            //save changes to db
            data.save(err => {
                if (err) { 
                return res.json({message: "Comment failed to add.", error:err});
                }
                return res.json(data);
            })  
        } 
    })
  };
  

//DELETE 1 user
const deleteOneUsers = (req, res) => {
    let name = req.params.name; // get the name of user to delete

    Users.deleteOne({name:name}, (err, data) => {
    //if there's nothing to delete return a message
    if( data.deletedCount == 0) return res.json({message: "User doesn't exist."});
    //else if there's an error, return the err message
    else if (err) return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({message: "User deleted."});
    });
};


//export controller functions
module.exports = {
    getAllUsers, 
    newUsers,
    deleteAllUsers,
    getOneUsers,
    newComment,
    deleteOneUsers
};
