import express from "express";
import morgan from "morgan";
import cors from "cors";
import placesRoute from "./routes/places";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));

app.use(placesRoute);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
