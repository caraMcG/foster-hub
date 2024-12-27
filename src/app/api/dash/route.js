import connectDB from "../../../libs/mongodb";
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';
import Animal from "../../../models/Animal";
import mongoose from "mongoose";


//Fetch All dashboard data 
export async function GET(req){

    try{
        
        const session = await getServerSession(options);

        if(!session){
            return new Response(JSON.stringify({error: 'User not authenticated'}),{status: 401});
        }

        const userId = session.user.id;
        // Convert userId to ObjectId for proper matching
        const userObjectId = mongoose.Types.ObjectId.createFromHexString(userId);
        
        await connectDB();

        const animals =  await Animal.aggregate([
        
            {
                $match: {  fosteredBy: userObjectId },
            },
            {
            $lookup: {
                from: "animal_clearance",   //collection to join with
                localField: "_id",          //Field in animals collection
                foreignField: "animal_id", //Field in animal_clearance collection
                as: "clearanceData"
                }
            }
        ])

        return new Response(JSON.stringify({ animals }),{ status: 200 })

    }catch(error){
        console.error('Error fetching dashboard data:', error);
        return new Response(JSON.stringify({error: 'Failed to fetch dashboard data'}),{status: 500});
    }
}