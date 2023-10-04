"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_1 = require("../controllers/notes");
const Router = express_1.default.Router();
//Route for getting all Notes
Router.get('/', notes_1.getNotes);
//Route for getting a single note
Router.get('/:id', notes_1.getNote);
//Router for creating a Note and adding it to database
Router.post('/post', notes_1.createNote);
//Route for updating Note
Router.patch('/:id', notes_1.upDateNote);
//Route for deleting not
Router.delete('/:id', notes_1.deleteNotes);
exports.default = Router;
