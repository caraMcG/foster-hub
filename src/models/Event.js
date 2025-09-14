import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    event_title: { type: String, required: true },
    start:  { type: Date, required: true },
    end: { type: Date, required: true},
    desc: { type: String, required: true },
    max_attendance: { type: Number, required: true }
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;