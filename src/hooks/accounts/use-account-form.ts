"use client";

import { useState } from "react";
import { treasureService } from "@/lib/services/treasureService";
import { Treasure } from "@/entities/Treasure";
import { toast } from "sonner";

export const useAccountForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    destination: "",
    balance: "",
    currency: "",
    comment: "",
    color: "#000000",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newAccount: Treasure = {
        code: Number(formData.code),
        name: formData.name,
        destiny: formData.destination,
        balance: Number(formData.balance),
        currency: formData.currency,
        comment: formData.comment,
        color: formData.color,
        visible: true,
      };

      await treasureService.create(newAccount);
      toast.success("Cuenta creada exitosamente");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return { formData, setFormData, handleChange, handleSubmit };
};
