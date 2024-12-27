import connectDB from "../../../libs/mongodb";
import Animal from "../../../models/Animal";


//Fetch All Animals 
export async function GET(req){

    try{
        // connect
        await connectDB();
        //fetch all animals from collection
        const animals = await Animal.find({});
        //response
        return new Response(JSON.stringify(animals),{status: 200});

    }catch(error){
        console.error('Error fetching animals:', error);
        return new Response(JSON.stringify({error: 'Failed to fetch animals'}),{status: 500});
    }
}

//CREATE new Animal
export async function POST(req){
    console.log("in post!");
    try{
        //connect 
        await connectDB();
        //data
        const data = await req.json();
        console.log(data);
        //create
        const newAnimal = await Animal.create(data);

        return new Response(JSON.stringify({message:'Animal created successfully!', id: newAnimal._id}),{status: 201});

    }catch(error){
        console.error('Error creating animal:', error);
        return new Response(JSON.stringify({error: 'Failed to create animal'}),{status: 500});
    }
}

//DELETE Animal
export async function DELETE(req) {
  try{
        const id = req.nextUrl.searchParams.get("id");
        await connectDB();
        await Animal.findByIdAndDelete(id);
        return new Response(JSON.stringify({message:'Animal deleted'}),{status: 202});
    }catch(error){
        console.error('Error creating animal:', error);
        return new Response(JSON.stringify({error: 'Failed to create animal'}),{status: 500});
    }
}