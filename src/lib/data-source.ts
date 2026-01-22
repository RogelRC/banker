import "reflect-metadata";
import { DataSource } from "typeorm";
import { Treasure } from "@/entities/Treasure";
import { Transaction } from "@/entities/Transaction";
import { Transfer } from "@/entities/Transfer";

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "database.sqlite", // 👉 se crea automáticamente

  synchronize: true, // 👈 crea tablas si no existen
  logging: false,

  entities: [Treasure, Transaction, Transfer],
});
