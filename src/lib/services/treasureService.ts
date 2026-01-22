import { Treasure } from "@/entities/Treasure";

const API_URL = "/api/accounts";

export const treasureService = {
  async getAll(): Promise<Treasure[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener tesoros");
    return res.json();
  },

  async create(treasure: Treasure): Promise<Treasure> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(treasure),
    });
    if (!res.ok) throw new Error("Error al crear tesoro");
    return res.json();
  },

  async update(treasure: Treasure): Promise<Treasure> {
    const res = await fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(treasure),
    });
    if (!res.ok) throw new Error("Error al actualizar tesoro");
    return res.json();
  },

  async delete(code: number): Promise<void> {
    const res = await fetch(`${API_URL}?code=${code}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar tesoro");
  },
};
