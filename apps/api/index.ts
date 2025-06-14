import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Orion API is running on port ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Orion API get test successful" });
});




