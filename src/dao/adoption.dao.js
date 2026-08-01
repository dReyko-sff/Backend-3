import Adoption from "../models/adoption.model.js";

class AdoptionDAO {

    async getAll() {
        return await Adoption.find();
    }

    async getById(id) {
        return await Adoption.findById(id);
    }

    async create(adoption) {
        return await Adoption.create(adoption);
    }

    async update(id, data) {
        return await Adoption.findByIdAndUpdate(
            id,
            data,
            { new: true }
        );
    }

    async delete(id) {

        const result = await Adoption.findByIdAndDelete(id);

        return result;

    }

}

export default new AdoptionDAO();