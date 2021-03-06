const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = Schema({
    token: {
        type: String,
        required: true
    },
    _utilisateurId: {
        type: Schema.Types.ObjectId,
        ref: "utilisateurs"
    },
    _stationId: {
        type: Schema.Types.ObjectId,
        ref: "stations"
    },
    tokenType: {
        type:String,
       enum: ["login", "restPassword"]
    }
 
});

module.exports = mongoose.model("tokens", tokenSchema);





