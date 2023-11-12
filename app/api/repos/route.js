import axios from "axios";
import { NextResponse } from "next/server";
import connectDB from "@/helper/connectDB";

connectDB();


export async function GET(req) {
    try {
        const accessToken = process.env.ACCESS_TOKEN
        const result = await axios.get("https://api.github.com/users/dsrathore1/repos?page=1", {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });
        const result2 = await axios.get("https://api.github.com/users/dsrathore1/repos?page=2", {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });

        const result3 = await axios.get("https://api.github.com/users/dsrathore1/repos?page=3");

        const repos = result.data;

        const repos2 = result2.data;

        const repos3 = result3.data


        return NextResponse.json([repos, repos2, repos3], {
            status: 200,
            statusText: "FETCHED"
        });
    } catch (error) {
        console.log(error)
    }
}