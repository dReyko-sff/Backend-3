import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({

    petName: {
        type: String,
        required: true
    },

    owner: {
        type: String,
        required: true
    },

    species: {
        type: String,
        required: true
    },

    adopted: {
        type: Boolean,
        default: false
    }

});

const Adoption = mongoose.model("Adoption", adoptionSchema);

export default Adoption;