import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: String,
    lang: String,
    repo_link: String,
    image_link: String,
});


const mpModel = mongoose.models.moreProject || mongoose.model("moreProject", Schema);

export default mpModel;