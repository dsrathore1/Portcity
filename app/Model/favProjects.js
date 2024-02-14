import mongoose from "mongoose";

const Schema = mongoose.Schema({
    title: String,
    lang: String,
    repo_link: String,
    image_link: String,
});

const fpModel = mongoose.models.favProject || mongoose.model("favProject", Schema);

export default fpModel;