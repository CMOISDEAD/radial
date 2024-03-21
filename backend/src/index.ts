import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));

app.use(authRoutes);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
