import { NextResponse } from "next/server.js";

import { getDatabase } from "../../../helper/connectDB2";

export async function GET(req) {

    try {
        const db = await getDatabase();
        const collection = db.collection('Projects');

        const data = await collection.find({}).toArray();

        // console.log(data);

        return NextResponse.json(data, {
            message: "Your DB is connected successfully"
        });

    } catch (error) {
        console.log(error)
    }

}