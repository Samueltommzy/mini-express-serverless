const userService = require("../services/userservice/user");

const createUser = (req,res)=>{
    const userData = req.body;
    userService.createUser(userData).then((data)=>{
        res.status(201).json({
            data:data,
            message:"User created"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"An error occured",
            error:err
        })
    })
}
const getAllUsers = (req,res)=>{
    userService.getAllUsers().then((data)=>{
        res.status(200).json({
            data:data,
            message:"Users loaded"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"An error occured",
            error:err
        })
    })
}

const getUser = (req,res)=>{
    const {userId} = req.query;
    userService.getUser(userId).then((data)=>{
        res.status(200).json({
            data:data,
            message:"User loaded"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"An error occured",
            error:err
        })
    })
}

const updateUser = (req,res)=>{
    const {userId} = req.query;
    const data = req.body;
    userService.updateUser(userId,data).then((data)=>{
        res.status(200).json({
            data:data,
            message:"User updated"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"An error occured",
            error:err
        })
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser
}