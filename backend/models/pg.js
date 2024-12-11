//creating pg details schema
const mongoose = require('mongoose');

const pgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true,
    },
    singleRoom:{
        type:Number,
        pictures:[String],
    },
    doubleRoom:{
        type:Number,
        pictures:[String],
    },
    tripleRoom:{
        type:Number,
        pictures:[String],
    },
    fooding:{
        type:Boolean,
        required:true,
    },

    foodingType:{
        type:[String],
        enum:['veg','non-veg'],
        required:true,
    },
    ac:{
        type:Boolean,
        required:true,
    },
    cctv:{
        type:Boolean,
        required:true,
    },
    wifi:{
        type:Boolean,
        required:true,
    },
    laundry:{
        type:Boolean,
        required:true,
    },
    proffesion:{
        type:String,
        required:true,
    },
    parking:{
        type:Boolean,
        required:true,
    },
    security:{
        type:Boolean,
        required:true,
    },
    otherService:{
        type:[String],
        required:false,
    },
    timings:{
        type:String,
        required:true,
    },
    pictures:{
        type:[String],
        required:false,
    },
    owner: {
        type: String,
        required: true,
    },
    ownerPhone: {
        type: String,
        required: true,
    },
    ownerEmail: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Pg', pgSchema);