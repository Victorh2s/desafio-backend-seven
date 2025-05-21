import "reflect-metadata";
import express from "express";
import cors from "cors";
import { authRouter } from "./modules/auth/auth-router";

export const app = express();
app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);
