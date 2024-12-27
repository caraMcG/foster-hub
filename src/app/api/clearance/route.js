import connectDB from "../../../libs/mongodb";
import Animal_Clearance from "../../../models/Clearance";

export async function GET(req) {
    try{
        //connect
        await connectDB(); 
        //fetch all clearance
        const animal_clearance = await Animal_Clearance.find();
        console.log(animal_clearance);
        //response 
        return new Response(JSON.stringify(animal_clearance),{status: 200});
    } catch (error) {
        console.error('Error fetching animal clearance:', error);
        return new Response(JSON.stringify({error: 'Error fetching animal clearance'}),{status: 500});
    }
}
