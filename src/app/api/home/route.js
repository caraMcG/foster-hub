import connectDB from "../../../libs/mongodb";
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';
import Animal from "../../../models/Animal";
import Event from "../../../models/Event";
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

       
        // Fetching totals for home page
        const totalAnimals = await Animal.countDocuments();
        const totalFostered = await Animal.countDocuments({ in_foster: true });

        const today = new Date();
        // Fetching upcoming events for home page
        const upcomingEvents = await mongoose.models.Event.find({
            end: { $gte: today } // Fetch events starting from now
        }).sort({ end: 1 }).limit(3); // Limit to 3 upcoming events

        return new Response(JSON.stringify({ totalAnimals, totalFostered, upcomingEvents }),{ status: 200 });

    }catch(error){
        console.error('Error fetching homepage data:', error);
        return new Response(JSON.stringify({error: 'Failed to fetch homepage data'}),{status: 500});
    }
}