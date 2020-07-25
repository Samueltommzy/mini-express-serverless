const User = require("../../models/User");

const createUser = async(data)=>{
    return await new User(data).save();
}
const updateUser = async(userId,data)=>{
    return await User.findOneAndUpdate({_id:userId},{$set:data},{new:true});
}
const getUser = async(userId)=>{
    return await User.findOne({_id:userId});
}
const getAllUsers = async()=>{
    return await User.find();
}

module.exports = {
    createUser,
    updateUser,
    getUser,
    getAllUsers
}