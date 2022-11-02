import Users from "../models/Users.js";

// CREATE
export const createUser = async (req, res, next) => {
    const newUser = new Users(req.body)

    try{
        const savedUsers = await newUser.save();
        res.status(200).json(savedUsers)
    }catch(err){
        next(err);
    }
}

// UPDATE
export const updateUser = async (req, res, next) => {
    try{
        const updatedUsers = await Users.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        res.status(200).json(updatedUsers)
    }catch(err){
        next(err);
    }
}

// DELETE
export const deleteUsers = async (req, res, next) => {
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }catch(err){
        next(err);
    }
}

// GET 
export const getUserById = async (req, res, next) => {
    try{
        const user = await Users.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// GET ALL
export const getAllUsers = async (req, res, next) => {
    try{
        const user = await Users.find();
        res.status(200).json(user);
    }catch(error){
        next(err);
    }
}