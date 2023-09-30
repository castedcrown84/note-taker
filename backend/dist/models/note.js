"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: 'You need to add a title',
    },
    text: {
        type: String,
    },
}, { timestamps: true });
const Notes = (0, mongoose_1.model)('Note', noteSchema);
exports.default = Notes;
