import mongoose from "mongoose";

const clearanceSchema = new mongoose.Schema({
    animal_id: {type: String, required: true },
    type: { type: String, required: true },
    notes: { type: String, required: true },
    cleared: { type: Boolean, required: true },
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: false},

});

///name of model in code, schema, exact name of mongodb collection to use (mongoose.model)
const Animal_Clearance = mongoose.models.Animal_Clearance || mongoose.model('Animal_Clearance', clearanceSchema, 'animal_clearance');

export default Animal_Clearance;
