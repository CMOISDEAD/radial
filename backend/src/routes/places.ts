import express from "express";
import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const router = express();
const prisma = new PrismaClient();

/** Return all the places in the db */
router.get("/places", async (req: Request, res: Response) => {
  try {
    const places = await prisma.place.findMany();
    res.status(200).send(places);
  } catch (error) {
    console.error(error);
    res.status(500).send("There was an error trying to get the places");
  }
});

/** Return the first place with param id */
router.get("/places", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const place = await prisma.place.findFirst({
      where: {
        id,
      },
    });
    if (!place) res.status(404).send("Place not found");
    res.status(200).send(place);
  } catch (error) {
    console.error(error);
    res.status(500).send("There was an error trying to get the place");
  }
});

/** Store a place on the db */
router.post("/places", async (req: Request, res: Response) => {
  res.status(200).send("");
});

export default router;
