import express from "express";
import { users } from "./user.js";

const router = express();

router.get("/get", users);

export default router;
