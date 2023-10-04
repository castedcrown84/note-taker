"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const validateEnv_1 = __importDefault(require("./util/validateEnv"));
const notes_1 = __importDefault(require("./routes/notes"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const PORT = process.env.port || 8001;
//For post request. They allow the request body to work
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.use('/apiroute', notes_1.default);
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
