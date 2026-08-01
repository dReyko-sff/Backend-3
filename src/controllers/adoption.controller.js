import adoptionService from "../services/adoption.service.js";

class AdoptionController {

    async getAll(req, res) {

        try {

            const adoptions = await adoptionService.getAllAdoptions();

            res.status(200).json(adoptions);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    }

    async getById(req, res) {

        try {

            const adoption = await adoptionService.getAdoptionById(req.params.id);

            if (!adoption) {

                return res.status(404).json({
                    message: "Adopción no encontrada"
                });

            }

            res.status(200).json(adoption);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    }

    async create(req, res) {

        try {

            const adoption = await adoptionService.createAdoption(req.body);

            res.status(201).json(adoption);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    }

    async update(req, res) {

        try {

            const adoption = await adoptionService.updateAdoption(
                req.params.id,
                req.body
            );

            if (!adoption) {

                return res.status(404).json({
                    message: "Adopción no encontrada"
                });

            }

            res.status(200).json(adoption);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    }

    async delete(req, res) {

        try {

            const adoption = await adoptionService.deleteAdoption(req.params.id);

            if (!adoption) {

                return res.status(404).json({
                    message: "Adopción no encontrada"
                });

            }

            res.status(200).json({
                message: "Adopción eliminada"
            });

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    }

}

export default new AdoptionController();