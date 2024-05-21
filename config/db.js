import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://pratikpatil1311:Pratik4373@cluster0.7jdduuq.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
}