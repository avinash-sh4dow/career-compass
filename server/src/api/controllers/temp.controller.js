const TempService = require("../services/temp.service");
const tempValidator = require("../validators/temp.validators");

class TempController {
    static async addData(req, res) {
        try {
            const payload = req.body;
            console.log(payload);
            const validatedResult = tempValidator.create.body.validate(payload);
            if (!validatedResult.error) {
                await TempService.add(validatedResult.value);
                res.status(200).send({ 
                    message: "Data added successfully"
                });
            } else {
                res.status(400).send({
                    message: "Error in payload",
                    error: validatedResult.error.details
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Internal server error",
                error: error.message
            });
        }
    }

    static async getData(req, res) {
        try {
            const data = await TempService.getAll();
            res.status(200).send({
                message: "got data",
                data: data
            });
        } catch (error) {
            console.error('Error in getData:', error);
            res.status(500).send({
                message: "Internal server error",
                error: error.message
            });
        }
    }
}

module.exports = TempController;