import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Customer Route" });
});

export default router;