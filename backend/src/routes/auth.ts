import express from "express";
import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const router = express();
const prisma = new PrismaClient();

router.get("/all", (req, res) => {
  console.log("All users");
  res.status(200).send("All users");
});

// Login a user
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!user) res.status(404).send("User not found");
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("There was an error trying to login");
  }
});

// Register a user
router.post("/register", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const check = await prisma.user.findFirst({
      where: {
        username: data.username,
        email: data.email,
      },
    });
    if (check) res.status(400).send("User already exists");
    const user = await prisma.user.create({ data });
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("There was an error trying to register");
  }
});

export default router;
