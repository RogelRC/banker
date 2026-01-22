import { AppDataSource } from "./data-source";

let initialized = false;

export async function initDB() {
  if (!initialized) {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("📦 SQLite inicializada");
    }
    initialized = true;
  }

  return AppDataSource;
}
