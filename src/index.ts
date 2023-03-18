import dotenv from "dotenv";
dotenv.config();

import { configureExpress } from "./config/express.config";
import configureApolloServer from "./config/apollo.config";
import { connectDB } from "./config/mongo.config";

connectDB();
const [app, port] = await configureExpress();
const [server, apollo] = await configureApolloServer(app);

export default server;