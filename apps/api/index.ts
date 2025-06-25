import express, { Request, Response } from "express";
import cors from "cors";
import { prisma } from "./lib/prisma"; // <-- import at the top

export const app = express(); // <-- Export the app
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Orion API get test successful" });
});

app.get("/budgets", async (req, res) => {
  const budgets = await prisma.budgetCategory.findMany();
  res.json(budgets);
});

// Only start the server if run directly, not when imported by tests
if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Orion API is running on port ${PORT}`);
  });
}
