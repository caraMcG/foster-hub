import mongoose from "mongoose";

const eventRsvpSchema = new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    foster_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    foster_attending: { type: Boolean, required: true },
    animals_attending: [{ type: mongoose.Schema.Types.ObjectId, ref: "Animal" }],
    date_attending: { type: Date, required: true }
});

const EventRSVP = mongoose.models.EventRSVP || mongoose.model("EventRSVP", eventRsvpSchema);

export default EventRSVP;

  