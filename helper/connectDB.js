import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Testing_DB"
        });

        console.log(`Your connection has established with database name :- ${connection.name}`);

    } catch (error) {
        console.log("Connection got failed because of ", error);
    }
}

export default connectDB;