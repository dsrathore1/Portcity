import axios from "axios";
import { NextResponse } from "next/server";
import connectDB from "@/helper/connectDB";

connectDB();


export async function GET(req) {
    try {
        const accessToken = process.env.ACCESS_TOKEN
        const result = await axios.get("https://api.github.com/users/dsrathore1/repos", {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });
        const repos = result.data;

        return NextResponse.json(repos, {
            status: 200,
            statusText: "FETCHED"
        });
    } catch (error) {
        console.log(error)
    }
}