import { app } from "./app";
import "dotenv/config";
import { notificationScheduler } from "./cron/scheduler";
process.env.TZ = "America/Sao_Paulo";
console.log("Scheduler de notificações inicializado");

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});

process.on("SIGTERM", () => {
  notificationScheduler.stop();
  process.exit(0);
});

process.on("SIGINT", () => {
  notificationScheduler.stop();
  process.exit(0);
});
