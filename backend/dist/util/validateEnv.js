"use strict";
//Envalid is a package used for validating and accesing enviroment variables.
//Here there is a setup for two variables in the env file: The Mongo URI and the port
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("envalid/dist/validators");
const envalid_1 = require("envalid");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    MONGO_CONNECTION_STRING: (0, validators_1.str)(),
    port: (0, validators_1.port)(),
});
