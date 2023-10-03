import "dotenv";
import express from "express";
import cors from "cors";
import PatientRoute from "./routes/PatientRoutes.js";
import RoomRoute from "./routes/RoomRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
  res.send("Hello World Guys");
});

app.use(PatientRoute);
app.use(RoomRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
