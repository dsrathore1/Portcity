import { NextResponse } from "next/server.js";
import connectDB from "@/helper/connectDB.js";
import mpModel from "@/app/Model/favProjects.js";


connectDB();

export async function GET(req) {
    try {

        const result = await mpModel.find({});

        return NextResponse.json(result);

    } catch (error) {
        console.log(error)
    }
}

export async function POST(req) {
    try {
        const createData = new mpModel({
            title: "My Digital Canvas",
            lang: "JavaScript",
            repo_link: "https://github.com/dsrathore1/Personal-Porfolio",
            image_link: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        });

        const dataSave = await createData.save();

        return NextResponse.json(dataSave);

    } catch (error) {
        console.log(error);
    }
}