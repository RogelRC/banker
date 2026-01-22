"use client";

import { treasureService } from "@/lib/services/treasureService";
import { useState, useEffect } from "react";
import { Treasure } from "@/entities/Treasure";

export const useAccountsPreview = () => {
  const [accounts, setAccounts] = useState<Treasure[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const accountsData = await treasureService.getAll();
        console.log("Fetched accounts data:", accountsData);
        setAccounts(accountsData);
      } catch (error) {
        console.error("Failed to fetch accounts preview:", error);
      }
    };

    fetchAccounts();
  }, []);

  return { accounts, setAccounts };
};
