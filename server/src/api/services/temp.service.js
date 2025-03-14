const TempModel = require("../models/Temp.model");

class TempService {
    static async add(data) {
        const temp = TempModel(data);
        await temp.save();
    }
   
    static async getAll(data) {
        const all = TempModel.find();
        return all;
    }
}

module.exports = TempService;