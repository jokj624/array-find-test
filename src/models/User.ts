import mongoose from "mongoose";
const ResultSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    tendency: {
        type: String
    }
});

const UserSchema = new mongoose.Schema({
    roomId: {
        type: String,
    },
    result: [ResultSchema]
});

export default mongoose.model<mongoose.Document>("User", UserSchema);
