import express from "express";
import { users } from "./user.js";

const router = express();

router.get("/users", users);

export default router;
