import adoptionDAO from "../dao/adoption.dao.js";

class AdoptionService {

    async getAllAdoptions() {
        return await adoptionDAO.getAll();
    }

    async getAdoptionById(id) {
        return await adoptionDAO.getById(id);
    }

    async createAdoption(adoption) {
        return await adoptionDAO.create(adoption);
    }

    async updateAdoption(id, data) {
        return await adoptionDAO.update(id, data);
    }

    async deleteAdoption(id) {
        return await adoptionDAO.delete(id);
    }

}

export default new AdoptionService();