import connectDB from "../../../libs/mongodb";
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';
import Animal from "../../../models/Animal";
import Event from "../../../models/Event";
import EventRSVP from "../../../models/Event_rsvp";
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
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(today.getMonth() + 1);
        // Fetching upcoming events for home page
        const upcomingEvents = await Event.find({
            end: { $gte: today }, // Fetch events starting from now
            start: { $lte: oneMonthFromNow } // Fetch events within the next month
        }).sort({ end: 1 }).limit(5); // Limit to 3 upcoming events

        // Fetch rsvp counts for each upcoming event
        for(const event of upcomingEvents){
            const rsvpCount = await EventRSVP.countDocuments({ event_id: event._id });
            event.rsvpCount = rsvpCount;
            //   console.log(event.rsvpCount + ' is the rsvp count for event ' + event._id);
        }

        //Fetch if current user has RSVPed to any of the upcoming events
        for(const event of upcomingEvents){
            const userRSVP = await EventRSVP.findOne({ event_id: event._id, foster_id: userObjectId });
            event.userHasRSVPed = !!userRSVP;
            // console.log(event.userHasRSVPed + ' is the RSVP status for user for event ' + event._id);
        }
      
      
        // return new Response(JSON.stringify({ totalAnimals, totalFostered, upcomingEvents}),{ status: 200 });

        const upcomingEventsData = upcomingEvents.map(event => ({
        ...event.toObject(),
        rsvpCount: event.rsvpCount,
        userHasRSVPed: event.userHasRSVPed
        }));

        return new Response(JSON.stringify({ totalAnimals, totalFostered, upcomingEvents: upcomingEventsData }), { status: 200 });


    }catch(error){
        console.error('Error fetching homepage data:', error);
        return new Response(JSON.stringify({error: 'Failed to fetch homepage data'}),{status: 500});
    }
}