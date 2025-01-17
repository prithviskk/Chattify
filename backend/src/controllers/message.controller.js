import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId } from "../lib/socket.js";
import {io } from "../lib/socket.js"
export const getUsers  =async(req,res)=>{
    try{

        const loggedInUserId= req.user._id;
        const filteredUser= await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUser);
    }
    catch(error){
        console.error("Error in getUsers:",error.message);
        res.status(500).json({error:"internal Server error"});
    }
}

export const getMessages=async(req,res)=>{
    try{
        const {id:userToChatId} =req.params;
        console.log("userToChatId",req.params)
        const myId = req.user._id;
        const messages= await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId ,receiverId:myId}  
            ],
        })
        res.status(200).json(messages);
    }catch(error){
        console.error("Error in generating messages controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
    
}

 export const sendMessage=async(req,res)=>{
    try{

        const {text,image}=req.body;
        const {id:receiverId}=req.params;
        const senderId =req.user._id;

        let imageUrl;
        if(image){
              
            const uploadResponse =await cloudinary.uploader.upload(image);
            imageUrl =uploadResponse.secure_url;
        }

        const newMessage =new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl,
        });

        await newMessage.save();

        // Realtime functionality achieved using socket.io
        const receiverSocketId =getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }
        res.status(201).json(newMessage);
    }
    catch(error){
        console.error("Error in send message controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
 }