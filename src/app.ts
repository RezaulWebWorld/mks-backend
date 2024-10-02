import cors from "cors";

import globalErrorHandeler from "./middleware/globalerrorhandeler";
import routes from "./routes";
import notFound from "./middleware/notFound";

const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.use(globalErrorHandeler);

app.use(notFound);

export default app;
