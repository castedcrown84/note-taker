"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotes = exports.upDateNote = exports.getNote = exports.createNote = exports.getNotes = void 0;
const note_1 = __importDefault(require("../models/note"));
const mongoose_1 = __importDefault(require("mongoose"));
//controller function that gets all notes
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_1.default.find();
        res.status(200).json(notes);
    }
    catch (err) {
        console.log(err);
    }
});
exports.getNotes = getNotes;
//controller function that creates notes and adds it to the database
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, text } = req.body;
        const note = yield note_1.default.create({ title, text });
        if (!note) {
            throw new Error('Needs valid input');
        }
        res.status(200).json(note);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createNote = createNote;
//controller function for getting a single note
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.isValidObjectId(id)) {
            res.status(400).json({ Error: 'Invalid ID' });
        }
        const note = yield note_1.default.findById(id);
        if (!note) {
            res.status(400).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getNote = getNote;
//controller function for updating a single note
const upDateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const newTitle = req.body.title;
    const newText = req.body.text;
    try {
        if (!mongoose_1.default.isValidObjectId(id)) {
            throw new Error('invalid Id');
        }
        if (!newTitle) {
            throw new Error('Note must have a title');
        }
        const note = yield note_1.default.findById(id);
        if (!note) {
            throw new Error('Note not found');
        }
        note.title = newTitle;
        note.text = newText;
        const upDatedNotes = yield note.save();
        res.status(200).json(upDatedNotes);
    }
    catch (error) {
        console.log(error);
    }
});
exports.upDateNote = upDateNote;
//Controller function for deleting a note
const deleteNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!mongoose_1.default.isValidObjectId(id)) {
            throw Error('invalid Id');
        }
        const note = yield note_1.default.findOneAndDelete({ _id: id });
        if (!note) {
            res.status(400).json({ error: 'Note does not exist' });
        }
        res.status(200).json(note);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteNotes = deleteNotes;
