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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const validateEnv_1 = __importDefault(require("./util/validateEnv"));
const note_1 = __importDefault(require("./models/note"));
const app = (0, express_1.default)();
const PORT = process.env.port || 8001;
//For post request. They allow the request body to work
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Gets all the notes
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Try catch is essentially for handeling errors
    try {
        const notes = yield note_1.default.find();
        res.json(notes);
    }
    catch (error) {
        console.log(error);
    }
}));
//Creates a note
app.post('/post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_1.default.create(req.body);
        res.json(notes);
    }
    catch (error) {
        console.log(error);
    }
}));
// Connects to database
mongoose_1.default
    .connect(validateEnv_1.default.MONGO_CONNECTION_STRING)
    .then(() => {
    console.log('Mongoose Connected');
    app.listen(8000, () => {
        console.log(`Listening to app on port ${PORT}`);
    });
})
    .catch(() => {
    console.log('failed to fetch');
});
//shift alt f alighns code
