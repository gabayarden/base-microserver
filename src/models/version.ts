import mongoose  from "mongoose";

const versionSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

versionSchema.pre('findOne', function(next){
    this.populate('comments', '_id comment by');
    next();
});

const Version = mongoose.model('Version', versionSchema);
export default Version;