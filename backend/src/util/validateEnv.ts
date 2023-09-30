//Envalid is a package used for validating and accesing enviroment variables.
//Here there is a setup for two variables in the env file: The Mongo URI and the port

import {port, str} from "envalid/dist/validators"
import { cleanEnv } from "envalid";

export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    port: port(),
})