const { Schema, model } = require("mongoose");

const roleSchema = Schema({
    role: {
        type: String,
        require: [true, "Rol is required."],
    },
});

module.exports = model("Role", roleSchema);
