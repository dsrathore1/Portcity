import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: String,
    lang: String,
    repo_link: String,
    image_link: String,
    desc: String
});


const ProjectModel = mongoose.models.favProject || mongoose.model("favProject", Schema);

export default ProjectModel;