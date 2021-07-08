import mongoose  from "mongoose";

const reportSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    path: {
        type: String, 
        required: true
    },

    versions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Version'
    }]
});

const Report = mongoose.model('Report', reportSchema);
export default Report;