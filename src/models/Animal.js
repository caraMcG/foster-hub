import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    description: { type: String, required: true },
    in_foster: { type: Boolean, required: true },
    adopted:  { type: Boolean, required: true },
    intake_date:  { type: Date, required: false },
    adopt_date: { type: Date, required: false},
    // medical/behavioural clearance
    clearance: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal_Clearance',
    }],
    imageUrls: {type: [String], required: false},
    fosteredBy: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

///name of model in code, schema, exact name of mongodb collection to use (mongoose.model)
//the below works because the db collection is animals, but 'Animal' here is lower cased and pluralized by mongoose to find in db so its a match.
const Animal = mongoose.models.Animal || mongoose.model('Animal', animalSchema);

export default Animal;