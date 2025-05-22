import "reflect-metadata";
import express from "express";
import cors from "cors";
import { authRouter } from "./modules/auth/auth.router";
import { specialistRouter } from "./modules/user/specialist/specialist.router";
import { appointmentRouter } from "./modules/appointment/appointment.router";

export const app = express();
app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/specialist", specialistRouter);
app.use("/appointments", appointmentRouter);

app.get("/", (req, res) => {
  return res.json("Servidor funcionando 🚀!").status(200);
});
